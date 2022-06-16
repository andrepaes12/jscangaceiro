class NegociacaoController {

  // os elementos do DOM serão buscados uma única vez
  constructor(){
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event){
    // cancelando a submissão do form
    event.preventDefault();

    // verificar o tipo
    console.log(typeof(this._inputData.value));

    let negociacao = new Negociacao(
      this._inputData.value,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
  }
}