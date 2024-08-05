import { OrdemServico } from './ordemservico.model';
export interface ManuPreventiva{
   
    id?: number
    ordemservico: OrdemServico
    embreagem : boolean
    freio: boolean
    luzespainel: boolean
    niveloleo: boolean
    kittracao: boolean
    carburador: boolean
    pneu: boolean
    observacao: string
}