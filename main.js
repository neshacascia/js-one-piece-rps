// Characters
const characterData = {
    luffy: {
        name: 'luffy',
        avatar: 'assets/characters/luffy.png',
        battle: 'assets/battle/luffy-battle.gif',
        health: 100,
        diceCount: 2
    },
    zoro: {
        name: 'zoro',
        avatar: 'assets/characters/zoro.png',
        battle: 'assets/battle/zoro-battle.gif',
        health: 100,
        diceCount: 2
    },
    ace: {
        name: 'ace',
        avatar: 'assets/characters/ace.png',
        battle: 'assets/battle/ace-battle.gif',
        health: 100,
        diceCount: 2
    },
    shanks: {
        name: 'shanks',
        avatar: 'assets/characters/shanks.png',
        battle: 'assets/battle/shanks-battle.gif',
        health: 100,
        diceCount: 2
    },
    bigMom: {
        name: 'bigMom',
        avatar: 'assets/characters/big-mom.png',
        battle: 'assets/battle/big-mom-battle.gif',
        health: 100,
        diceCount: 1
    },
    kaido: {
        name: 'kaido',
        avatar: 'assets/characters/kaido.png',
        battle: 'assets/characters/kaido.png',
        health: 100,
        diceCount: 1
    }
}

function Character(data) {
    Object.assign(this, data)

    this.getCharacterHtml = function() {
        const { name, avatar } = this;

        return `
        <div class='character-box'>
            <img id='${name}' class='${name}' src='${avatar}' alt='${name}'>
        </div>`
    }
}
const luffyChar = new Character(characterData.luffy)
const zoroChar = new Character(characterData.zoro)
const aceChar = new Character(characterData.ace)
const shanksChar = new Character(characterData.shanks)
const bigMomChar = new Character(characterData.bigMom)
const kaidoChar = new Character(characterData.kaido)

function render() {
    document.querySelector('.character-selector').innerHTML += luffyChar.getCharacterHtml() 
    document.querySelector('.character-selector').innerHTML += zoroChar.getCharacterHtml() 
    document.querySelector('.character-selector').innerHTML += aceChar.getCharacterHtml() 
    document.querySelector('.character-selector').innerHTML += shanksChar.getCharacterHtml() 

    document.querySelector('.opponent-selector').innerHTML += bigMomChar.getCharacterHtml()
    document.querySelector('.opponent-selector').innerHTML += kaidoChar.getCharacterHtml()
}

render()

// old
// document.querySelector('#luffy').addEventListener('click', luffyBattle);
// document.querySelector('#zoro').addEventListener('click', zoroBattle);
// document.querySelector('#ace').addEventListener('click', aceBattle);
// document.querySelector('#shanks').addEventListener('click', shanksBattle);
// document.querySelector('#big-mom').addEventListener('click', bigMomBattle);
// document.querySelector('#kaido').addEventListener('click', kaidoBattle);

// const luffy = document.querySelector('.luffy-battle');
// const zoro = document.querySelector('.zoro-battle');
// const ace = document.querySelector('.ace-battle');
// const shanks = document.querySelector('.shanks-battle');
// const bigMom = document.querySelector('.big-mom-battle');
// const kaido = document.querySelector('.kaido-battle');

// function luffyBattle() {
//     luffy.classList.toggle('hidden');
//     zoro.classList.add('hidden');
//     ace.classList.add('hidden');
//     shanks.classList.add('hidden');
// }

// function zoroBattle() {
//     zoro.classList.toggle('hidden');
//     luffy.classList.add('hidden');
//     ace.classList.add('hidden');
//     shanks.classList.add('hidden');
// }

// function aceBattle() {
//     ace.classList.toggle('hidden');
//     luffy.classList.add('hidden');
//     zoro.classList.add('hidden');
//     shanks.classList.add('hidden');
// }

// function shanksBattle() {
//     shanks.classList.toggle('hidden');
//     luffy.classList.add('hidden');
//     zoro.classList.add('hidden');
//     ace.classList.add('hidden');
// }

// function bigMomBattle() {
//     bigMom.classList.toggle('hidden');
//     kaido.classList.add('hidden');
// }

// function kaidoBattle() {
//     kaido.classList.toggle('hidden');
//     bigMom.classList.add('hidden');
// }
