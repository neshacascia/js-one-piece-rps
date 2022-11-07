//NEW VERSION:
const characters = document.querySelectorAll('.character-box');
const charactersBattle = document.querySelectorAll('.player-battle');

characters.forEach((character) => {
  character.addEventListener('click', switchFighters);
});

function switchFighters(e) {
  const characterPortrait = e.target;
  console.log(characterPortrait);
}

// //OLD VERSION
// document.querySelector('#luffy').addEventListener('click', luffyBattle);
// document.querySelector('#zoro').addEventListener('click', zoroBattle);
// document.querySelector('#ace').addEventListener('click', aceBattle);
// document.querySelector('#shanks').addEventListener('click', shanksBattle);

// const luffy = document.querySelector('.luffy-battle');
// const zoro = document.querySelector('.zoro-battle');
// const ace = document.querySelector('.ace-battle');
// const shanks = document.querySelector('.shanks-battle');

// function luffyBattle() {
//   luffy.classList.toggle('hidden');
//   zoro.classList.add('hidden');
//   ace.classList.add('hidden');
//   shanks.classList.add('hidden');
// }

// function zoroBattle() {
//   zoro.classList.toggle('hidden');
//   luffy.classList.add('hidden');
//   ace.classList.add('hidden');
//   shanks.classList.add('hidden');
// }

// function aceBattle() {
//   ace.classList.toggle('hidden');
//   luffy.classList.add('hidden');
//   zoro.classList.add('hidden');
//   shanks.classList.add('hidden');
// }

// function shanksBattle() {
//   shanks.classList.toggle('hidden');
//   luffy.classList.add('hidden');
//   zoro.classList.add('hidden');
//   ace.classList.add('hidden');
// }
