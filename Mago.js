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
exports.Mago = void 0;
var mainPersonaje_1 = require("./mainPersonaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, salud, fuerza, nivel, magia) {
        var _this = _super.call(this, nombre, salud, fuerza, nivel) || this;
        _this.magia = magia;
        return _this;
    }
    Mago.prototype.lanzarHechizo = function (objetivo) {
        var danio = this.magia * (this.nivel / 2);
        objetivo.recibirDanio(danio);
        console.log("".concat(this.nombre, " lanza un hechizo a ").concat(objetivo.nombre, " y causa ").concat(danio, " puntos de da\u00F1o."));
        if (objetivo.salud === 0) {
            this.ganarExperiencia(70); // El mago gana más experiencia al usar magia
        }
    };
    Mago.prototype.subirNivel = function () {
        _super.prototype.subirNivel.call(this);
        this.magia += 10; // Mejora su magia en cada nivel
        console.log("".concat(this.nombre, " ha incrementado su poder m\u00E1gico a ").concat(this.magia, "."));
    };
    return Mago;
}(mainPersonaje_1.Personaje));
exports.Mago = Mago;
