import { ItemLicitacao } from './item.licitacao';

export class LicitacaoDetalhe {
    id: number;
    numero: string;
    objeto: string;
    criterio: string;
    dataAquisicao: Date;    
    itens: ItemLicitacao[];
    local: string;
    endereco: string;
    telefones: string;
    fax: string;
    abertura: string;
    modalidade: string;
    julgamento: string;
  }