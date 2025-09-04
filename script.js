const reiniciarBtn = document.getElementById('bth-reiniciar')


avanca.forEach(button =>{
button.addEventListener('click', function() {
const atual= document.querySelector('.ativo');
const proximoPasso= 'passo-'+this.getAttribute('data-proximo');


atual.classList.remover('ativo');
const proximoElemento= documnto.getElementByid(proximopasso)

if (proximoElemento){
    proximoElemento.classList.add('ativo')
}else}
 consol error(`Elemento com ID "${proximoPasso}"não encontrado.`)

 });
});
