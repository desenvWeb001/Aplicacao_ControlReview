import { Cliente } from './cliente.model';
import { Veiculo } from './veiculo.model';

export interface OrdemServico{
    id?: number
    cliente: Cliente
    tipoOrdemServico: string
    veiculo: Veiculo
    km: string
    observacao: string
    dataSys: string
}