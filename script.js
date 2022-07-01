

window.addEventListener("scroll",(e) =>{
  if (window.scrollY == 0) {
         fleche.style.display = "none";
  }else if(window.scrollY > 810){
          fleche.style.display = "block";
  }
},false)

//
//
// const sr = ScrollReveal({
//   reset:true
// });
//
//
// sr.reveal("#competences",{
//
//   duration:1000,
//   Delay:2,
//   distance:"40px",
//   origin:"bottom"
//
// });
// sr.reveal("#noti",{
//
//   duration:1000,
//   Delay:2,
//   distance:"150px",
//   origin:"left"
//
// });
//
//
// sr.reveal("#num",{
//
//   duration:1000,
//   Delay:2,
//   distance:"150px",
//   origin:"left"
//
// });
//
// sr.reveal("#description",{
//
//   duration:1000,
//   Delay:2,
//   distance:"150px",
//   origin:"right"
//
// });
