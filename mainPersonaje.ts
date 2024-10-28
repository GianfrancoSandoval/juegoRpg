export class Personaje {
    nombre: string;
    salud: number;
    fuerza: number;
    nivel: number;
    experiencia: number;
    experienciaNecesaria: number;

    constructor(nombre: string, salud: number, fuerza: number, nivel: number) {
        this.nombre = nombre;
        this.salud = salud;
        this.fuerza = fuerza;
        this.nivel = nivel;
        this.experiencia = 0;
        this.experienciaNecesaria = 100; // Cantidad de experiencia necesaria para subir de nivel
    }

    atacar(objetivo: Personaje): void {
        const danio = this.fuerza * (this.nivel / 2);
        objetivo.recibirDanio(danio);
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y causa ${danio} puntos de daño.`);

        if (objetivo.salud === 0) {
            this.ganarExperiencia(50); // Experiencia ganada al derrotar a un enemigo
        }
    }

    recibirDanio(danio: number): void {
        this.salud -= danio;
        if (this.salud <= 0) {
            this.salud = 0;
            console.log(`${this.nombre} ha sido derrotado.`);
        } else {
            console.log(`${this.nombre} tiene ${this.salud} puntos de salud restantes.`);
        }
    }

    ganarExperiencia(exp: number): void {
        this.experiencia += exp;
        console.log(`${this.nombre} gana ${exp} puntos de experiencia.`);
        if (this.experiencia >= this.experienciaNecesaria) {
            this.subirNivel();
        }
    }

    subirNivel(): void {
        this.nivel += 1;
        this.salud += 20;
        this.fuerza += 5;
        this.experiencia = 0; // Reiniciar experiencia tras subir de nivel
        this.experienciaNecesaria += 50; // Incrementar la experiencia necesaria para el próximo nivel
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}! Salud y fuerza aumentadas.`);
    }
}


