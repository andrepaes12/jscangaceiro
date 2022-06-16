// criar a instância do controller
let controller = new NegociacaoController();

// associar o evento de submissão do form à chamada do método "adiciona"
document
  .querySelector('.form')
  // com o bind no Controller, ocorre erro
  // .addEventListener('submit', function(event){
  //   controller.adiciona(event);
  // });
  // necessário passar o bind aqui tbm
  .addEventListener('submit', controller.adiciona.bind(controller));