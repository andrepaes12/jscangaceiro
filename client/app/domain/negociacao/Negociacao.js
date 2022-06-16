class Negociacao{
  // definir a propriedade da classe
  // constructor(data, quantidade, valor){ //parâmetros do construtor
    // this.data = new Date(); //data atual
    // uso do _ para lembrar que a propriedade não deve ser alterada
    // this._data = data;
    // para data não ser alterada
    // this._data = new Date(data.getTime());
    // this._quantidade = quantidade;
    // this._valor = valor;

    // copiar para this (instância destino) as propriedades do objeto de origem
    // Object.assign(this, {
    //   _data: new Date(data.getTime()),
    //   _quantidade: quantidade,
    //   _valor: valor
    // });
    // Object.freeze(this);
  // }

  // nomes dos parâmetro igual ao nome das propriedades
  constructor(_data, _quantidade, _valor){
    // usando o atalho para declarar as propriedades
  //   Object.assign(this,
  //     {
  //       _data: new Date(_data.getTime()),
  //       _quantidade,
  //       _valor
  //     });
  //     Object.freeze(this);
  //   }
  
    // deixando o código mais legível
    Object.assign(this, {_quantidade, _valor});
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }

  get volume(){
    return this._quantidade * this._valor;
  }

  get data(){
    // return this._data;
    // evitar alterar a data
    return new Date(this._data.getTime());
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }
}