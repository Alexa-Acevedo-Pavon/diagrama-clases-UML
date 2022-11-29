export class Usuario{
    private Nombredeusuario:string="";
    private contraseña:number=0;
    private usuario:any=[]=[];

    constructor(Nombredeusuario:string,contraseña:number,usuario:any){
        this.Nombredeusuario=Nombredeusuario;
        this.contraseña=contraseña;
        this.usuario.push(usuario);
    }
    public get_Nombredeusuario():string{
        return this.Nombredeusuario;
    }
    public set_Nombredeusuario(Nombredeusuario:string){
       this.Nombredeusuario=Nombredeusuario; 
    }
    public get_contraseña():number{
        return this.contraseña;
    }
    public set_contraseña(contraseña:number){
        this.contraseña=contraseña;
    }
    public setld(setld:string){ }

    public validar(valiar:string){ }

    public visualizarUsuario(visualizar:string){ }

    public modificarUsuario(nmdificar:string){ }

    public bajaUsuario(bajaUsuario:string){ }

}