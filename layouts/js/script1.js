'use strict';
 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnsOpenModal = document.querySelectorAll('.show-modal');

 console.log(btnsOpenModal);

 const openModal = function(){
    console.log('Button clicked');
    //! remove hidden from modal

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    };
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    };

//!we go on  to make for loop to each element to display the text so when we choose the btn 1 to display text 1 and so on  

for ( let i = 0 ; i < btnsOpenModal.length ; i++)
   //?1) //  console.log(btnsOpenModal[i].textContent);
   //?2)
btnsOpenModal[i].addEventListener('click',openModal);


btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
console.log(e.key);
//console.log('Esc was pressed ');
if(e.key === 'Escape' && !modal.classList.contains('hidden')) {

    closeModal()
}
})