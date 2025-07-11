<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('interieur', function (Blueprint $table) {
            $table->id();
            $table->string('prenom');
            $table->string('nom');
            $table->string('email');
            $table->string('telephone');
            $table->string('marque');
            $table->string('modele');
            $table->year('annee');
            $table->string('immatriculation');
            $table->string('carburant');
            $table->string('transmission');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('interieur_reservations');
    }
};
