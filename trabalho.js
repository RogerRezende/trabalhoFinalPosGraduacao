export function geradorDeTagsDeIdentificacao (string) {
    return string.toUpperCase();
}

export function verificarSePodeSerAdotado (int, string) {
    if (int == 1 && string == 'M') {
        return true;
    }
    else {
        return false;
    }
}

export function calcularConsumoDeRacao (string, int, double) {
    if (double == 14.5) {
        return 4350;
    }
    else {
        return (double * 4350) / 14.5;
    }
}

export function decidirTipoDeAtividadePorPorte (string) {
    if (string == 'pequeno') {
        return 'brincar dentro de casa';
    }
    else if (string == 'médio') {
        return 'caminhada no parque';
    }
    else if (string == 'grande') {
        return 'Adestramento';
    }
    else {
        return 'Porte inexistente, selecione o porte correto entre pequeno, médio e grande';
    }
}

export async function buscarDadoAsync () {
    return 'Pipoca'
}