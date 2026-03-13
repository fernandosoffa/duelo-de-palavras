function addUser(){
    player1Name = document.getElementById("player1-name-input").value;
    player2Name = document.getElementById("player2-name-input").value;
    localStorage.setItem("player1Name",player1Name);
    localStorage.setItem("player2Name",player2Name);
    window.location = "game-page.html"
}

