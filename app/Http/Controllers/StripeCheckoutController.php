<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use App\Models\InterieurReservation;

class StripeCheckoutController extends Controller
{
    public function create(Request $request)
    {
        $reservation = InterieurReservation::find($request->input('reservation_id'));

        if (!$reservation) {
            return response()->json(['success' => false, 'message' => 'Réservation non trouvée'], 404);
        }

        Stripe::setApiKey(env('STRIPE_SECRET'));

        try {
            $checkout = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'eur',
                        'unit_amount' => 5000,
                        'product_data' => [
                            'name' => 'Nettoyage Intérieur',
                            'description' => "{$reservation->marque} {$reservation->modele} - {$reservation->immatriculation}",
                        ],
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'customer_email' => $reservation->email,
                'success_url' => route('home') . '?success=1',
                'cancel_url' => route('reservation.interieur') . '?cancelled=1',
            ]);

            return response()->json([
                'success' => true,
                'checkout_url' => $checkout->url,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur Stripe : ' . $e->getMessage(),
            ], 500);
        }
    }
}
