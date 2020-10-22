var divisao= document.createElement("div");
var titulo = document.createElement("h1");
titulo.textContent = "Salve";
var texto = titulo.textContent;
divisao.appendChild(titulo);
document.body.appendChild(divisao);

divisao.addEventListener("mouseover", function(){
  titulo.textContent = "(" + this.textContent + ")";
});
console.log(titulo.textContent);

divisao.addEventListener ("mouseout", function () {
  console.log(titulo.textContent);
  titulo.textContent = texto;
});
console.log(titulo.textContent);
/* divisao.addEventListener ("click", function () {
  titulo.textContent = "!"+"Salve"+"!";

}); */

divisao.addEventListener("mousedown", function (){
  titulo.textContent = "!"+ texto+"!"
});
console.log(titulo.textContent);

divisao.addEventListener ("mouseup" ,function (){
  titulo.textContent = "("+texto+")";
});
//console.log(titulo.textContent);
//console.log("oi");