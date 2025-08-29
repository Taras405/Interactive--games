const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),

  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onModalOpen);
refs.closeModalBtn.addEventListener("click", onModalClose);
refs.backdrop.addEventListener("click", onBackdropClick);

function onModalOpen(){
  window.addEventListener('keydown', onEscPress )
  document.body.classList.add('show-modal')
}

function onModalClose(){
  window.removeEventListener('keydown', onEscPress)
  document.body.classList.remove('show-modal')
}
function onBackdropClick(event){
// console.log("event.currentTarget: ", event.currentTarget);
// console.log("event.target: ", event.eventTarget);

if(event.currentTarget === event.target){
onModalClose()
 }
}

function onEscPress(event){
  const isEscKey = event.code ==="Escape"
  console.log(event.code);
  if(isEscKey){
    onModalClose()
  }
} 
