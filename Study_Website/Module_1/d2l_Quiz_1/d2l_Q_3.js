function checkAnswer1(answer){
    const resultDiv = document.getElementById('outputDisplay1');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else{
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }
}
function checkAnswer2(answer){
    const resultDiv = document.getElementById('outputDisplay2');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else{
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }
}
function checkAnswer3(answer){
    const resultDiv = document.getElementById('outputDisplay3');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\"></b>"
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else{
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }
}
function checkAnswer4(answer){
    const resultDiv = document.getElementById('outputDisplay4');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else{
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }
}
function checkAnswer5(answer){
    const resultDiv = document.getElementById('outputDisplay5');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }else{
        resultDiv.innerHTML = "<b id=\"green\"></b>";
    }
}
function checkAnswer6(answer){
    const resultDiv = document.getElementById('outputDisplay6');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"red\">WRONG</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">NOT IT</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">INCORRECT</b>";
    }else{
        resultDiv.innerHTML = "Function definitions definetly <b id=\"green\">do not appear in a C header file!</b>";
    }
}
function checkAnswer7(answer){
    const resultDiv = document.getElementById('outputDisplay7');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"red\">NOOOOOO!</b> That makes a directory!";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"green\">Yes, correct!</b> That prints the working directory!";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">NOPE: </b>THAT REMOVES A DIRECTORY...";
    }else{
        resultDiv.innerHTML = "<b id=\"red\">Wrong...</b> That changes a directory!";
    }
}
function checkAnswer8(answer){
    const resultDiv = document.getElementById('outputDisplay8');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"red\">NOPE</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">WRONG</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "YES, <b id=\"green\">correct!</b> struct point p1; is not a declaration of a pointer variable!";
    }else{
        resultDiv.innerHTML = "THAT <b id=\"red\">ISN'T RIGHT!</b>";
    }
}
function checkAnswer9(answer){
    const resultDiv = document.getElementById('outputDisplay9');
    if(answer === 'A'){
        resultDiv.innerHTML = "Yes that is <b id=\"green\">correct!</b> double square (double number); is the correct function prototype!";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">NOPE</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">Not right!</b>";
    }else{
        resultDiv.innerHTML = "<b id=\"red\">WRONG!</b> TRY AGAIN...";
    }
}
function checkAnswer10(answer){
    const resultDiv = document.getElementById('outputDisplay10');
    if(answer === 'A'){
        resultDiv.innerHTML = "ABSOLUTELY <b id=\"green\">RIGHT!</b> A multiuser system that operates on a queue of jobs is the <b id=\"green\">right choice!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">AHH NO!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "DING DING THAT'S <b id=\"red\">WRONG</b>";
    }else{
        resultDiv.innerHTML = "<b id=\"red\">NOOOOOOOOOPE</b>";
    }
}
function checkAnswer11(answer){
    const resultDiv = document.getElementById('outputDisplay11');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"red\">NO!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">WRONG!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">INCORRECT!</b> TRY AGAIN...";
    }else{
        resultDiv.innerHTML = "YES, a system that processes input to support interactive computing is <b id=\"green\">correct!</b>";
    }
}
function checkAnswer12(answer){
    const resultDiv = document.getElementById('outputDisplay12');
    if(answer === 'A'){
        resultDiv.innerHTML = "YUP Referee (managing resources is the <b id=\"green\">correct choice!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "<b id=\"red\">NEGATIVE, INCORRECT</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">WRONG</b>";
    }else{
        resultDiv.innerHTML = "<b id=\"red\">NOPE</b>";
    }
    
}
function checkAnswer13(answer){
    const resultDiv = document.getElementById('outputDisplay13');
    if(answer === 'A'){
        resultDiv.innerHTML = "Nope, <b id=\"red\">not right</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "Switching between multiple programs in memory is <b id=\"green\">right!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "That is <b id=\"red\">not right</b>";
    }else{
        resultDiv.innerHTML = "<b id=\"red\">WRONG</b>";
    }
}
function checkAnswer14(answer){
    const resultDiv = document.getElementById('outputDisplay14');
    if(answer === 'A'){
        resultDiv.innerHTML = "That is almost correct, but <b id=\"red\">not completely right</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "That is somewhat correct, but <b id=\"red\">not completely right</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "That is partly correct, but <b id=\"red\">not completely right</b>";
    }else{
        resultDiv.innerHTML = "All of the above is <b id=\"green\">correct!</b>";
    }
}
function checkAnswer15(answer){
    const resultDiv = document.getElementById('outputDisplay15');
    if(answer === 'A'){
        resultDiv.innerHTML = "It does list the contents of a directory! That is <b id=\"green\">correct!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "That is <b id=\"red\">not correct!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "YOU ARE <b id=\"red\">not correct!</b>";
    }else{
        resultDiv.innerHTML = "WELP, <b id=\"red\">not correct!</b>";
    }
}
function checkAnswer16(answer){
    const resultDiv = document.getElementById('outputDisplay16');
    if(answer === 'A'){
        resultDiv.innerHTML = "Referee (managing resources) is <b id=\"red\">wrong choice!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "Illusionist (abstracting the hardware is the <b id=\"red\">wrong choice!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "Glue (providing common services) is the <b id=\"green\">correct choice!</b>";
    }else{
        resultDiv.innerHTML = "None of the above is the <b id=\"red\">incorrect choice!</b>";
    }
}
function checkAnswer17(answer){
    const resultDiv = document.getElementById('outputDisplay17');    
    if(answer === 'A'){
        resultDiv.innerHTML = "NOPE THAT IS <b id=\"red\">not correct!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "EHHHH <b id=\"red\">not correct!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "That is <b id=\"red\">not correct!</b>";
    }else{
        resultDiv.innerHTML = "YES! The mv command can rename a file! <b id=\"green\">Correct choice!</b>";
    }
}
function checkAnswer18(answer){
    const resultDiv = document.getElementById('outputDisplay18');
    if(answer === 'A'){
        resultDiv.innerHTML = "That is <b id=\"red\">not correct!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "YES, mkdir is the <b id=\"green\">correct choice!</b>!";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "Nope that is <b id=\"red\">Incorrect!</b>";
    }else{
        resultDiv.innerHTML = "That is <b id=\"red\">Incorrect!</b>";
    }
}
function checkAnswer19(answer){
    const resultDiv = document.getElementById('outputDisplay19');
    if(answer === 'A'){
        resultDiv.innerHTML = "WELL, THAT WAS <b id=\"red\">wrong!</b>";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "Not the <b id=\"red\">right choice!</b>";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "<b id=\"red\">Incorrect!</b> that is not the right choice...";
    }else{
        resultDiv.innerHTML = "<b id=\"green\">Correct!</b> throughput is the right choice!";
    }
}
function checkAnswer20(answer){
    const resultDiv = document.getElementById('outputDisplay20');
    if(answer === 'A'){
        resultDiv.innerHTML = "<b id=\"red\">NOT correct!</b> ";
    }else if(answer === 'B'){
        resultDiv.innerHTML = "HEY THAT'S <b id=\"green\">CORRECT!</b><br><br>Illusionist is the correct choice!";
    }else if(answer === 'C'){
        resultDiv.innerHTML = "That's <b id=\"red\">not right!</b>";
    }else{
        resultDiv.innerHTML = "That is <b id=\"red\">Incorrect!</b>";
    }
}
/* 
This was originally used for each clear button, which was a waste of space when coding (i.e. redundant).
const clearResultOne = () => document.getElementById('outputDisplayOne').innerHTML = "One of these four are correct, choose wisely.";//Redundant
const clearResultTwo = () => document.getElementById('outputDisplayTwo').innerHTML = "One of these four are correct, choose wisely.";//Redundant
const clearResultThree = () => document.getElementById('outputDisplayThree').innerHTML = "One of these four are correct, choose wisely.";//Redundant
*/
document.addEventListener('DOMContentLoaded', () => {
    const clearText = "Answer Reveal.";
    function clearAllOutputs(){
        document.querySelectorAll('.outputStyle').forEach(el => el.innerHTML = clearText);
    }
    document.getElementById('clearAll').addEventListener('click', clearAllOutputs);
});//Clears all "Answer Reveal" output div's with one button.