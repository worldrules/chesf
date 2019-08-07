import { environment } from '../../../environments/environment';

export const baseApi = { url: environment.baseUrl }

export const Url = {
    logsistema: '',
    principal: baseApi.url + 'consulta/principal',
    comoParticipar: baseApi.url + 'consulta/comoparticipar',
    descricaoPrincipal:  baseApi.url + 'consulta/principal/descricao',
    descricaoComoParticipar:  baseApi.url + 'consulta/comoparticipar/descricao',
    pesquisa: {
        resultado: baseApi.url + 'consulta/pesquisar',
        total: baseApi.url + 'consulta/pesquisartotal',
    },
    avisoLicitacao: {
        getLicitacoesAtivas: baseApi.url + 'consulta/licitacao/ativas',
        getTotalLicitacoesAtivas: baseApi.url + 'consulta/licitacao/ativasTotal',
        getLicitacoesInativas: baseApi.url + 'consulta/licitacao/inativas',
        getTotalLicitacoesInativas: baseApi.url + 'consulta/licitacao/inativasTotal',
        getLicitacaoDetalhes: baseApi.url + 'consulta/licitacao/detalhes'
    },
    aviso: {
        emConfiguracao: {
            recupera: baseApi.url + 'aviso/emconfiguracao/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/emconfiguracao/total',
            getDetalhes: baseApi.url + 'aviso/emconfiguracao/detalhes',
            salvaDataLicitacao: baseApi.url + 'aviso/emconfiguracao/salva'
        },
        expirado: {
            recupera: baseApi.url + 'aviso/expirado/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/expirado/total',
            getDetalhes: baseApi.url + 'aviso/expirado/detalhes'
        },
        geral: {
            recupera: baseApi.url + 'aviso/geral/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/geral/total',
            getDetalhes: baseApi.url + 'aviso/geral/detalhes',
        },
        naopublicado: {
            recupera: baseApi.url + 'aviso/naopublicado/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/naopublicado/total',
            getDetalhes: baseApi.url + 'aviso/naopublicado/detalhes'
        },
        programado: {
            recupera: baseApi.url + 'aviso/programado/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/programado/total',
            getDetalhes: baseApi.url + 'aviso/programado/detalhes'
        },
        publicado: {
            recupera: baseApi.url + 'aviso/publicado/pesquisa',
            recuperaTotal: baseApi.url + 'aviso/publicado/total',
            getDetalhes: baseApi.url + 'aviso/publicado/detalhes'
        }
    },
    login: {
        chesf: {
            validar: baseApi.url + 'login/login/Validar',
            validarAD: baseApi.url + 'login/login/ValidarAD'
        },
        fornecedor: {
            validar: baseApi.url + 'login/login/fornecedor',
            trocaSenha: baseApi.url + 'login/login/trocarsenha',
            novaSenha: baseApi.url + 'login/login/novasenha'
        }
    },
    fornecedor: {
        inscrever: baseApi.url + 'fornecedor'
    }
};
