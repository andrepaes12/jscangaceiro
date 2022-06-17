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
      .map(function(item, indice){
        // subtrai quando o indice for 1
        return item - indice % 2; // 1 % 2 = 1
      })
      );
    console.log(data);
    
  }
}