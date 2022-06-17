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

    let converter = new DateConverter();

    let data = converter.paraData(this._inputData.value);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    let diaMesAno = converter.paraTexto(negociacao.data);

    console.log(diaMesAno);

  }
}