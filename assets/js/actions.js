// La base https://scratch.mit.edu/projects/324655967/editor/
const userKeys = {
    UP: 38,
    SPACE: 32,
};
const specialKeys = {
    32: 'Space',
    38: 'Up'
};


const gravite=10;
let points=0;
const wahmed= 'assets/pics/Wahmed.svg';
const tacos= 'assets/pics/Tacos_0.svg';
const commencer='<button type="button" class="saut btn btn-primary btn-lg btn-block " id="saut">Sauter</button>';
let wahmed_hauteur=0;


document.getElementById("commencer").addEventListener("click",play);
document.getElementById("saut").addEventListener("click",saut);



function play(){
document.getElementById("game").innerHTML='<img class="wahmed" id="wahmed" src="'+wahmed+'" />';
}

function saut(event){
    setTimeout(function(){
        wahmed_hauteur=20;
        document.getElementById("game").innerHTML='<img class="wahmed" style="margin-bottom:'+wahmed_hauteur+'" id="wahmed" src="'+wahmed+'" />';
    },1000);


}

function KeyUp(event) {
    let key;
    key = event.which;
    keysPressed[key] = false;
    switch (key) {
        case userKeys.UP:
            case userKeys.SPACE:
console.log(wahmed_hauteur);
            saut();
            break;
    }   }