"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Guerrero_1 = require("./Guerrero");
var Enemigo_1 = require("./Enemigo");
var mago = new Mago_1.Mago("Merlín", 100, 10, 1, 30);
var guerrero = new Guerrero_1.Guerrero("Arturo", 150, 15, 1, 10);
var enemigo = new Enemigo_1.Enemigo("Orco", 80, 12, 1, 5);
mago.lanzarHechizo(enemigo);
guerrero.atacar(enemigo);
