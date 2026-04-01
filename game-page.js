// VARIÁVEIS GLOBAIS - definidas primeiro
let player1Name = localStorage.getItem("player1Name");
let player2Name = localStorage.getItem("player2Name");
let player1Score = 0;
let player2Score = 0;
let word = "";
let questionTurn = "player1";
let answerTurn = "player2";

// Inicialização da interface
document.getElementById("player1-name").innerHTML = player1Name || "Jogador 1";
document.getElementById("player2-name").innerHTML = player2Name || "Jogador 2";
document.getElementById("player1-score").innerHTML = player1Score;
document.getElementById("player2-score").innerHTML = player2Score;
document.getElementById("player-question").innerHTML = `Turno de pergunta: ${player1Name || "Jogador 1"}`;
document.getElementById("player-answer").innerHTML = `Turno de resposta: ${player2Name || "Jogador 2"}`;

// Destacar jogador ativo inicial (agora funciona porque questionTurn já existe)
updateActivePlayer();

function send(){
    let getWord = document.getElementById("word").value;
    
    // Validação: palavra deve ter 5 ou mais letras
    if(getWord.length < 5){
        alert("Por favor, use uma palavra com 5 ou mais letras!");
        return;
    }
    
    word = getWord.toLowerCase();
    
    // Converter para array e substituir posições específicas
    let wordArray = word.split('');
    let lengthDivide2 = Math.floor(word.length / 2);
    
    // Substituir apenas as posições 1, meio e última
    wordArray[1] = "_";
    wordArray[lengthDivide2] = "_";
    wordArray[word.length - 1] = "_";
    
    let removeCharAt3 = wordArray.join('');

    let questionWord = `<h4 id="word-display">${removeCharAt3}</h4>`;
    let inputBox = `<input type="text" id="input-check-box" placeholder="Digite sua resposta...">`;
    let checkButton = `<br><br><button class="btn btn-info" onclick="check()">Verificar</button>`;
    let row = `${questionWord} ${inputBox} ${checkButton}`;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check(){
    let getAnswer = document.getElementById("input-check-box").value;
    let answer = getAnswer.toLowerCase().trim();
    let output = document.getElementById("output");

    if(answer === word){
        // ACERTOU!
        if(answerTurn == "player1"){
            player1Score += 1;
            document.getElementById("player1-score").innerHTML = player1Score;
        }
        else{
            player2Score += 1;
            document.getElementById("player2-score").innerHTML = player2Score;
        }
        
        // Mostra mensagem de acerto
        output.innerHTML = `<div style="color: #28a745; font-size: 1.8em; font-weight: bold; padding: 20px;">
            🎉 PARABÉNS! <br>Resposta correta!
        </div>`;
        
    } else {
        // ERROU!
        output.innerHTML = `<div style="color: #dc3545; font-size: 1.5em; font-weight: bold; padding: 20px;">
            ❌ Que pena! A palavra era: <br><span style="font-size: 1.3em; text-transform: uppercase;">${word}</span>
        </div>`;
    }

    // Alternar turnos após mostrar feedback
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("player-question").innerHTML = `Turno de pergunta: ${player2Name || "Jogador 2"}`;
        
        answerTurn = "player1";
        document.getElementById("player-answer").innerHTML = `Turno de resposta: ${player1Name || "Jogador 1"}`;
    }
    else{
        questionTurn = "player1";
        document.getElementById("player-question").innerHTML = `Turno de pergunta: ${player1Name || "Jogador 1"}`;

        answerTurn = "player2";
        document.getElementById("player-answer").innerHTML = `Turno de resposta: ${player2Name || "Jogador 2"}`;
    }

    updateActivePlayer();
    
    // Só limpa o output e continua o jogo após 2.5 segundos
    setTimeout(() => {
        document.getElementById("output").innerHTML = "";
    }, 2500);
}

// Função para destacar jogador ativo
function updateActivePlayer(){
    let p1Card = document.getElementById("player1-card");
    let p2Card = document.getElementById("player2-card");
    
    if(questionTurn == "player1"){
        p1Card.classList.add("active");
        p2Card.classList.remove("active");
    } else {
        p2Card.classList.add("active");
        p1Card.classList.remove("active");
    }
}