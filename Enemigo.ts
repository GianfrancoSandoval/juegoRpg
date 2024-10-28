import { Personaje } from "./mainPersonaje";

export class Enemigo extends Personaje {
    peligrosidad: number;

    constructor(nombre: string, salud: number, fuerza: number, nivel: number, peligrosidad: number) {
        super(nombre, salud, fuerza, nivel);
        this.peligrosidad = peligrosidad;
    }

    amenazar(): void {
        this.fuerza += this.peligrosidad;
        console.log(`${this.nombre} se vuelve más peligroso, aumentando su fuerza en ${this.peligrosidad} puntos.`);
    }
}