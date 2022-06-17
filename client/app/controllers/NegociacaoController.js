class NegociacaoController {

  // os elementos do DOM serão buscados uma única vez
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    // adicionado a prop _negociacoes para receber uma instância de Negociacoes
    this._negociacoes = new Negociacoes();
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

    // inclui a negociacao
    this._negociacoes.adiciona(negociacao);

    console.log(this._negociacoes.paraArray());

    // chamar o método static
    // let diaMesAno = DateConverter.paraTexto(negociacao.data);

    // console.log(diaMesAno);

  }
}