<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\InterieurReservationController;
use App\Http\Controllers\StripeCheckoutController;

// Stripe checkout
Route::post('/stripe/checkout', [StripeCheckoutController::class, 'create'])->name('stripe.checkout');

// Réservation intérieur - POST unique sans doublons
Route::post('/reservations/interieur', [InterieurReservationController::class, 'store'])->name('reservations.interieur.store');

// Pages de confirmation et annulation Stripe
Route::get('/merci', fn () => Inertia::render('Reservation.Panier'))->name('stripe.success');
Route::get('/reservation-annulee', fn () => Inertia::render('Reservation.ReservationInterieur'))->name('stripe.cancel');

// Page d'accueil
Route::get('/', fn () => Inertia::render('Home'))->name('home');

// Pages principales (Header)
Route::get('/services', fn () => Inertia::render('Header/Services'))->name('services');
Route::get('/tarifs', fn () => Inertia::render('Header/Tarifs'))->name('tarifs');
Route::get('/contact', fn () => Inertia::render('Header/Contact'))->name('contact');

// Authentification
Route::get('/connexion', fn () => Inertia::render('Header/Connexion'))->name('login');
Route::post('/connexion', [AuthController::class, 'login'])->name('login.post');
Route::get('/inscription', fn () => Inertia::render('Header/Inscription'))->name('register');
Route::post('/inscription', [AuthController::class, 'register'])->name('register.post');

// Profil (protégé par auth)
Route::middleware('auth')->group(function () {
    Route::get('/profile', fn () => Inertia::render('Header/Profile'))->name('profile');
    Route::post('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');
});

// Pages de réservation (dans le dossier Reservation)
Route::get('/reservation/ReservationInterieur', fn () => Inertia::render('Reservation.ReservationInterieur'))->name('reservation.interieur');
Route::get('/reservation/ReservationExterieur', fn () => Inertia::render('Reservation.ReservationExterieur'))->name('reservation.exterieur');
Route::get('/reservation/ReservationComplete', fn () => Inertia::render('Reservation.ReservationComplete'))->name('reservation.complete');
Route::get('/reservation/Panier', fn () => Inertia::render('Reservation.Panier'))->name('reservation.panier');

// Pages d'information (Footer)
Route::get('/propos', fn () => Inertia::render('Footer/Propos'))->name('propos');
Route::get('/carriere', fn () => Inertia::render('Footer/Carriere'))->name('carriere');
Route::get('/blog', fn () => Inertia::render('Footer/Blog'))->name('blog');
Route::get('/faq', fn () => Inertia::render('Footer/FAQ'))->name('faq');
Route::get('/aide', fn () => Inertia::render('Footer/Aide'))->name('aide');
Route::get('/mentions-legales', fn () => Inertia::render('Footer/MentionsLegales'))->name('mentions-legales');
Route::get('/cgu', fn () => Inertia::render('Footer/CGU'))->name('cgu');
Route::get('/confidentialite', fn () => Inertia::render('Footer/Confidentialite'))->name('confidentialite');

// Page 404
Route::fallback(fn () => Inertia::render('Page404'))->name('404');
