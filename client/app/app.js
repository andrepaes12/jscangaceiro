// criar a instância do controller
let controller = new NegociacaoController();

// associar o evento de submissão do form à chamada do método "adiciona"
document
  .querySelector('.form')
  .addEventListener('submit', function(event){
    controller.adiciona(event);
  });