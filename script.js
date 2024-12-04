(()=>{
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11"
    ];

    const buttons = document.querySelectorAll(".btn")
    const Image =document.querySelector(".image-slider")
    let counter = 0

    buttons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            if(button.classList.contains("btn-left")){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                // Image.scr=`./Gallery/${pictures[counter]}.jpg`
                Image.style.background=`url("Gallery/${pictures[counter]}.jpg")`

            }


            if(button.classList.contains("btn-right")){
                counter++
                if(counter > pictures.length - 1){
                    counter =0                    
                }
                Image.style.background=`url("Gallery/${pictures[counter]}.jpg")`
                Image.style.backgroundSize = "cover"
            }
        })
    })
    
})()