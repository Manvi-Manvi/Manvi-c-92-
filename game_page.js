player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
question_turn=player1_name;
answer_turn=player2_name;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
function send(){
    question=document.getElementById("word").value;
    lowerCase_question=question.toLowerCase();
    document.getElementById("word").value="";
    char1=lowerCase_question.charAt(1);
    mid=Math.floor(lowerCase_question.length/2);
    char2=lowerCase_question.charAt(mid);
    char3=lowerCase_question.charAt(lowerCase_question.length-1);
    remove1=lowerCase_question.replace(char1, "_");
    remove2=remove1.replace(char2, "_");
    final_question=remove2.replace(char3, "_");
    question_word="<h4 id='word_display'>Q. "+final_question+"</h4> <br>";
    input_box="Answer : <input type='text' id='input_check_box'> <br> <br>";
    check_button="<button onclick='check()' class='btn btn-info'>Check </button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
}

function check(){
    answer=document.getElementById("input_check_box").value;
    lowerCase_answer=answer.toLowerCase();
    if(lowerCase_question==lowerCase_answer){
        if(answer_turn==player1_name){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else if(answer_turn==player2_name){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn==player1_name){
        question_turn=player2_name;
        answer_turn=player1_name;
        document.getElementById("player_question").innerHTML="Question Turn - "+question_turn;
        document.getElementById("player_answer").innerHTML="Answer Turn - "+answer_turn;
    }
else if(question_turn==player2_name){
    question_turn=player1_name;
    answer_turn=player2_name;
    document.getElementById("player_question").innerHTML="Question Turn - "+question_turn;
    document.getElementById("player_answer").innerHTML="Answer Turn - "+answer_turn
}
   document.getElementById("output").innerHTML="";

}