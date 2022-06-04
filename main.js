document.querySelector('#luffy').addEventListener('click', luffyBattle);
document.querySelector('#zoro').addEventListener('click', zoroBattle);
document.querySelector('#ace').addEventListener('click', aceBattle);
document.querySelector('#shanks').addEventListener('click', shanksBattle);
document.querySelector('#big-mom').addEventListener('click', bigMomBattle);
document.querySelector('#kaido').addEventListener('click', kaidoBattle);

const luffy = document.querySelector('.luffy-battle');
const zoro = document.querySelector('.zoro-battle');
const ace = document.querySelector('.ace-battle');
const shanks = document.querySelector('.shanks-battle');
const bigMom = document.querySelector('.big-mom-battle');
const kaido = document.querySelector('.kaido-battle');

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

function bigMomBattle() {
    bigMom.classList.toggle('hidden');
    kaido.classList.add('hidden');
}

function kaidoBattle() {
    kaido.classList.toggle('hidden');
    bigMom.classList.add('hidden');
}
