


export interface IUsarbolModel {
  contador?: number ;
  numero?: number ;
  nodo?: string;
  modulo?: number;
  padre?: string;
  descripcion?: string;
  llave?:number;
  icono?:string,
  aburl?:string
}

export class UsarbolModel implements IUsarbolModel  {

  contador?: number ;
  numero?: number ;
  nodo: string | undefined;
  modulo: number | undefined;
  padre: string | undefined;
  descripcion: string | undefined;
  llave: number | undefined;
  icono?:string;
  aburl?: string;

}
