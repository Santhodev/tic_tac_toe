var user; //symbol for user
var com; //symbol for computer
var exit = 0; // to determine if the game has completed and typer of completion(win/lose/tie)
var i = 0;
var sh = 0;
var value = [5,5,5,5,5,5,5,5,5]; //initial value of all 9 squares in tic-tac-toe
var player_2 ; //variable to define if it is 1=player game or 2-plyers game
var user_2; //symbol for user_2
var val = 0; //for selecting the correct player among 2 players

//selcting 1-player or 2-player game
function OX(n) {
if (n ==1) {
sessionStorage.setItem('player_2','0');
window.document.location.href = "https://cdn.rawgit.com/Santhodev/tic_tac_toe/master/ttt/radio.html";
alert("hi");
}
else {
sessionStorage.setItem('player_2','1');
window.document.location.href = "https://cdn.rawgit.com/Santhodev/tic_tac_toe/master/ttt/radio.html";
}
}

//selecting your symbol
function symbol(n) {
	alert("inside symbol");
if (n==1) {
user = "O";
com = "X";
user_2 = "X";
alert(user);
}
else {
user = "X";
com = "O";
user_2 = "O";
alert(user);
}
}

//actual game
function process(n) {
	alert(user);
player_2 = sessionStorage.getItem('player_2');
//1-player
if (exit==0 && user && value[n]==5 && player_2==0) { 
document.getElementById(n).innerHTML =user;
value[n] = 0;
check(); 
draw_check();
if (exit == 0) put();
draw_check();
setTimeout("finish_1()",4500);
}
//2-player
else if (exit==0 && user && value[n]==5 && player_2==1){
if (val%2==0){
document.getElementById(n).innerHTML = user;
value[n] = 0;
check(); 
draw_check();
val = val+1;
}
else {
if (exit == 0) {
document.getElementById(n).innerHTML = user_2;
value[n] = 1;
val = val+1;
check(); 
draw_check();
}
}
setTimeout("finish_2()",4500);
}
}

//functions to publish results
function finish_1() {
if (exit==1) {
swal({   title: "YOU WON!!!",   text: "Congrats!",   type: "success",   confirmButtonText: "New game" },
function(){
    window.location.href = 'radio.html';
});
}
if (exit==2) {
swal({   title: "YOU LOST!",   text: "Alas!",   type: "error",   confirmButtonText: "Try again" },
function(){
    window.location.href = 'radio.html';
});
}
if (exit==3) {
swal({   title: "MATCH DRAWN!",   text: "It's a tie!",   imageUrl:"http://content.mycutegraphics.com/graphics/clothing/bow-tie.png",   confirmButtonText: "New game" },
function(){
    window.location.href = 'radio.html';
});
}
}
function finish_2() {
if (exit==1) {
swal({   title: "Player-1 WON!!!",   text: "Congrats!",   type: "success",   confirmButtonText: "New game" },
function(){
    window.location.href = 'radio.html';
});
}
if (exit==2) {
swal({   title: "Player-2 WON",   text: "Congrats!",   type: "success",   confirmButtonText: "New game" },
function(){
    window.location.href = 'radio.html';
});
}
if (exit==3) {
swal({   title: "MATCH DRAWN!",   text: "It's a tie!",   imageUrl:"http://content.mycutegraphics.com/graphics/clothing/bow-tie.png",   confirmButtonText: "New game" },
function(){
    window.location.href = 'radio.html';
});
}
}

//To highlight the squares that formed the pattern
function show(n,o,p)
{
	if (document.getElementById)
	document.getElementById(n).style.visibility = "visible";
	document.getElementById(o).style.visibility = "visible";
	document.getElementById(p).style.visibility = "visible";
        sh=sh+1;
//        alert(sh);
}
// blink "off" state
function hide(n,o,p)
{
	if (document.getElementById)
	document.getElementById(n).style.visibility = "hidden";
	document.getElementById(o).style.visibility = "hidden";
	document.getElementById(p).style.visibility = "hidden";
}

//check for win
function check() {
if (((!value[0] && !value[1]) && !value[2] ==1)||((value[0]==1 && value[1]==1) && value[2] ==1)){ 
document.getElementById(0).style.background="rgb(155,0,0)";
document.getElementById(1).style.background="rgb(155,0,0)";
document.getElementById(2).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(0,1,2)",i); 
	setTimeout("show(0,1,2)",i+450);
}
if ((!value[0] && !value[1]) && !value[2] ==1) {
exit=1;
}
if ((value[0]==1 && value[1]==1) && value[2]==1) {
exit=2;
}
}
if (((!value[0] && !value[3]) && !value[6] ==1)||((value[0]==1 && value[3]==1) && value[6] ==1)) {
document.getElementById(0).style.background="rgb(155,0,0)";
document.getElementById(3).style.background="rgb(155,0,0)";
document.getElementById(6).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(0,3,6)",i); 
	setTimeout("show(0,3,6)",i+450);
}
if ((!value[0] && !value[3]) && !value[6] ==1){
exit=1;
}
if ((value[0] && value[3]) && value[6] ==1) {
exit=2;
}
} 
if (((!value[0] && !value[4]) && !value[8] ==1)||((value[0]==1 && value[4]==1) && value[8] ==1)) {
document.getElementById(0).style.background="rgb(155,0,0)";
document.getElementById(4).style.background="rgb(155,0,0)";
document.getElementById(8).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(0,4,8)",i); 
	setTimeout("show(0,4,8)",i+450);
}
if ((!value[0] && !value[4]) && !value[8] ==1){
exit=1;
}
if ((value[0] && value[4]) && value[8] ==1) {
exit=2;
}
} 
if (((!value[1] && !value[4]) && !value[7] ==1)||((value[1]==1 && value[4]==1) && value[7] ==1)) {
document.getElementById(1).style.background="rgb(155,0,0)";
document.getElementById(4).style.background="rgb(155,0,0)";
document.getElementById(7).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(1,4,7)",i); 
	setTimeout("show(1,4,7)",i+450);
}
if ((!value[1] && !value[4]) && !value[7] ==1){
exit=1;
}
if ((value[1] && value[4]) && value[7] ==1) {
exit=2;
}
} 
if (((!value[2] && !value[5]) && !value[8] ==1)||((value[2]==1 && value[5]==1) && value[8] ==1)) {
document.getElementById(2).style.background="rgb(155,0,0)";
document.getElementById(5).style.background="rgb(155,0,0)";
document.getElementById(8).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(2,5,8)",i); 
	setTimeout("show(2,5,8)",i+450);
}
if ((!value[2] && !value[5]) && !value[8] ==1){
exit=1;
}
if ((value[2] && value[5]) && value[8] ==1) {
exit=2;
}
} 
if (((!value[3] && !value[4]) && !value[5] ==1)||((value[3]==1 && value[4]==1) && value[5] ==1)) {
document.getElementById(3).style.background="rgb(155,0,0)";
document.getElementById(4).style.background="rgb(155,0,0)";
document.getElementById(5).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(3,4,5)",i); 
	setTimeout("show(3,4,5)",i+450);
}
if ((!value[3] && !value[4]) && !value[5] ==1){
exit=1;
}
if ((value[3] && value[4]) && value[5] ==1) {
exit=2;
}
} 
if (((!value[6] && !value[7]) && !value[8] ==1)||((value[6]==1 && value[7]==1) && value[8] ==1)) {
document.getElementById(6).style.background="rgb(155,0,0)";
document.getElementById(7).style.background="rgb(155,0,0)";
document.getElementById(8).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(6,7,8)",i); 
	setTimeout("show(6,7,8)",i+450);
}
if ((!value[6] && !value[7]) && !value[8] ==1){
exit=1;
}
if ((value[6] && value[7]) && value[8] ==1) {
exit=2;
}
} 
if (((!value[2] && !value[4]) && !value[6] ==1)||((value[2]==1 && value[4]==1) && value[6] ==1)) {
document.getElementById(2).style.background="rgb(155,0,0)";
document.getElementById(4).style.background="rgb(155,0,0)";
document.getElementById(6).style.background="rgb(155,0,0)";
for(i=900; i <2600; i=i+900) {
	setTimeout("hide(2,4,6)",i); 
	setTimeout("show(2,4,6)",i+450);
}
if ((!value[2] && !value[4]) && !value[6] ==1){
exit=1;
}
if ((value[2] && value[4]) && value[6] ==1) {
exit=2;
}
} 
}

//computer's turn 
function display(n) {
document.getElementById(n).innerHTML = com;
value[n] = 1;
check(); 
}

//computer's play
function put() {
////For winning
if (value[0] == 1) {
//alert("1");
if (value[1]==1 && value[2] !=0) {display(2); return 0; }
if (value[2]==1 && value[1] !=0) {display(1); return 0; }
if (value[3]==1 && value[6] !=0) {display(6); return 0; }
if (value[6]==1 && value[3] !=0) {display(3); return 0; }
if (value[4]==1 && value[8] !=0) {display(8); return 0; }
if (value[8]==1 && value[4] !=0) {display(4); return 0; }
}
if (value[0] == 5) {
if (value[1]==1 && value[2] ==1) {display(0); return 0; }
if (value[3]==1 && value[6] ==1) {display(0); return 0; }
if (value[4]==1 && value[8] ==1) {display(0); return 0; }
}
if (value[4] == 1) {
if (value[1]==1 && value[7] !=0) {display(7); return 0; }
if (value[7]==1 && value[1] !=0) {display(1); return 0; }
if (value[3]==1 && value[5] !=0) {display(5); return 0; }
if (value[5]==1 && value[3] !=0) {display(3); return 0; }
if (value[2]==1 && value[6] !=0) {display(6); return 0; }
if (value[6]==1 && value[2] !=0) {display(2); return 0; }
}
if (value[4] == 5) {
if (value[1]==1 && value[7] ==1) {display(4); return 0; }
if (value[3]==1 && value[5] ==1) {display(4); return 0; }
if (value[2]==1 && value[6] ==1) {display(4); return 0; }
}
if (value[8]==1) {
if (value[2]==1 && value[5] !=0) {display(5); return 0; }
if (value[5]==1 && value[2] !=0) {display(2); return 0; }
if (value[6]==1 && value[7] !=0) {display(7); return 0; }
if (value[7]==1 && value[6] !=0) {display(6); return 0; }
}
if (value[8]==5) {
if (value[2]==1 && value[5] ==1) {display(8); return 0; }
if (value[6]==1 && value[7] ==1) {display(8); return 0; }
}
//to prevent opponent from winningalert(11);
if (value[0] == 0) {
if ((value[1]==0) && (value[2]!=1)) {
display(2); 
return 0;
 }
if (value[2]==0 && value[1] !=1) {
display(1); 
return 0;
 }
if (value[3]==0 && value[6] !=1) {
display(6); 
return 0;
 }
if (value[6]==0 && value[3] !=1) {
display(3); 
return 0;
 }
if (value[4]==0 && value[8] !=1) {
display(8); 
return 0;
 }
if (value[8]==0 && value[4] !=1) {
display(4); 
return 0;
 }
}
if (value[0] == 5) {
if (value[1]==0 && value[2] ==0) {display(0); return 0; }
if (value[3]==0 && value[6] ==0) {display(0); return 0; }
if (value[4]==0 && value[8] ==0) {display(0); return 0; }
}
if (value[4] == 0) {
if (value[1]==0 && value[7] !=1) {display(7); return 0; }
if (value[7]==0 && value[1] !=1) {display(1); return 0; }
if (value[3]==0 && value[5] !=1) {display(5); return 0; }
if (value[5]==0 && value[3] !=1) {display(3); return 0; }
if (value[2]==0 && value[6] !=1) {display(6); return 0; }
if (value[6]==0 && value[2] !=1) {display(2); return 0; }
}
if (value[4] == 5) {
if (value[1]==0 && value[7] ==0) { display(4); return 0; }
if (value[3]==0 && value[5] ==0) { display(4); return 0; }
if (value[2]==0 && value[6] ==0) { display(4); return 0; }
}
if (value[8]==0) {
if (value[2]==0 && value[5] !=1) { display(5); return 0; }
if (value[5]==0 && value[2] !=1) { display(2); return 0; }
if (value[6]==0 && value[7] !=1) { display(7); return 0; }
if (value[7]==0 && value[6] !=1) { display(6); return 0; }
}
if (value[8]==5) {
if (value[2]==0 && value[5] ==0) { display(8); return 0; }
if (value[6]==0 && value[7] ==0) { display(8); return 0; }
}
//when only one value exists
if (value[0] == 1) {
//alert("1");
if (value[1]!=0 && value[2] !=0) {display(2); return 0; }
if (value[3]!=0 && value[6] !=0) {display(6); return 0; }
if (value[4]!=0 && value[8] !=0) {display(8); return 0; }
}
if (value[0] == 5) {
if (value[2]==1 && value[1] !=0) {display(0); return 0; }
if (value[6]==1 && value[3] !=0) {display(0); return 0; }
if (value[8]==1 && value[4] !=0) {display(0); return 0; }
if (value[1]==1 && value[2] !=0) {display(0); return 0; }
if (value[3]==1 && value[6] !=0) {display(0); return 0; }
if (value[4]==1 && value[8] !=0) {display(0); return 0; }
}
if (value[4] == 1) {
if (value[1]!=0 && value[7] !=0) {display(7); return 0; }
if (value[3]!=0 && value[5] !=0) {display(5); return 0; }
if (value[2]!=0 && value[6] !=0) {display(6); return 0; }
}
if (value[4] == 5) {
if (value[7]!=0 && value[1] ==1) {display(4); return 0; }
if (value[5]!=0 && value[3] ==1) {display(4); return 0; }
if (value[6]!=0 && value[2] ==1) {display(4); return 0; }
if (value[1]!=0 && value[7] ==1) {display(4); return 0; }
if (value[3]!=0 && value[5] ==1) {display(4); return 0; }
if (value[2]!=0 && value[6] ==1) {display(4); return 0; }
}
if (value[8]==1) {
if (value[2]!=0 && value[5] !=0) {display(5); return 0; }
if (value[5]!=0 && value[2] !=0) {display(2); return 0; }
if (value[6]!=0 && value[7] !=0) {display(7); return 0; }
if (value[7]!=0 && value[6] !=0) {display(6); return 0; }
}
if (value[8]==5) {
if (value[5]!=0 && value[2] ==1) {display(8); return 0; }
if (value[7]!=0 && value[6] ==1) {display(8); return 0; }
if (value[2]!=0 && value[5] ==1) {display(8); return 0; }
if (value[6]!=0 && value[7] ==1) {display(8); return 0; }
}
//fill centre
if(value[4]==5) {display(4); return 0;}
//random
for (i=0; i< 8; i++) {
if (value[i]==5) {
// alert(i);
 display(i); 
 return 0;
}
}
}

//check for game draw
function draw_check() {
if (exit==0) {
for (var j=0; j<9; j++){
if (value[j]==5) return 0;
}
exit=3;
}
}
