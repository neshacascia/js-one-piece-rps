document.querySelector('#luffy').addEventListener('click', luffyBattle);
document.querySelector('#zoro').addEventListener('click', zoroBattle);
document.querySelector('#ace').addEventListener('click', aceBattle);
document.querySelector('#shanks').addEventListener('click', shanksBattle);

const luffy = document.querySelector('.luffy-battle');
const zoro = document.querySelector('.zoro-battle');
const ace = document.querySelector('.ace-battle');
const shanks = document.querySelector('.shanks-battle');

function luffyBattle() {
    luffy.classList.toggle('hidden');
    zoro.classList.add('hidden');
    ace.classList.add('hidden');
    shanks.classList.add('hidden');
}

function zoroBattle() {
    zoro.classList.toggle('hidden');
    luffy.classList.add('hidden');
    ace.classList.add('hidden');
    shanks.classList.add('hidden');
}

function aceBattle() {
    ace.classList.toggle('hidden');
    luffy.classList.add('hidden');
    zoro.classList.add('hidden');
    shanks.classList.add('hidden');
}

function shanksBattle() {
    shanks.classList.toggle('hidden');
    luffy.classList.add('hidden');
    zoro.classList.add('hidden');
    ace.classList.add('hidden');
}

// Background Selector
document.querySelector('#bg-1').addEventListener('click', loadBG1);

const cave = document.querySelector('#bg-1');

function loadBG1() {
    document.querySelector('.game-screen').style.backgroundImage = cave;
}