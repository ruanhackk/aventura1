const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar')

avanca.forEach(button=>{
button.addEventListener('click',function( ){
const atual= document. querySelector('.ativo');
const proximoPasso = 'passo-'+this.getAttribute('data-proximo');

atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if (proximoElemento){
proximoElemento.classList.add('ativo');
} else {
console.error(`Elemento com ID "${proximoPasso}"não encontrado.`)
}


});
});

//reniciar o jogo ao clicar no botão de renicio
if (reiniciarBtn) {
      reinicioBtn.addEventListener('click',()=>{
      atual.classList.remover('ativo');
      documento.getElementById('passo-0').classList.add('ativo')

      });



}