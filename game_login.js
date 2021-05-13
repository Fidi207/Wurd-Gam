function login(){
    player1_name = document.getElementById("player1Name").value;
    player2_name = document.getElementById("player2Name").value;

    localStorage.setItem("Player1_Name", player1_name);
    localStorage.setItem("Player2_Name", player2_name);
    
    window.location = "gamePage.html";
}