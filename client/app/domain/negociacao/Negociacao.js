class Negociacao{
  // definir a propriedade da classe
  constructor(data, quantidade, valor){ //parâmetros do construtor
    // this.data = new Date(); //data atual
    // uso do _ para lembrar que a propriedade não deve ser alterada
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get volume(){
    return this._quantidade * this._valor;
  }

  get data(){
    return this._data;
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }
}