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
exports.Enemigo = void 0;
var mainPersonaje_1 = require("./mainPersonaje");
var Enemigo = /** @class */ (function (_super) {
    __extends(Enemigo, _super);
    function Enemigo(nombre, salud, fuerza, nivel, peligrosidad) {
        var _this = _super.call(this, nombre, salud, fuerza, nivel) || this;
        _this.peligrosidad = peligrosidad;
        return _this;
    }
    Enemigo.prototype.amenazar = function () {
        this.fuerza += this.peligrosidad;
        console.log("".concat(this.nombre, " se vuelve m\u00E1s peligroso, aumentando su fuerza en ").concat(this.peligrosidad, " puntos."));
    };
    return Enemigo;
}(mainPersonaje_1.Personaje));
exports.Enemigo = Enemigo;
