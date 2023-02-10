//  option 1: directly set on the HTML element
//  <button onclick="console.log(65)">Another Button</button>  


// option 2: add onclik function on the html element
// IMPROTANT: We will use this
//    <button onclick="makeRed()">Make Red</button>

function makeRed(){
    document.body.style.backgroundColor = 'red' ;
}


//  option 3:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue' ;
}


//  option 3: another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}


// option 4: another
const pinkBullon = document.getElementById('make-pink');
     pinkBullon.addEventListener('click', makePink);


     function makePink(){
        document.body.style.backgroundColor = 'pink';
     }


 // option 4: another
 const greenButton = document.getElementById('make-green');
 greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
 })


//  option 4 : final
// IMPROTANT: We will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
} )