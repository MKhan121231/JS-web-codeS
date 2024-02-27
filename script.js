'use strict';

const player1 = Math.trunc(Math.random() * 6) + 1;
const player2 = Math.trunc(Math.random() * 6) + 1;

const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
const resultDisplay = document.querySelector('.container');

dice1.src = `dice${player1}.png`;
dice2.src = `dice${player2}.png`;
if (player1 > player2)
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if (player2 > player1)
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
else
    document.querySelector("h1").innerHTML = "Draw!";
