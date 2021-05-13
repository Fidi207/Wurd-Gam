player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");
p1_score = 0;
p2_score = 0;
Qturn = "p1";
Aturn = "p2"; 

document.getElementById("player1Name").innerHTML = player1_name +  ":";
document.getElementById("player2Name").innerHTML = player2_name +  ":";

document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;

document.getElementById("player_question").innerHTML = player1_name + ", Enter The Question";
document.getElementById("player_answer").innerHTML = player2_name + ", Enter The Answer";

function send(){
    getWord = document.getElementById("word").value;
    getWord = getWord.toLowerCase();
    secondLetter = getWord.charAt(1);
    lengthOfWord= getWord.length;
    lastLetter = getWord.charAt(lengthOfWord - 1);
    x= Math.floor((lengthOfWord- 1) /2);
    middleLetter = getWord.charAt(x);
    remove_2nd = getWord.replace(secondLetter, "_");
    remove_middle = remove_2nd.replace(middleLetter, "_");
    Final_Word = remove_middle.replace(lastLetter, "_");

    questionTag= "<h4 id='word_final'>Q. " + Final_Word + "</h4> <br>";
    inputTag= "Answer. <input id='answer' type='text'> <br> <br>";
    buttonTag= "<button class= 'btn btn-danger' onclick='check()'>Check Answer</button>";

    row= questionTag+ inputTag+ buttonTag;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value = "";
}

function check() {
    console.log("checked");
    userAnswer= document.getElementById("answer").value;
    userAnswer= userAnswer.toLowerCase();
    if (userAnswer == getWord) {
        if (Aturn == "p1") {
            p1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML= p1_score;
        }
        else if(Aturn == "p2") {
            p2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML= p2_score;
        }
    }

    if (Qturn == "p1") {
        Qturn = "p2";
        Aturn = "p1";
        document.getElementById("player_question").innerHTML = player2_name + ", Enter The Question";
        document.getElementById("player_answer").innerHTML = player1_name + ", Enter The Answer";
    }
    else if(Qturn == "p2") {
        Qturn= "p1";
        Aturn= "p2";
        document.getElementById("player_question").innerHTML = player1_name + ", Enter The Question";
        document.getElementById("player_answer").innerHTML = player2_name + ", Enter The Answer";
    }
    document.getElementById("output").innerHTML= "";
}
