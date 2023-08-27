const inputs = document.querySelector(".word"),
   hintTag = document.querySelector(".hint span")
   guessLeft = document.querySelector(".guess span"),
   mistakes = document.querySelector(".wrong span")
   resetBtn = document.querySelector(".reset-btn")
   hintBtn = document.querySelector(".hint-btn")
   hintElement = document.querySelector(".hint")
   typeInput = document.querySelector(".type-input");

//game vars

let word = [];
let incorrectletters = [];
let correctletters = [];
let maxGuesses;

function startNewGame(){
    alert("New game Started!Guess New Word:");
    hintElement.style.display = "none";
    hintElement.style.opacity = "0";

    const ranWord = wordList[Math.floor(Math.random()*wordList.length)];
    word = ranWord;
    maxGuesses = word.length >=5 ?8 :6;
    incorrectletters = [];
    correctletters = [];
    hintTag.innerHTML = ranWord.hint;
    guessLeft.innerText = maxGuesses;
    mistakes.innerText = incorrectletters;

    inputs.innerHTML = "";
    for(let i =0; i < word.length;i++){
        const input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        inputs.appendChild(input);


    }
    

}

function handleInput(e){
    const key = e.target.value.toLowerCase();
    if (key.match(/^[a-z]+$/i) && !incorrectletters.includes(' & {key} ') && !correctletters.includes(' {key}' )){
        if(word.includes(key)){
            for(let i =0;i < word.length; i++){
                if (word[i] == key){
                    inputs.querySelectorAll(".input")[i].value += key;

                }
            }
            correctletters +=key;
        else{
            incorrectletters.push
        }
        }
    }
}