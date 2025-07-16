


export interface IUsarbolModel {
  contador?: number ;
  UsNumero?: number ;
  nodo?: string;
  MdModulo?: number;
  AbPadre?: string;
  abDescripcion?: string;
  AbLlave?:number;
  AbIcono?:string,
  abUrl?:string
}

export class UsarbolModel implements IUsarbolModel  {

  contador?: number ;
  UsNumero?: number ;
  nodo: string | undefined;
  MdModulo: number | undefined;
  AbPadre: string | undefined;
  abDescripcion: string | undefined ;
  AbLlave: number | undefined;
  AbIcono?:string;
  abUrl?: string;

}
