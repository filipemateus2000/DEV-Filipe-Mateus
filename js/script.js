var togglebtn=document.querySelector(".togglebtn");

var nav=document.querySelector(".navlinks");

var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.class.toggle("click");
    nav.classList.toggle("open");
})

var typed=new typed(".input" ,{
    strings:["Desenvolvedor Web Full Stack" , "Data Science", "Auxiliar Administrativo"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})