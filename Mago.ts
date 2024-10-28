import { Personaje } from "./mainPersonaje";

export class Mago extends Personaje {
    magia: number;

    constructor(nombre: string, salud: number, fuerza: number, nivel: number, magia: number) {
        super(nombre, salud, fuerza, nivel);
        this.magia = magia;
    }

    lanzarHechizo(objetivo: Personaje): void {
        const danio = this.magia * (this.nivel / 2);
        objetivo.recibirDanio(danio);
        console.log(`${this.nombre} lanza un hechizo a ${objetivo.nombre} y causa ${danio} puntos de daño.`);

        if (objetivo.salud === 0) {
            this.ganarExperiencia(70); // El mago gana más experiencia al usar magia
        }
    }

    subirNivel(): void {
        super.subirNivel();
        this.magia += 10; // Mejora su magia en cada nivel
        console.log(`${this.nombre} ha incrementado su poder mágico a ${this.magia}.`);
    }
}