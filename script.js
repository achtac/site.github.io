

window.addEventListener("scroll",(e) =>{
  if (window.scrollY == 0) {
         fleche.style.display = "none";
  }else if(window.scrollY > 810){
          fleche.style.display = "block";
  }
},false);


home.onclick = ()=> {
  const sr = ScrollReveal({
    reset:true
  });


  sr.reveal("#homebar",{

    duration:500,
    Delay:2,
    distance:"40px",
    origin:"top"

  });

   homebar.style.display ="block";

}

close.onclick = ()=> {
  const sr = ScrollReveal({
    reset:true
  });


  sr.reveal("#homebar",{

    duration:500,
    Delay:2,
    distance:"-40px",
    origin:"top"

  });

   homebar.style.display ="none";

}
