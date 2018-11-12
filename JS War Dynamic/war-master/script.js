var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var cards = [];
var players = [[],[]];
var firstRun = true;
//this is to check if this is the first time we are running so that the game can start
//so we can complete the building o f the deck
//it will only be reset once game is reset
var gameover = false;  //stop game if over


//to add functionality of doing many rounds automatically:
var timer;
var r = 0;  //need this here to have it a global variable

//DOM ELEMENTS from the HTML
var fightButton = document.querySelector("#btnBattle");
var fightButton2 = document.querySelector("#btnBattle2");
var fightButton3 = document.querySelector("#btnBattle3");
var fightButton4 = document.querySelector("#btnBattle4");
var fightButton5 = document.querySelector("#btnBattle5");
var fightButton6 = document.querySelector("#btnBattle6");
var fightButton7 = document.querySelector("#btnBattle7");
//If you then type "fightButton into the console"
//you can see that this element:
//<button id="btnBattle" type="button" class="btn">Fight</button>
//has been captured
var p1 = document.querySelector("#player1 .hand");
var p2 = document.querySelector("#player2 .hand");
var s1 = document.querySelector("#player1 .score");
var s2 = document.querySelector("#player2 .score");
//var message = document.getElementById("message");  //made this a function instead

//event listeners
fightButton.addEventListener('click', battle);
//battle in "('click', battle)" is what function we are sending it to iniate
fightButton2.addEventListener('click', function(){
  rounds(02);
});
fightButton3.addEventListener('click', function(){
  rounds(03);
});
fightButton4.addEventListener('click', function(){
  rounds(04);
});
fightButton5.addEventListener('click', function(){
  rounds(05);
});
fightButton6.addEventListener('click', function(){
  rounds(06);
});

fightButton7.addEventListener('click', function(){
  rounds(07);
});
//FUNCTIONS
function rounds(a){
  //number of rounds sent to the global variable "r"
  r = a;
  //initiate battle function every 0.1 seconds for "a" times
  timer = setInterval(function(){
    battle()
  },200);
}


function battle() {
  //this is basically a loop for an interval:
  //check if the timer exists
  if(timer){
    //if so, decrease the global var of "r"
    r--;
    outputMessage("Rounds left " + r);
    //when "r" reaches 0, break out of interval
    if(r < 1){
      //clear the interval
      window.clearInterval(timer);
    }
  }
  //if first run is true, game is brand new and needs more steps
  if(firstRun){
    //once the button is clicked the first time, reset FirstRun to false
    //so it can only be clicked once
    //it will only be reset once game is reset
    firstRun = false;
    //build full deck of 52 cards
    buildCards();
    //shuffle the deck of cards
    //NOTE ERROR WAS HERE BECAUSE "cards" was not included!
    shuffleArray(cards);
    dealCards(cards);
    //above, do not need to pass in dealCards(cards)? WRONG!!!
    //because this function does not return anything WRONG!!!
    //WRONG needs "cards"
  }
  attack();
  //console.log('check that this works!');
}

function attack() {
  if(!gameover){
    var card1 = players[0].shift();
    //.shift() shows the first item in the array,
    //and removes it from that array
    var card2 = players[1].shift();
    //pot is taking the cards out, the winner will then be given these cards to their deck
    var pot = [card1, card2];
    //update html
    p1.innerHTML = showCard(card1,0);
    //the 0 in (card1, 0)  is to position the cards to move them later
    p2.innerHTML = showCard(card2,0);
    //check winners
    checkWinner(card1, card2, pot);
    //update scores
    //the score is reflective of how many cards are in each deck
    s1.innerHTML = players[0].length;
    s2.innerHTML = players[1].length;
  } else{
      //console.log("Game Over");
      outputMessage("Game Over");
  }
}

//another way to change the message on screen.
//involves changing all the console.log()'s to outputMessage()
//which is the function created below that changes the innerHTML
//don't think I'm a fan of this extra function
function outputMessage(message) {
  //console.log(message);
  document.getElementById("message").innerHTML = message;
}


function checkWinner(card1, card2, pot){
  //first check if either deck <= 4 which is game over:
  if ((players[0].length <= 4) || (players[1].length <= 4)){
    //if not enough cards, that player loses, exit
    gameover = true;
    return;
  }
  //console.log(card1, card2);
  if(card1.cardValue > card2.cardValue){
    //console.log("Player 1 wins");
    outputMessage("Player 1 wins");
    //adding both cards from the pot to Player 1's deck
    players[0] = players[0].concat(pot);
  }
  else if(card1.cardValue < card2.cardValue){
    //console.log("Player 2 wins");
    outputMessage("Player 2 wins");
    //adding both cards from the pot to Player 2's deck
    players[1] = players[1].concat(pot);
  }else {  //if there is a Tie!
    //console.log('Tie! BattleMode: Both players add 3 cards to pot');
    outputMessage("Tie! BattleMode: Both players add 3 cards to pot");
    //start next Battle
    battlemode(pot);
  }
  //console.log(players);
}

function battlemode(pot){
  var card1, card2;
  var pos = (pot.length/2);
  //check to see if a player has enough cards (3 +1) to do battle mode:
  if ((players[0].length < 4) || (players[1].length < 4)){
    //if not enough cards, that player loses, exit
    return;
  }else {
    //both players have enough cards, add 3 cards each to the pot:
    for (i = 0; i < 4; i++) {
      card1 = players[0].shift();
      pot = pot.concat(card1);
      p1.innerHTML += showCard(card1,(pos+i));
      //this is to display each card, see showCard function
      //each card gets shown on top of the previous,
      //location of each card is  style="left: "move+px"
      //move will = (pos+i)*40
      //pos+i will be 1+0 *40, then 2+1*40, then 3+2*40?
    }
    for (i = 0; i < 4; i++) {
      card2 = players[1].shift();
      pot = pot.concat(card2);
      p2.innerHTML += showCard(card2,(pos+i));
    }
    checkWinner(card1, card2, pot);
  }
}

//the visuals of the cards:
function showCard(c,p){
  var move = p * 40;
  //line below replaced by css above ~line 45
  //var bgColor = (c.icon == "H" || c.icon == "D") ? "red" : "black";
  //var bCard = c.num + ' of ' + c.suit;
  //this way with & and ; turns the info into the asci icon for card suits:
  //var bCard = '<div class="icard '+c.suit+' " style="color:'+bgColor+'">' + c.num + ' of &' + c.suit + ';';
  //when color was removed b/c it was added in CSS, then added other things:
  var bCard = '<div class="icard '+c.suit+' " style="left: '+move+'px">';
  bCard += '<div class="cardtop suit">' + c.num + '<br></div>';
  bCard += '<div class="cardmid suit"></div>';
  bCard += '<div class="cardbottom suit">' + c.num + '<br></div></div>';
  //class="icard was added later for CSS"

  //to see without the proper colors:
  //var bCard = c.num + ' of &' + c.suit + ';';

  //console.log(c,move);
  return bCard;
}

//at start of game build a full deck of 52 cards:
function buildCards(){
  //reset the cards deck to an empty array again
  cards = [];
  for(s in suits){
    //console.log(s);  //this shows that there are properly 4 suits
    //console.log(suits[s]);  //this lists each suit by name
    //suits[s][0] is the first letter of each suit
    var suitNew = suits[s][0].toUpperCase()  //makes the first letter uppercase
    //console.log(suitNew); //this prints first letters of each suit in uppercase
    for(n in cardFace){
      //build empty card object
      var card = {
        suit:suits[s],
        icon: suitNew,
        //icon is just the uppercase first letter of each suit above. Redundant?
        num:cardFace[n],
        cardValue:parseInt(n) + 2
        //num and cardValue are the same,
        //but num is the string value of the card value
        //and cardValue is the integer version of the card value
      }
      //loop through each suit and each card number, then push that card in the card object
      cards.push(card);
    }
  }
  //console.log(cards);  //show the deck of 52 cards
}

function dealCards(array){
  for (i = 0; i < array.length; i++){
    //deal to 1st person or 2nd person
    if(i % 2 === 0){
      players[0].push(array[i]);
    }else{
      players[1].push(array[i]);
    }
    /*   a more compact way to do that is:
    var m = i % 2;
    players[m].push(array[i]);
    */
  }
  //console.log(players);
}

//NOTE THIS CAN BE USED TO SHUFFLE ANY ARRAY!!!
//shuffle the deck of 52 cards
function shuffleArray(array){
  for(var x = array.length -1; x > 0; x--){
    //to get a number from 1 to 10:
    //Math.floor(Math.random()*10);     gives 0-9
    //Math.floor(Math.random()*10) +1;  gives 1-10
    //NOTE:  Math.ceil()  rounds up.  Math.floor()  rounds down
    var ii = Math.floor(Math.random()*(x+1));  //x+1 so we don't start with 0 value
    //create temp container for array item:
    var temp = array[x];
    //console.log(temp);  this will create duplicates, so need to overwrite it:
    array[x] = array[ii];
    //console.log(array[ii]);
    array[ii] = temp;

  }
  //console.log(array);  //see that the 52 cards are shuffled
  return array;
}
