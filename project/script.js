let sentence;
let master;
let Sentence;
let random;
let sent;
let sentenceArray;
let word;
let count;
let randomColor;
let wordArr = [];
let wordssss = "";
let randomNo = [];
let randomArr = [];
let nameboard;
let title;
let senten;
let mas;
let play;
let level;
let levels;
let inter;
let begin;
let expert;
let a;
let heart;
let right;
let back;
let empty;
let quit;
let are;
let yes;
let no;
let option;
let corrected;
let restarts;
let star;
let hint;
let hintWord;
let firstWord;
let acheive=0;
let numb=0;
let wishes = ["🆂🆄🅿🅴🆁🅱", "🅰🆆🅴🆂🅾🅼🅴", "🅵🅰🅽🆃🅰🆂🆃🅸🅲", "🆃🅴🆁🆁🅸🅵🅸🅲", "🆆🅾🅽🅳🅴🆁🅵🆄🅻", "🅰🅼🅰🆉🅸🅽🅶"];
let start=addEventListener("load",nameBoard());




// opening page
function nameBoard() {
	document.getElementById("corrected").style.display = "none";
	document.getElementById("price").style.display = "none";
	document.getElementById("wholeContainer").style.display = "none";
	nameboard = document.getElementById("open");
	title = document.createElement("div");
	nameboard.appendChild(title).setAttribute("class", "title");
	senten = document.createElement("div");
	title.appendChild(senten).setAttribute("class", "senten");
	senten.innerText = "SENTENCE";
	mas = document.createElement("div");
	title.appendChild(mas).setAttribute("class", "mas");
	mas.innerText = "MASTER";
	play = document.createElement("button");
	nameboard.appendChild(play).setAttribute("class", "play");
	play.setAttribute("onclick", "openhide()");

}


//open page hide
function openhide() {
	document.getElementById("open").style.display = "none";
	document.getElementById("level").style.display = "flex";
	levelShow();
}



//level page show
function levelShow() {
	level = document.getElementById("level");
	levels = document.createElement("div");
	level.appendChild(levels).setAttribute("class", "levels");
	begin = document.createElement("button");
	levels.appendChild(begin).setAttribute("class", "begin");
	begin.innerText = "BEGINNER";
	begin.setAttribute("onclick", "createDivs(this)");
	inter = document.createElement("button");
	levels.appendChild(inter).setAttribute("class", "inter");
	inter.innerText = "INTERMEDIATE";
	inter.setAttribute("onclick", "createDivs(this)");
	expert = document.createElement("button");
	levels.appendChild(expert).setAttribute("class", "expert");
	expert.innerText = "EXPERT";
	expert.setAttribute("onclick", "createDivs(this)");
	empty = document.getElementById("empty");
	back = document.createElement("div");
	empty.appendChild(back).setAttribute("class", "back");
	back.setAttribute("onclick", "Quit()");
	hintWord=document.createElement("div");
	empty.appendChild(hintWord).setAttribute("class","hintWord");
	hint=document.createElement("div");
	empty.appendChild(hint).setAttribute("class","hint");
	hint.setAttribute("onclick","hintShow()");
	hintWord.style.display="none";
}

// --------------------------------------------------------------------------

// Level easy///////////////////////////////
function createDivs(k) {
	a = k;
	document.getElementById("level").style.display = "none";
	document.getElementById("wholeContainer").style.display = "flex";
	sentence = document.getElementById("wholeContainer");
	master = document.createElement("div");
	sentence.appendChild(master).setAttribute("class", "master");
	sentenceCreate();
}



//sentence created
function sentenceCreate() {
	//heart.style.display="none";
	//answer.style.border = "10px groove pink";
	if (a.innerText == "BEGINNER") {
		Sentence = ["I went to the store", "I am a student", "Please give me that", "It was for you", "We made it together", "I want to play", "Put the toys away", "Did you eat ?", "put your phone silent", "can I go there ?", "He is called Hitman", "God of cricket , Sachin", "She bought one of each", "Ready to the race", "He is my grandfather", "Her parents have a pool", "what day is today ?", "Don't quarrel with him", "Anthony does like programming"];
	} else if (a.innerText == "INTERMEDIATE") {
		Sentence = ["Why whisper what you can shout ?", "I love with all my heart", "Life is a box of chocolates", "I'm weird just deal with it", "I eat , sleep and speak music", "People will shout my name worldwide", "Money can buy anything except respect", "Have you spoken to him ?", "The cinima is next to the park", "Do you have anything to eat ?","Do you have to eat anything ?"];
	} else {
		Sentence = ["Will you get a headache if you think too hard ?", "We will go home at the end of the day", "I am too shy to speak to that many people", "If I do the dishes will you clean the bathroom ?", "There is no way I am going to do it", "I tried to get the pictures, but they're not ready"]
	}
	random = Math.floor(Math.random() * Sentence.length);
	randomArr.push(random);
	if (randomArr.includes(random)) {
		random = Math.floor(Math.random() * Sentence.length);
	}
	console.log(randomArr);
	console.log(random);
	sent = Sentence[random];
	console.log(sent);
	firstWord=sent.split(" ");
	console.log(firstWord[numb]);
	wordSeparate();

}

//word seperated
function wordSeparate() {
	sentenceArray = sent.split(" ").sort(() => Math.random() - 0.5);
	//console.log(sentenceArray[0]);
     
	count = 1;

	for (let i = 0; i < sent.length; i++) {
		if (sent[i] == " ") {
			count++;
		}
	}
	console.log(count);
	createWords();
}



//word created by div

function createWords() {
	for (let i = 0; i < count; i++) {
		randomColor = Math.floor(Math.random() * 16777215).toString(16);
		//console.log("kamesh");
		word = document.createElement("button");
		master.appendChild(word).setAttribute("id", "word");
		word.setAttribute("onclick", "myfunction(this)");
		if (randomColor.length == 5) {
			randomColor += "0"
		}
		word.style.border="5px groove black";
		word.innerText = sentenceArray[i];

	}

}


// invoke function
function myfunction(x) {
	x.style.display = "none";
	addWords(x);
}


//answer div add words.
function addWords(x) {
	answer.appendChild(x).style.display = "block";
	x.setAttribute("onclick", "deletewords(this)");
	//console.log(x.innerText);
	wordArr.push(x.innerText);
	``
	//console.log(wordArr);



	wordssss = wordArr.join(" ");
	//console.log(wordssss);
	 numb=document.getElementById("answer").childElementCount;
	//console.log(Sentence.includes(wordssss));
    if(numb==count){
	if (Sentence.includes(wordssss)) {
		//answer.style.border = "2px solid green";
		while (answer.hasChildNodes()) {
			answer.removeChild(answer.firstChild);
		}
		//answer.style.border = "10px groove green";
		wordArr = [];
		wordssss = "";
		rights();
		// correct();
	} 
else {
    alert("Try again");
	}
}
	randomNo.push(random);
	//console.log(...new Set(randomNo));
	console.log(numb);
}


function deletewords(x) {
	x.style.display = "none";
	wordArr = [];
	wordssss = "";
	master.appendChild(x).style.display = "block";
	x.setAttribute("onclick", "myfunction(this)");
}


function Quit() {
	document.getElementById("wholeContainer").style.display = "none";
	document.getElementById("price").style.display = "flex";
	quit = document.createElement("div");
	price.appendChild(quit).setAttribute("class", "quit");
	are = document.createElement("div");
	quit.appendChild(are).setAttribute("class", "are");
	are.innerText = "🅰🆁🅴 🆈🅾🆄 🆂🆄🆁🅴 🆈🅾🆄 🆆🅰🅽🆃 🆀🆄🅸🆃 🆃🅷🅸🆂 🅶🅰🅼🅴 ?"
	option = document.createElement("div");
	quit.appendChild(option).setAttribute("class", "option");
	yes = document.createElement("button");
	yes.innerText = "Yes";
	option.appendChild(yes).setAttribute("class", "yes");
	yes.setAttribute("onclick", "opens(this)");
	no = document.createElement("button");
	no.innerText = "No";
	option.appendChild(no).setAttribute("class", "no");
	no.setAttribute("onclick", "opens(this)");

}

function opens(m) {
	if (m.innerText == "Yes") {
		window.location.reload();
	} else if (m.innerText == "No") {
		document.getElementById("price").style.display = "none";
		document.getElementById("wholeContainer").style.display = "flex";
	}
	while (price.hasChildNodes()) {
		price.removeChild(price.firstChild);
	}
}

function rights() {
	hintWord.style.display="none";
	corrected = document.getElementById("corrected");
	corrected.style.display = "flex";
	document.getElementById("wholeContainer").style.display = "none";
	restarts = document.createElement("div");
	corrected.appendChild(restarts).setAttribute("class", "restarts");
	let ones = document.createElement("div");
	let twos = document.createElement("div");
	restarts.appendChild(ones).setAttribute("class", "ones");
	restarts.appendChild(twos).setAttribute("class", "twos");
	ones.innerText = wishes[Math.floor(Math.random() * wishes.length)];
	star = document.createElement("button");
	twos.appendChild(star).setAttribute("class", "star");
	star.setAttribute("onclick", "fun()");
	acheive++;
	console.log(acheive);
}

function fun() {
	while (corrected.hasChildNodes()) {
		corrected.removeChild(corrected.firstChild);
	}
	while (master.hasChildNodes()) {
		master.removeChild(master.firstChild);
	}
	while (answer.hasChildNodes()) {
		answer.removeChild(answer.firstChild);
	}
	corrected.style.display = "none";
	document.getElementById("wholeContainer").style.display = "flex";
	star.display = "none";
	sentenceCreate();
}

function hintShow(){
	hint.style.display="none";
	hintWord.style.display="flex";
	hintWord.innerText=firstWord[numb];
}