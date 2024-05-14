//Variables

let menuvisible = false;


//Funciones
function mostrarocultarmenu(){
    if(menuvisible){
        document.getElementById("nav").classList ="";
        menuvisible =false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuvisible =true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuvisible = false;
}

function efecto(){
    var skills = document.getElementById("skills");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("swift");
        habilidades[1].classList.add("kotlin");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("ccc");
        habilidades[5].classList.add("objc");
        habilidades[6].classList.add("htmlcss");
        habilidades[7].classList.add("mysql");
    }
}

window.onscroll = function(){
    efecto();
}

function micv(){
    window.open("https://drive.google.com/file/d/12jFbxwX1J8WlBbqs9dV9WkfUFZazYpEi/view?usp=sharing", "CV | Luis Vienrich");
}
