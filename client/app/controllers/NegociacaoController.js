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

    // chamar o método static
    let negociacao = new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao.data);

    // chamar o método static
    let diaMesAno = DateConverter.paraTexto(negociacao.data);

    console.log(diaMesAno);

  }
}