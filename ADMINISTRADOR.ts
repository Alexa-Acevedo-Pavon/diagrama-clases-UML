import {Usuario} from "./USUARIO";
export class Administrador extends Usuario{
    private Nombrecom:string="";
    private Telefono:number=0;
    constructor(Nombredeusuario:string,contraseña:number,Nombrecom:string,Telefono:number){
        super(Nombredeusuario,contraseña,Usuario);
        this.Nombrecom=Nombrecom;
        this.Telefono=Telefono;
    }
    public get_Nombrecom():string{
        return this.Nombrecom;
    }
    public set_Nombrecom(Nombrecom:string){
        this.Nombrecom=Nombrecom;
    }
    public get_Telefono():number{
        return this.Telefono;
    }
    public set_Telefono(Telefono:number){
        this.Telefono=Telefono;
    }
    public validar(validar:string){ }

    public visualizaAdministrador(visualizaAdministrador:string){ }
    
    public modificarAdministrador(modificarAdministrador:string){}
}