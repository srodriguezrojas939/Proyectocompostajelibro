$(document).ready(function() {

	var trivia = [
		question01=	{
			question: "Hasta aquí hemos leído sobre:",
			answers: ["A: La guerra en Ucrania", "B: El compostaje", "C: El viaje a Marte", "D: Pitágoras"],
			correctAnswer: 1
		},
		question02= {
			question: "La palabra compostaje viene de la raíz latina:",
			answers: ["A: Composta", "B: Compost", "C: Compostino", "D: Compostura"],
			correctAnswer: 0
		},
		question03= {
			question: "¿Qué se degrada en el proceso de compostaje?",
			answers: ["A: El Nitrógeno", "B: El suelo", "C: La materia orgánica", "D: El Oxígeno"],
			correctAnswer: 2
		},
		question04= {
			question: "No es una ventaja del compostaje:",
			answers: ["A: Usa desperdicios", "B: Preserva el entorno", "C: Disminuye el uso de fertilizantes", "D: Evita accidentes"],
			correctAnswer: 3
		},
		question05= {
			question: "La estructura del suelo debe asegurar:",
			answers: ["A: Suficiente aire", "B: Bastante agua", "C: Mucho Nitrógeno", "D: Poco drenaje"],
			correctAnswer: 0
		},
		question06= {
			question: "Es indispensable para obtener un suelo de alta productividad ....",
			answers: ["A: Temperatura", "B: Humedad", "C: Abono orgánico", "D: Aireación"],
			correctAnswer: 2
		},
		question07=	{
			question: "No es una fuente de materia orgánica",
			answers: ["A: Estiércol", "B: Malezas", "C: Vidrio", "D: Hoja"],
			correctAnswer: 2
		},
		question08= {
			question: "En la humificación no se presentan procesos",
			answers: ["A: Físicos", "B: Químicos", "C: Biológicos", "D: Anatómicos"],
			correctAnswer: 3
		},
		question09= {
			question: "El humus es...",
			answers: ["A: El estado más avanzado de la descomposición", "B: El estado de calentamiento", "C: El estado de oxigenación", "D: El estado mesófilo"],
			correctAnswer: 0
		},
		question10= {
			question: "¿Cómo se llama la transformación del humus en compuestos solubles?",
			answers: ["A: Desalinación", "B: Mineralización", "C: Oxigenación", "D: Putrefacción"],
			correctAnswer: 1
		},
		question11= {
			question: "En un contenedor de color rojo, debo depositar:",
			answers: ["A: Papel", "B: Plástico", "C: Cáscaras de banano", "D: Jeringas usadas"],
			correctAnswer: 3
		},
		question12= {
			question: "No es una propiedad física del compostaje:",
			answers: ["A: Porosidad", "B: Conmutativa", "C: Agregación", "D: Retención de humedad"],
			correctAnswer: 1
		},
		question13= {
			question: "Son parámetros en el proceso de compostaje",
			answers: ["A: Temperatura y humedad", "B: PH y relación Carbono y Oxígeno", "C: Humedad y cambio de color", "D: Temperatura y fibrilación"],
			correctAnswer: 0
		},
		question14= {
			question: "Es una buena temperatura para la fase de maduración del compost: ",
			answers: ["A: 70 °C", "B: 30 °C", "C: 2 °C", "D: 110 °C"],
			correctAnswer: 1
		},
		question15= {
			question: "El uso de compostajes de sistemas cerrados, facilita:",
			answers: ["A: El ingreso de aves", "B: La rápida maduración", "C: La extracción del lixiviado", "D: La  alta producción"],
			correctAnswer: 2
		},
		question16= {
			question: "Si el calor del compost es intolerable es porque está en la fase:",
			answers: ["A: Mesófila", "B: Niséfila", "C: de Maduracióny", "D: Termófila"],
			correctAnswer: 3
		},
		question17= {
			question: "Una humedad óptima para una máxima eficiencia en el proceso de degradación es:",
			answers: ["A: 30%", "B: 50%", "C: 90%", "D: 0%"],
			correctAnswer: 1
		},
		question18= {
			question: "Un sensor para controlar el parámetro de humedad es el:",
			answers: ["A: Barómetro", "B: Multímetro", "C: Colorímetro", "D: Higrómetro"],
			correctAnswer: 3
		},
		question19= {
			question: "La relación con mejores resultados en el proceso de degradación es de",
			answers: ["A: 30 Carbonos por cada Nitrógeno", "B: 4 Carbonos por cada Nitrógeno", "C: 10 Carbonos por cada Nitrógeno", "D: 5 Carbonos por cada Nitrógeno"],
			correctAnswer: 0
		},
		question20= {
			question: "No es importante como norma de seguridad, cuando trabajas en compostaje:",
			answers: ["A: Un botiquín de primeros auxilios", "B: Mantenerse hidratado", "C: Usar guantes y mascarilla", "D: Usar gafas oscuras y gorra deportiva"],
			correctAnswer: 3
		}
		//question21= {
			//question: "Factores claves para realizar un proceso de compostaje son",
			//answers: ["A: Espacio", "B: 8", "C: 38", "D: 58"],
			//correctAnswer: 0
		
		// question22= {
		// 	question: "What is the fear of houses?",
		// 	answers: ["A: Rhabdophobia", "B: Neophobia", "C: Oikophobia", "D: Jedeophobia"],
		// 	correctAnswer: 2
		// },
		// question23= {
		// 	question: "When glass breaks, the cracks move up to how many mph?",
		// 	answers: ["A: 5,000", "B: 1,000", "C: 3,000", "D: 10,000"],
		// 	correctAnswer: 2
		// },
		// question24= {
		// 	question: "When glass breaks, the cracks move up to how many mph?",
		// 	answers: ["A: 5,000", "B: 1,000", "C: 3,000", "D: 10,000"],
		// 	correctAnswer: 2
		// },
		// question25= {
		// 	question: "The NY phone book had 22 Hitlers before WWII. How many did it have in 2000?",
		// 	answers: ["A: 4", "B: 13", "C: 11", "D: 0"],
		// 	correctAnswer: 3
		// },
		// question26= {
		// 	question: "What percentage of Japanese citizens are cremated?",
		// 	answers: ["A: 98", "B: 75", "C: 26", "D: 11"],
		// 	correctAnswer: 0
		// },
		// question27= {
		// 	question: "In what key do most American car-horns honk?",
		// 	answers: ["A: C", "B: F", "C: E", "D: G"],
		// 	correctAnswer: 1
		// },
		// question28= {
		// 	question: "What is the fear of houses?",
		// 	answers: ["A: Rhabdophobia", "B: Neophobia", "C: Oikophobia", "D: Jedeophobia"],
		// 	correctAnswer: 2
		// },
		// question29= {
		// 	question: "In what key do most American car-horns honk?",
		// 	answers: ["A: C", "B: F", "C: E", "D: G"],
		// 	correctAnswer: 1
		// },
		// question30= {
		// 	question: "What is the fear of houses?",
		// 	answers: ["A: Rhabdophobia", "B: Neophobia", "C: Oikophobia", "D: Jedeophobia"],
		// 	correctAnswer: 2
		}];
	var audienceAnswers = ['A: 64%  B:  17%  C: 9%  D: 10%', 'A: 24%  B:  26%  C: 27%  D: 23%', 'A: 14%  B:  2%  C: 49%  D: 12%', 'A: 17%  B: 16%  C: 34%  D: 43%']
	var phoneAnswers = ['Sup dude. Uh, the answer is A. I mean ', "Hello Dear, I don't understand the question. But I think it's ", "How long do I have to tell you an answer? It's... ", 'I know this one. It is ',  "I'm just guessing, but I think it's "]
	var questionValue = [100, 1000, 5000, 10000, 32000, 64000, 125000, 250000, 500000, 1000000]
	var lettersKey = ['A','B','C','D'];
	var timer = 20;
	var gameStart = false;
	var difficulty = 1;
	var nextQuestion = true;
	var questionNumber = 0;
	var currentAnswer;
	var money = 0;
	var clockIsRunning = false;
	var buttonAIsOn = false;
	var buttonBIsOn = false;
	var buttonCIsOn = false;
	var buttonDIsOn = false;
	var mainTheme = new Audio ("assets/audio/main_theme.mp3");
	var selectButton = new Audio ("assets/audio/select_button.mp3");
	var wrongButton = new Audio ("assets/audio/wrong_button.mp3");
	var wonMillion = new Audio ("assets/audio/won_million.mp3");
	var musicOne = new Audio ("assets/audio/music_01.mp3");
	var musicTwo= new Audio ("assets/audio/music_02.mp3");
	var musicThree = new Audio ("assets/audio/music_03.mp3");
	var phoneRing = new Audio ("assets/audio/phone_ring.mp3");
	var letsPlay = new Audio ("assets/audio/lets_play.mp3");
	var fiftyFiftyOn = false;
	var phoneFriend = false;
	var audienceHelp = false;
	

	mainTheme.play();


	function startTrivia(){
		if  (gameStart === false){
			mainTheme.pause();
			musicOne.currentTime = 0;
			musicTwo.currentTime = 0;
			musicThree.currentTime = 0;
			buttonIsOn();
			fiftyFiftyOn = true;
			phoneFriend = true;
			audienceHelp = true;
			gameStart = true;
			questionNumber = 0;
			shuffle(trivia);
			$('.money-bar').removeClass('current-money');
			$('#money01').addClass('current-money');
			reset();
			lifelineSwitch();
			run();
			startClock();
		generateQuestion();
			console.log("game start is " + gameStart);
			console.log("question number is " + questionNumber);
		}else{
			console.log('start button didnt work')
		}
	}

	$('#start-button').on("click", function(){
		startTrivia();
	});
	
	function run() {
	      intervalId = setInterval(startClock, 1000);
 	}

 	//starts the timer
	function startClock(){
		timer--;
		if (timer > 9){
			$('#game-timer').html(":" + timer);
		}
			else {
				$('#game-timer').html(":0" + timer);
			}
		// console.log(timer);
		clockIsRunning = true;
		if (timer===0){	
			stop();
			gameLose();

		}
	}


	function stop(){
		clearInterval(intervalId);
		clockIsRunning = false;
	}

	 function reset() {
	    timer = 31;
	    $("#display").text(":00");
	  }

	function changeMusic() {
		if (gameStart === true){
			if(questionNumber <5){
				musicOne.play();
			}else if (questionNumber >=5 && questionNumber <8){
				musicTwo.play();
				musicOne.pause();
			}else if (questionNumber > 7){
				musicThree.play();
				musicTwo.pause();
			}
		}else {
			musicOne.pause();		
			musicTwo.pause();
			musicThree.pause();
		}
	};

	function calculateMoney(){
		money = questionValue[questionNumber] ;
		console.log("total money is " + money);
		if (questionNumber === 1){
			$('#money01').removeClass('current-money');
			$('#money02').addClass('current-money');
		}
		else if (questionNumber === 2){
			$('#money02').removeClass('current-money');
			$('#money03').addClass('current-money');
		}
		else if (questionNumber === 3){
			$('#money03').removeClass('current-money');
			$('#money04').addClass('current-money');
		}
		else if (questionNumber === 4){
			$('#money04').removeClass('current-money');
			$('#money05').addClass('current-money');
		}
		else if (questionNumber === 5){
			$('#money05').removeClass('current-money');
			$('#money06').addClass('current-money');
		}
		else if (questionNumber === 6){
			$('#money06').removeClass('current-money');
			$('#money07').addClass('current-money');
		}
		else if (questionNumber === 7){
			$('#money07').removeClass('current-money');
			$('#money08').addClass('current-money');
		}
		else if (questionNumber === 8){
			$('#money08').removeClass('current-money');
			$('#money09').addClass('current-money');
		}
		else if (questionNumber === 9){
			$('#money09').removeClass('current-money');
			$('#money10').addClass('current-money');
			gameWin();
		}
		else {
		}
	}

	function gameLose(){
		//display you lose
		stop();
		musicOne.pause();		
		musicTwo.pause();
		musicThree.pause();
		letsPlay.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		gameStart = false;
		$('.message').text("Fin del juego");
		console.log("Perdiste");
	}

	function gameWin(){
		musicOne.pause();		
		musicTwo.pause();
		musicThree.pause();
		wonMillion.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		stop();
		gameStart = false;
		$('.message').text("¡Eres millonario!");
		console.log("Ganaste");
	}
	
	function buttonIsOn(){
		buttonAIsOn = true;
		buttonBIsOn = true;
		buttonCIsOn = true;
		buttonDIsOn = true;
		console.log('button a is ' + buttonAIsOn);
		console.log('button b is ' + buttonBIsOn);
		console.log('button c is ' + buttonCIsOn);
		console.log('button d is ' + buttonDIsOn);
		$('#answerA').removeClass('disabled');
		$('#answerB').removeClass('disabled');
		$('#answerC').removeClass('disabled');
		$('#answerD').removeClass('disabled');
	}

	function shuffle(array) {
		var currentIndex = trivia.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
		}
	// generateQuestion();
	function generateQuestion () {	
		if (gameStart === true){
			$('.message').empty();
			changeMusic();		
			$('#question').text(trivia[questionNumber].question);
			$('#answerA').text(trivia[questionNumber].answers[0]);
			$('#answerB').text(trivia[questionNumber].answers[1]);
			$('#answerC').text(trivia[questionNumber].answers[2]);
			$('#answerD').text(trivia[questionNumber].answers[3]);
			currentAnswer = trivia[questionNumber].correctAnswer;
			console.log("current answer is " + currentAnswer);
		}else {
			console.log("game is over");
		}
	}


	$("#answerA").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 0 && buttonAIsOn === true){
			selectButton.play();
			buttonIsOn();
			questionNumber++;
			console.log('q # is ' + questionNumber);
			reset();
			calculateMoney();
			generateQuestion();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerA");
				console.log("gameStart is " + gameStart);
				console.log("current answer is " + currentAnswer);
				console.log("button a is on is " + buttonAIsOn);
			}
	});

	$("#answerB").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 1 && buttonBIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			reset();
			calculateMoney();
			generateQuestion();
		}else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerB");
		}		
	});

	$("#answerC").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 2 && buttonCIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerC");
			}
	});

	$("#answerD").on("click", function() {
		if (gameStart === false){
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 3 && buttonDIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerD");
			}
	});

	//These are the three lifeline buttons
	//5050, call a friend, and audience

	$("#5050").on("click", function() {
		if (fiftyFiftyOn === true){
			console.log('button 5050 was pressed');
			selectButton.play();
			fiftyFiftyOn = false;
			lifelineSwitch();
			//play sound
			//display 5050 screen
			if (currentAnswer === 0) {
				buttonDIsOn = false;
				$('#answerD').addClass('disabled');
				$('#answerB').addClass('disabled');
				buttonBIsOn = false;
				// disable button b and d
			}else if (currentAnswer === 1){
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				$('#answerC').addClass('disabled');
				buttonCIsOn = false;
				//disable button a and c
			}else if (currentAnswer === 2){
				//disable a and b
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
			}else{
				//disable b & c
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
				buttonCIsOn = false;
				$('#answerC').addClass('disabled');
			}
		}else{
			console.log("5050 button doesn't work");
		}	
	});

	function randomPhoneAnswerGenerator(){
		var randomphoneAnswer = phoneAnswers[Math.floor(Math.random() * phoneAnswers.length)];
		$('.message').text(randomphoneAnswer + lettersKey[currentAnswer]);
		}
	
	function phoneAFriend(){
		phoneRing.play();
		setTimeout(randomPhoneAnswerGenerator, 2000);
	}

	function audienceForHelp(){
		// var randomAudienceAnswer = audienceAnswers[Math.floor(Math.random() * audienceAnswers.length)];
		$('.message').text(audienceAnswers[currentAnswer]);

	}

	$("#friend").on("click", function() {
		if (phoneFriend === true){
			console.log('button friend was pressed');
			reset();
			phoneFriend = false;
			lifelineSwitch();
			selectButton.play();
			phoneAFriend();
		}else{
			console.log("friend button doesn't work");
		}	
	});


	$("#audience").on("click", function() {
		if (audienceHelp === true){
			console.log('button audience was pressed');
			selectButton.play();
			audienceHelp = false;
			lifelineSwitch();
			audienceForHelp();
		}else{
			console.log("audience button doesn't work");
		}	

	});

	function lifelineSwitch(){
		if (fiftyFiftyOn === false){
			$('#5050').addClass('disabled');
		}else{
			$('#5050').removeClass('disabled');
		}
			if (phoneFriend === false){
			$('#friend').addClass('disabled');
		}else{
			$('#friend').removeClass('disabled');
		}
			if (audienceHelp === false){
			$('#audience').addClass('disabled');
		}else{
			$('#audience').removeClass('disabled');
		}
	}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




});