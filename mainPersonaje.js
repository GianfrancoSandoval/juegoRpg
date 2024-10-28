"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, salud, fuerza, nivel) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
        this.nivel = nivel;
        this.experiencia = 0;
        this.experienciaNecesaria = 100; // Cantidad de experiencia necesaria para subir de nivel
    }
    Personaje.prototype.atacar = function (objetivo) {
        var danio = this.fuerza * (this.nivel / 2);
        objetivo.recibirDanio(danio);
        console.log("".concat(this.nombre, " ataca a ").concat(objetivo.nombre, " y causa ").concat(danio, " puntos de da\u00F1o."));
        if (objetivo.salud === 0) {
            this.ganarExperiencia(50); // Experiencia ganada al derrotar a un enemigo
        }
    };
    Personaje.prototype.recibirDanio = function (danio) {
        this.salud -= danio;
        if (this.salud <= 0) {
            this.salud = 0;
            console.log("".concat(this.nombre, " ha sido derrotado."));
        }
        else {
            console.log("".concat(this.nombre, " tiene ").concat(this.salud, " puntos de salud restantes."));
        }
    };
    Personaje.prototype.ganarExperiencia = function (exp) {
        this.experiencia += exp;
        console.log("".concat(this.nombre, " gana ").concat(exp, " puntos de experiencia."));
        if (this.experiencia >= this.experienciaNecesaria) {
            this.subirNivel();
        }
    };
    Personaje.prototype.subirNivel = function () {
        this.nivel += 1;
        this.salud += 20;
        this.fuerza += 5;
        this.experiencia = 0; // Reiniciar experiencia tras subir de nivel
        this.experienciaNecesaria += 50; // Incrementar la experiencia necesaria para el próximo nivel
        console.log("".concat(this.nombre, " ha subido al nivel ").concat(this.nivel, "! Salud y fuerza aumentadas."));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
