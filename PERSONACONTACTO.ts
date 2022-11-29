export class PersonaContacto{
    private NomC:string="";
    private tele:number=0;
    private Correo2:string="";

    constructor(NomC:string,tele:number,Correo2:string){
        this.NomC=NomC;
        this.tele=tele;
        this.Correo2=Correo2;
    }
    public get_NomC():string{
        return this.NomC;
    }
    public set_NomC(NomC:string){
        this.NomC=NomC;
    }
    public get_tele():number{
        return this.tele;
    }
    public set_tele(tele:number){
        this.tele=tele;
    }
    public get_Correo2():string{
        return this.Correo2;
    }
    public set_Correo2(Correo2:string){
        this.Correo2=Correo2;
    }
    public altaPersona(altaPersona:string){ }

    public visualizarPersona(visualizarPersona:string){ }

    public modificarPersona(modificarPersona:string){ }

    public bajaPersona(bajaPersona:string){ }
    
    public listarPersonasContacto(listarPersonasContacto:string){ }
}