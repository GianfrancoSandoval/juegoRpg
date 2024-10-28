"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerrero = void 0;
var mainPersonaje_1 = require("./mainPersonaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, salud, fuerza, nivel, defensa) {
        var _this = _super.call(this, nombre, salud, fuerza, nivel) || this;
        _this.defensa = defensa;
        return _this;
    }
    Guerrero.prototype.bloquear = function (danio) {
        var danioReducido = danio - this.defensa;
        this.salud -= danioReducido > 0 ? danioReducido : 0;
        console.log("".concat(this.nombre, " bloquea el ataque, recibiendo ").concat(danioReducido > 0 ? danioReducido : 0, " puntos de da\u00F1o."));
    };
    Guerrero.prototype.recibirDanio = function (danio) {
        this.bloquear(danio);
        if (this.salud <= 0) {
            this.salud = 0;
            console.log("".concat(this.nombre, " ha sido derrotado."));
        }
        else {
            console.log("".concat(this.nombre, " tiene ").concat(this.salud, " puntos de salud restantes."));
        }
    };
    Guerrero.prototype.subirNivel = function () {
        _super.prototype.subirNivel.call(this);
        this.defensa += 5; // Mejora su defensa en cada nivel
        console.log("".concat(this.nombre, " ha incrementado su defensa a ").concat(this.defensa, "."));
    };
    return Guerrero;
}(mainPersonaje_1.Personaje));
exports.Guerrero = Guerrero;
