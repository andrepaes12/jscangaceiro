var campos = [
  // get by #Id
  document.querySelector('#data'), //campos[0]
  document.querySelector('#quantidade'), //campos[1]
  document.querySelector('#valor') //campos[2]
];

console.log(campos);

// tbody recebe tr
var tbody = document.querySelector('table tbody');

// classe .form quando submit é executado
document.querySelector('.form').addEventListener('submit', function(event){
  // alert('oi');

  //sem submeter o form p/ não recarregar e apagar os dados
  event.preventDefault();

  // criar a linha dentro da tabela (tr -> tbody in the table)
  var tr = document.createElement('tr');

  // iterar os dados (campo de campos)
  campos.forEach(function(campo){
    // criar td sem info
    var td = document.createElement('td');
    //atribuir o valor do campo a td
    td.textContent = campo.value;
    // adicionar a td na tr
    tr.appendChild(td);
  });

  //nova td para armazenar o volume
  var tdVolume = document.createElement('td');
  //valor do volume = campo[1] quantidade X campo[2] valor
  tdVolume.textContent = campos[1].value * campos[2].value;
  //add a nova td à tr
  tr.appendChild(tdVolume);

  //add a tr ao tbody
  tbody.appendChild(tr);

  //limpar o campo data
  campos[0].value = '';
  //limpar o campo qtde
  campos[1].value = 1;
  //limpar o campo valor
  campos[2].value = 0;
  //set focus no campo da data
  campos[0].focus();

});