
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	//var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "vunica") {
		correct++;
}
	if (question2 == "Johnny") {
		correct++;
}	
	if (question3 == "zivotinja") {
		correct++;
	}

 if (question4 == "Prijedor") {
		correct++;
}
 if (question5 == "rucni rad") {
		correct++;
}
if (question6 == "da") {
		correct++;
}
	
	//var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Fenomenalan Rezultat!", "Uvijek može bolje", "Nevjerovatno zar ne."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Broj tačnih odgovora iznosi " + correct + ".";
	//document.getElementById("picture").src = pictures[score];
	}
	

