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

    this._negociacoes.adiciona(this._criaNegociacao());
    // teste para apagar a lista
    this._negociacoes.paraArray().length = 0;

    console.log(this._negociacoes.paraArray());

    this._limpaFormulario();

  }

  // método para limpar o form após clicar no btn incluir
  _limpaFormulario(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  // novo método
  _criaNegociacao(){
    // retornar uma instância de negociação
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }
}