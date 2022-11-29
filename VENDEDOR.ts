import {Usuario} from "./USUARIO";
export class Vendedor extends Usuario{
    private nombreC:string = "";
    private telefono:number=0;
    private direccion:string="";
    private correo:string="";
    private codigopost:number=0;

    constructor(Nombredeusuario:string,contraseña:number,nombreC:string,telefono:number,direccion:string,correo:string,codigopost:number){
        super(Nombredeusuario,contraseña,Usuario);
        this.nombreC=nombreC;
        this.telefono=telefono;
        this.direccion=direccion;
        this.correo=correo;
        this.codigopost=codigopost;
    }
    public get_nombreC():string{
       return this.nombreC;
    }
    public set_nombreC(nombreC:string){
       this.nombreC=nombreC;
    }
    public get_telefono():number{
        return this.telefono;
    }
    public set_telefono(telefono:number){
        this.telefono=telefono;
    }
    public get_direccion():string{
        return this.direccion;
    }
    public set_direccion(direccion:string){
        this.direccion=direccion;
    }
    public get_correo():string{
        return this.correo;
    }
    public set_correo(correo:string){
        this.correo=correo;
    }
    public get_codigopost():number{
        return this.codigopost;
    }
    public set_codigopost(codigopost:number){
        this.codigopost=codigopost;
    }
    public validar(validar:string){}
    public visualizaVendedor(visualizaVendedor:string){}
    public modificarVendedor(modificarVendedor:string){}
    public bajaVendedor(bajaVendedor:string){}
    public obtenerNumeroVendedores(obtenerNumeroVnededores:string){}
}