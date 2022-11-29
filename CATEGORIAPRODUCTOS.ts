export class categoriaProductos{
    private Numcategoria:number=0;
    private NombreCategoria:string="";
    private DescripcionCategoria:string="";

    constructor(Numcategoria:number, NombreCategoria:string,DescripcionCategoria:string){
        this.Numcategoria = Numcategoria;
        this.NombreCategoria = NombreCategoria;
        this.DescripcionCategoria = DescripcionCategoria;
    }
    public get_Numcategoria():number{
        return this.Numcategoria;
    }
    public set_Numcategoria(Numcategoria:number){
        this.Numcategoria = Numcategoria;
    }
    public get_NombreCategoria():string{
        return this.NombreCategoria;
    }
    public set_NombreCategoria(NombreCategoria:string){
        this.NombreCategoria=NombreCategoria;
    }
    public get_DescripcionCategoria():string{
        return this.DescripcionCategoria;
    }
    public set_DescripcionCategoria(DescripcionCategoria:string){
        this.DescripcionCategoria=DescripcionCategoria;
    }
    public valida(valida:string){ }

    
    public registrarCategoria(registrarCategoria:string){}
    
    public preparaPaginarCategoria(preparaPaginarCategoria:string){ }
    
    public visualizaCategorias(visualizaCategorias:string){ }
    
    public visualizaEliminacionCategoria(visualizaEliminacionCategoria:string){ }
    
    public modificarCategoria(modificarCategoria:string){ }
    
    public visualizacionModificarCategoria(visualizacionModificarCategoria:string){ }
    
    public visualizaProductosCategoria(visualizaProductosCategoria:string){ }
    
    public bajaCategoria(bajaCategoria:string){ }
    
    public obtenerNumeroCategorias(obtenerNumeroCategorias:string){ }
}