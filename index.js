for(let i=0;i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() {
    let exp=this.innerHTML
    playMusic(exp)
    animate(exp)

})
}

document.addEventListener("keydown",function(event){

    let keyPress=event.key
    playMusic(keyPress)
    animate(keyPress)

})

function animate(key){

    let elem=document.getElementsByClassName(key)[0]
    elem.classList.add("pressed")

    setTimeout(function(){
        elem.classList.remove("pressed")
    },100)

}

function playMusic(exp){
    switch(exp){

        case "w":
            let crash=new Audio("sounds/crash.mp3")
            crash.play()
            break;

        
        case "a":
            let kick=new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;

        
        case "s":
            let snare=new Audio("sounds/snare.mp3")
            snare.play()
            break;

        case "d":
            let tom1=new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;   

        case "j":
            let tom2=new Audio("sounds/tom-2.mp3")
            tom2.play()
            break; 
            
        case "k":
            let tom3=new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;  

        case "l":
            let tom4=new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;  

        default:
            console.log(exp)
    }
}