class Negociacoes {
  constructor(){
    // o uso do _ indica que só pode ser acessada por método da própria classe
    this._negociacoes = [];
  }

  // receber uma negociação
  adiciona(negociacao){
    this._negociacoes.push(negociacao);
  }

  // ler a lista de negociações
  // retornar o array interno encapsulado pela classe
  paraArray(){
    return this._negociacoes;
  }
}