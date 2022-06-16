class Negociacao{
  // definir a propriedade da classe
  constructor(data, quantidade, valor){ //parâmetros do construtor
    // this.data = new Date(); //data atual
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  obtemVolume(){
    return this.quantidade * this.valor;
  }
}