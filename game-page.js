let player1Name = localStorage.getItem("player1Name");
let player2Name = localStorage.getItem("player2Name");
let player1Score = 0;
let player2Score = 0;

//document.getElementById("player1Name").innerHTML = player1Name + ": ";
document.getElementById("player1Name").innerHTML = `${player1Name}: `;
document.getElementById("player2Name").innerHTML = `${player2Name}: `;
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = `Turno de pergunta: ${player1Name}`;
document.getElementById("playerAnswer").innerHTML = `Turno de resposta: ${player2Name}`;

function send(){
    let getWord = document.getElementById("word").value;
    let word = getWord.toLowerCase();
    
    let charAt1 = word.charAt(1);
    let lengthDivide2 = Math.floor(word.length/2);
    let charAt2 = word.charAt(lengthDivide2);
    let lengthMinus1 = word.length - 1;
    let charAt3 = word.charAt(lengthMinus1);
    
    let removeCharAt1 = word.replace(charAt1,"_");
    let removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    let removeCharAt3 = removeCharAt2.replace(charAt3, "_");

    //let questionWord = "<h4 id='word-display'> P. " + removeCharAt3 + "</h4>";
    let questionWord = `<h4 id="word-display"> Descubra a palavra: ${removeCharAt3} </h4>`;
    let inputBox = `<br> Resposta: <input type="text" id ="input-check-box">`;
    //let checkButton = <br> <br> <button class='btn btn-info' onclick='check()'> Verificar </button>";
    let checkButton = `<br> <br> <button class="btn btn-info" onclick="check()"> Verificar </button>`;
    //let row = questionWord + inputBox + checkButton;
    let row = `${questionWord} ${inputBox} ${checkButton}`;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

let questionTurn = "player1";
let answerTurn = "player2";

function check(){
    let getAnswer = document.getElementById("input-check-box").value;
    let answer = getAnswer.toLowerCase();

    if(answer == word){
        if(answerTurn == "player1"){
            player1Score += 1;
            document.getElementById("player1-score").innerHTML = player1Score;
        }
        else{
            player2Score += 1;
            document.getElementById("player2-score").innerHTML = player2Score;
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("player-question").innerHTML = `Turno de perguntas: ${player2Name}`;
        
        answerTurn = "player1";
        document.getElementById("player-answer").innerHTML = `Turno de respostas: ${player1Name}`;
    }
    else{
        questionTurn = "player1";
        document.getElementById("player-question").innerHTML = `Turno de perguntas: ${player1Name}`;

        answerTurn = "player2";
        document.getElementById("player-answer").innerHTML = `Turno de respostas: ${player2Name}`;
    }

    document.getElementById("output").innerHTML = "";
    
}