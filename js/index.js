const btnAdd = document.getElementById('btn-add')
const modal = document.getElementById('modal')
const btnCloseModal = document.getElementById('btn-close-modal')
const btnAddIcone = document.getElementById('btn-add-icone')

btnAdd.addEventListener('click',()=>{
  modal.style.display = 'flex'
})

btnCloseModal.addEventListener('click',()=>{
  modal.style.display = 'none'
})

btnAddIcone.addEventListener('click', ()=>{
  modal.style.display = 'flex'
})


