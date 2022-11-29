import { Usuario } from "./USUARIO";
export class Cliente extends Usuario{
    private Nombrecompleto:string="";
    private Telefono:number=0;
    private Codigopos:number=0;
    private Correo:string="";
    private Direccion:string="";

    constructor(Nombredeusuario:string,contraseña:number,Nombrecompleto:string,Telefono:number,Codigopos:number,Correo:string,Direccion:string){
        super(Nombredeusuario,contraseña,Usuario);
        this.Nombrecompleto=Nombrecompleto;
        this.Telefono=Telefono;
        this.Codigopos=Codigopos;
        this.Correo=Correo;
        this.Direccion=Direccion;
    }
    public get_Nombrecompleto():string{
        return this.Nombrecompleto;
    }
    public set_Nombrecompleto(Nombrecompleto:string){
        this.Nombrecompleto=Nombrecompleto;
    }
    public get_Telefono():number{
        return this.Telefono;
    }
    public set_Telefono(Telefono:number){
        this.Telefono=Telefono;
    }
    public get_Codigopos():number{
        return this.Codigopos;
    }
    public set_Codigopos(Codigopos:number){
        this.Codigopos=Codigopos;
    }
    public get_Correo():string{
        return this.Correo;
    }
    public set_Correo(Correo:string){
        this.Correo=Correo;
    }
    public get_Dirrecion():string{
        return this.Direccion;
    }
    public set_Direccion(Direccion:string){
        this.Direccion=Direccion
    }
    public validar(validar:string){ }

    public registrar(registrar:string){ }

    public visualizaCliente(visualizaCliente:string){ } 

    public modifficarCliente(modificarCliente:string){ }

    public bajaCliente(bajaCliente:string){ }

    public obtenerNumeroClientes(obtenerNumeroClientes:string){ } 
}