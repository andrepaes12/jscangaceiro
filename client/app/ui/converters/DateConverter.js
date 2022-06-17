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
    return new Date(...texto.split('-')
    .map((item, indice) => item - indice % 2));
  }
}