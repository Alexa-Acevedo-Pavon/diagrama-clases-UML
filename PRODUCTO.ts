export class Producto{
    private codigoP:number=0;
    private nombre:string="";
    private descripcion:string="";
    
    constructor(codigoP:number,nombre:string,descripcion:string){
        this.codigoP=codigoP;
        this.nombre=nombre;
        this.descripcion=descripcion;
    }
    public get_codigoP():number{
        return this.codigoP;
    }
    public set_codigoP(value:number){
        this.codigoP=this.codigoP;
    }
    public get_nombre():string{
        return this.nombre;
    }
    public set_nombre(nombre:string){
        this.nombre=nombre;
    }
    public get_descripcion():string{
        return this.descripcion;
    }
    public set_descripcion(descripcion:string){
        this.descripcion=descripcion;
    }
    public valida(valida:string){ }

    public visualizarProducto(visualizarProducto:string){  }

    public registrarProducto(registrarProducto:string){ }

    public preparaPaginarProducto(preparaPaginarProducto:string){ }

    public preparaPaginarProductosAdmin(preparaPaginarProductosAdmin:string){ }

    public preparaPaginarProductosCategoria(preparaPaginarProductosCategoria:string){ }

    public visualizaProductos(visualizaProductos:string){ }
    
    public visualizaProductosAdmin(visualizaProductosAdmin:string){ }

    public visualizarModificacionProducto(visualizarModificacionProducto:string){ }

    public bajaProducto(bajaProducto:string){ }

    public tieneUnidades(tieneUnidades:string){ }

    public modificarProducto(modificarProducto:string){ }

    public modificarProductoAdmin(modificarProductoAdmin:string){ }

    public obtenerSinCategoria(obtenerSinCategoria:string){ }

    public obtenerNumeroProductos(obtenerNumeroProductos:string){ }

    public obtenerNumeroProductosVendedor(obtenerNumeroProductosVendedor:string){ }

    public obtenerNumeroProductosPedido(obtenerNumeroProductosPedido:string){ }
}