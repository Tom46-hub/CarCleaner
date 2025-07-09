<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InterieurReservation;

class InterieurReservationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'prenom' => 'required|string',
            'nom' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'marque' => 'required|string',
            'modele' => 'required|string',
            'annee' => 'required|integer',
            'immatriculation' => 'required|string',
            'carburant' => 'required|string',
            'transmission' => 'required|string',
        ]);

        $reservation = InterieurReservation::create($validated);

        // Redirection vers la route 'reservation.panier' avec l'id de la réservation
        return redirect()->route('reservation.panier', ['reservation_id' => $reservation->id]);
    }
}
