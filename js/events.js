console.log('This is separate Js file');

// option 2: add onclik function
function makeRed(){
    document.body.style.backgroundColor = 'red' ;
}


//  option 2:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue' ;
}