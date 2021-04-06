<?php

namespace App\Models\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;




protected $fillable = [
    'name', 'email', 'phone','address','shopname','photo'
];

}