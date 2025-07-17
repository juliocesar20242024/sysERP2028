


export interface IUsarbolModel {
  contador?: number ;
  UsNumero?: number ;
  abNodo?: string;
  mdModulo?: string | undefined;
  abPadre?: string;
  abDescripcion?: string;
  abLlave?:string | undefined;
  AbIcono?:string,
  abUrl?:string
}

export class UsarbolModel implements IUsarbolModel  {

  contador?: number ;
  UsNumero?: number ;
  abNodo: string | undefined;
  mdModulo: string  | undefined;
  abPadre: string | undefined;
  abDescripcion: string | undefined ;
  abLlave: string  | undefined;
  AbIcono?:string;
  abUrl?: string;

}
