import { Personaje } from "./mainPersonaje";

export class Guerrero extends Personaje {
    defensa: number;

    constructor(nombre: string, salud: number, fuerza: number, nivel: number, defensa: number) {
        super(nombre, salud, fuerza, nivel);
        this.defensa = defensa;
    }

    bloquear(danio: number): void {
        const danioReducido = danio - this.defensa;
        this.salud -= danioReducido > 0 ? danioReducido : 0;
        console.log(`${this.nombre} bloquea el ataque, recibiendo ${danioReducido > 0 ? danioReducido : 0} puntos de daño.`);
    }

    recibirDanio(danio: number): void {
        this.bloquear(danio);
        if (this.salud <= 0) {
            this.salud = 0;
            console.log(`${this.nombre} ha sido derrotado.`);
        } else {
            console.log(`${this.nombre} tiene ${this.salud} puntos de salud restantes.`);
        }
    }

    subirNivel(): void {
        super.subirNivel();
        this.defensa += 5; // Mejora su defensa en cada nivel
        console.log(`${this.nombre} ha incrementado su defensa a ${this.defensa}.`);
    }
}