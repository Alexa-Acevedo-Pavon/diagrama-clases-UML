export class precioProducto{
    private Precioproducto:number=0;

    constructor(precioproducto:number){
        this.Precioproducto=precioproducto;
    }
    public get_Precioproducto():number{
        return this.Precioproducto;
    }
    public set_Precioproducto(Precioproducto:number){
        this.Precioproducto=Precioproducto;
     }
    public valida(valida:string){ }

    public visualizarPrecios(visualizarPrecios:string){ }
    
    public registrarProductoPrecio(registrarProductoPrecio:string){ }

    public visualizacionPrecioProducto(visualizacionPrecioProducto:string){ }

    public modificarProductoPrecio(modificarProductoPrecio:string){ }
}