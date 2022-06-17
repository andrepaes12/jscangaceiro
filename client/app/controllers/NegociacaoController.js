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

    let data = new Date(
      ...this._inputData.value
      .split('-')
      // uma instrução não requer bloco {} e nem o termo return
      .map((item, indice) => item - indice % 2)
      );
    console.log(data);

  }
}