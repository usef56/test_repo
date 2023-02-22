
// --- start javascript showbar--
var navlinks = document.getElementById("nav-links");

function showminu(){
      navlinks.style.right="0"

}
function hideminu(){
      navlinks.style.right="-200px"

}
// --- the end javascript showbar--

let i =3;

document.getElementById("light").onclick= function(){

    if(i%2 == 1){
    

        document.styleSheets[0].rules[0].style.setProperty("--pink" , "black" , "important")
        i++
    
    
    
    
    }

    else{
        document.styleSheets[0].rules[0].style.setProperty("--pink" , "#f44336" , "important")
        i++
    }


}


