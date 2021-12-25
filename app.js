
let imge = Array.from(document.querySelectorAll(".item img") );
// let imge =  document.querySelectorAll(".item img");

let lightBoxContainer = document.querySelector(".lightBoxContainer");
let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// let mouse = document.getElementsByClassName("imggifv");
let mouse = document.querySelector(".imggifv");

let currentImg = 0 ;



console.log(imge);

 
    for(let i=0 ; i< imge.length ; i++){
        imge[i].addEventListener("click" , showLightBoxContainer)
        //   alert("hyyyy")

        
    }



    function showLightBoxContainer(e){
        
        // lightBoxContainer.style.display = "flex"; 
        lightBoxContainer.style.transform = "scale(1)"; 


        let imgTargetSrc = e.target.src ;

        currentImg = imge.indexOf(e.target)  ;

        lightBoxContainer.firstElementChild.style.backgroundImage = "url("+ imgTargetSrc +")"

        // console.log(currentImg);


    }


    close.addEventListener("click" , closeBox );
    next.addEventListener("click" , nextImg );
    prev.addEventListener("click" , prevImg );


    function closeBox(){

        //   lightBoxContainer.style.display = "none"; 
        lightBoxContainer.style.transform = "scale(0)"; 
    }

    function nextImg(){
        currentImg++ ;
        if(currentImg == imge.length){
            currentImg = 0 ;
        }
        lightBoxContainer.firstElementChild.style.backgroundImage = "url("+ imge[currentImg].src +")"
        // console.log(currentImg);
      
    }

    function prevImg(){
        currentImg--;
        if(currentImg < 0){
            currentImg = imge.length-1 ;
         }
       
        lightBoxContainer.firstElementChild.style.backgroundImage = "url("+ imge[currentImg].src +")"
       
    }



    document.addEventListener("keydown" , function(e){
       if(e.key == "ArrowRight"){
           nextImg();
       }
       else if(e.key == "ArrowLeft"){
           prevImg();
       }
       else if(e.key == "Escape"){
        closeBox();
       }

    })


    document.addEventListener("mousemove" , function(e){
        mouse.style.left = e.clientX + "px";
        mouse.style.top = e.clientY + "px";

        // console.log(e.clientX);
    })



