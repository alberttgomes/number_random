


//Função para gerar os números

let texto = "";
let recebe;

function gerar(){
    
    recebe = document.getElementById("retorno");

    let quantidade = parseInt(document.getElementById("qtd").value);
    let coluna = parseInt(document.getElementById("coluna").value);
    let min = parseInt(document.getElementById("min").value);    
    let max = parseInt(document.getElementById("max").value);    
    

    console.log(quantidade,coluna, min, max);
    
    for (let i = 1; i <= quantidade; i++){
    texto = texto + Math.floor(Math.random() * (max - min) + min) + " \t";

      if (i % coluna == 0){
         texto += "\n";
      }
  }
    recebe.innerHTML = texto;
} 

//Função para deletar

function reset(){
    
    recebe = document.getElementById("retorno");
    let deletar = "";
    if(onclick){
        deletar += " Thanks "
    }
      recebe.innerHTML = deletar;
    
}