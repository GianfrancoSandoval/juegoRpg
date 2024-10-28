
import { Mago } from "./Mago";
import { Guerrero } from "./Guerrero";
import { Enemigo } from "./Enemigo";


const mago = new Mago("Merlín", 100, 10, 1, 30);
const guerrero = new Guerrero("Arturo", 150, 15, 1, 10);
const enemigo = new Enemigo("Orco", 80, 12, 1, 5);

mago.lanzarHechizo(enemigo);
guerrero.atacar(enemigo);
