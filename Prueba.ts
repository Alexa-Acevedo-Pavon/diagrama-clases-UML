import { Usuario } from './USUARIO'; import {Cliente} from "./CLIENTE";import {Administrador} from "./ADMINISTRADOR";import {Vendedor} from "./VENDEDOR";
import {PersonaContacto} from "./PERSONACONTACTO";import {Pedido} from "./PEDIDO";import {Producto} from "./PRODUCTO";import {categoriaProductos} from "./CATEGORIAPRODUCTOS";
import {precioProducto} from "./PRECIOPRODUCTO";

let Alexa=new Usuario("Alexa",389837829,1);console.log(Alexa);

let Jose= new Cliente("Jose07",29389328,"Jose Juarez Ramirez",2674920347,96118,"josejuarez@gmail.com","Hidalgo 155 entre madero y serdan");
console.log(Jose);

let Marco=new Administrador("Marco67",86805706,"Marco Antonio Sanchez",749628107);
console.log(Marco);

let Elena=new Vendedor("Elen16",84089301,"Elena Rodriguez Sanchez",6829924315,"Lerdo 167 entre saragoza y miguel hidalgo","ele16Rodriguez@gmail.com",67114);
console.log(Elena);

let Nacaria=new PersonaContacto("Nacaria Baltazar Solano",2936943996,"Nacariabuas@gmail.com");
console.log(Nacaria);

let pedido=new Pedido(1,"22/11/2022","24/11/2022",1500,"Landero y coss 2508");
console.log(pedido);

let Jabon=new Producto(24629492,"Jabon","Jabon para ropa");
console.log(Jabon);

let Electrodomesticos= new categoriaProductos(3,"Electrodomesticos","Productos como: Lavadoras,Microondas,Refrigeradores,Televisores,Licuadoras,entre otros");
console.log(Electrodomesticos);

let Precio=new precioProducto(20);
console.log(Precio);