class NegociacaoController {
  adiciona(event){
    // cancelando a submissão do form
    event.preventDefault();

    // buscar os elementos
    // let inputData = document.querySelector('#data');
    // let inputQuantidade = document.querySelector('#quantidade');
    // let inputValor = document.querySelector('#valor');

    // atalho p/ document.querySelector
    // let $ = document.querySelector;  //não funciona
    // mantar o document em seu contexto
    let $ = document.querySelector.bind(document);

    let inputData = $('#data');
    let inputQuantidade = $('#quantidade');
    let inputValor = $('#valor');

    console.log(inputData.value);

    // console.log(inputQuantidade.value);
    // console.log(typeof(inputQuantidade.value));
    console.log(parseInt(inputQuantidade.value));
    
    // console.log(inputValor.value);
    // console.log(typeof(inputValor.value));
    console.log(parseFloat(inputValor.value));

    alert('chamei a ação no Controller');
  }
}