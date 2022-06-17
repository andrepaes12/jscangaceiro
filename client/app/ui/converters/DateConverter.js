class DateConverter {
  constructor(){
    // aviso que a classe não deve ser instanciada
    throw new Error('Esta classe não pode ser instanciada');
  }

  static paraTexto(data){
    // uso do template literal
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static paraData(texto){
    // fail-fast
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)){ // o uso dos {} é opcional p/ 1 condição
      // requer identação quando não usar os {}
      throw new Error('Deve estar no formato aaaa-mm-dd');
    }
    return new Date(...texto.split('-')
    .map((item, indice) => item - indice % 2));
  }
}