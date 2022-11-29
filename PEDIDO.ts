export class Pedido{
    private Numpedido:number=0;
    private fechapedido:string="";
    private fechaentregap:string="";
    private totalPedido:number=0;
    private direcentrega:string="";

    constructor(Numpedido:number,fechapedido:string,fechaentregap:string,totalPedido:number,direcentrega:string){
        this.Numpedido=Numpedido;
        this.fechapedido=fechapedido;
        this.fechaentregap=fechaentregap;
        this.totalPedido=totalPedido;
        this.direcentrega=direcentrega;
    }
    public get_Numpedido():number{
        return this.Numpedido;
    } 
    public set_Numpedido(Numpedido:number){
        this.Numpedido=Numpedido;
    }
    public get_fechapedido():string{
        return this.fechapedido;
    }
    public set_fechapedido(fechapedido:string){
        this.fechapedido=fechapedido;
    }
    public get_fechaentregap():string{
        return this.fechaentregap;
    }
    public set_fechaentregap(fechaentregap:string){
        this.fechaentregap=fechaentregap;
    }
    public get_totalPedido():number{
        return this.totalPedido;
    }
    public set_totalPedido(totalPedido:number){
        this.totalPedido=totalPedido;
    }
    public get_direcentrega():string{
        return this.direcentrega;
    }
    public set_direcentrega(direcentrega:string){
       this.direcentrega=direcentrega;
    }
    public registrarPedido(registrarPedido:string){ }

    public obtenerNumeroPedidos(obtenerNumeroPedidos:string){ }
}