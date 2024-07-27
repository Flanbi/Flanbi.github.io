
var flagSon = 0;
var bgm = new Audio('ressources/audios/Town_Theme_3.mp3');
bgm.loop = true;

// Switch entre activer ou désactiver la bgm
function son() {
    if (flagSon == 0) {
        document.getElementById("son-navbar").innerHTML = "🔈";
        bgm.play();
        flagSon = 1;
    }
    else {
        document.getElementById("son-navbar").innerHTML = "🔇";
        bgm.pause();
        flagSon = 0
    }
}

// Montre l'heure dans une alrte
function montreHeure() {
    now = new Date();
    var hours = now.getHours()
    if( hours < 10 ){
        hours = "0" + hours
    }
    var minutes = now.getMinutes()
    if( minutes < 10 ){
        minutes = '0' + minutes
    }
    var seconds = now.getSeconds()
    if( seconds < 10 ){
        seconds = '0' + seconds
    }
    new Audio('ressources/audios/Majoras_Clock_Tower.mp3').play();
    alert('🕗' + hours + ':' + minutes + ':' + seconds);
}


// Event listeners
document.getElementById('son-navbar').addEventListener("click", son)
document.getElementById('blinkyHorlogerie').addEventListener("click", montreHeure)
