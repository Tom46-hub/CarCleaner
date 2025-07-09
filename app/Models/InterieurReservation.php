<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InterieurReservation extends Model
{
    use HasFactory;

    // Nom explicite de la table
    protected $table = 'interieur';

    protected $fillable = [
        'prenom',
        'nom',
        'email',
        'telephone',
        'marque',
        'modele',
        'annee',
        'immatriculation',
        'carburant',
        'transmission',
    ];
}
