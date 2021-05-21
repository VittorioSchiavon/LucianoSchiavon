

const hamburger= document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    let element= document.getElementById("navContainer");
    element.classList.toggle("active");

    hamburger.innerHTML==="☰" ? hamburger.innerHTML="✕" : hamburger.innerHTML="☰";

})
    

var iteraction=0;
function changePhotos(){
    const imgProgetto= document.getElementById("imgProgetto");
    const imgLVL= document.getElementById("imgLVL");
    iteraction++;
    if(iteraction==2) iteraction=0;
    imgLVL.src=`images/imgLVL${iteraction}.jpg`;
    imgProgetto.src=`images/imgProgetto${iteraction}.jpg`;


}
setInterval(changePhotos,3000);