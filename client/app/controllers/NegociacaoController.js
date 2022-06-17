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
    // console.log(typeof(this._inputData.value));

    // let data = new Date(this._inputData.value);
    // array
    // let data = new Date(this._inputData.value.split('-'));
    // usando o replace
    // let data = new Date(this._inputData.value.replace(/-/g, ','));
    // spread operator (...): recebe cada elemento do array como um params
    let data = new Date(
      ...this._inputData.value
      .split('-')
      .map(function(item, indice){
        // se o índice for = 1 (2o elemento), subtrai 1
        // if(indice == 1){
          // array do mês: 0 a 11 (janeiro a dezembro)
          // return item - 1;
        // }
        // return item;

        // otimizando a função (subtrai quando o indice for 1)
        return item - indice % 2; // 1 % 2 = 1
      })
      );
    console.log(data);

    // let negociacao = new Negociacao(
    //   this._inputData.value,
    //   parseInt(this._inputQuantidade.value),
    //   parseFloat(this._inputValor.value)
    // );

    // console.log(negociacao);
  }
}