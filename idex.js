var statesu = document.querySelector("h5")
var add =  document.querySelector("#add")

var doo = 0

add.addEventListener("click",function(){
    if(doo == 0){
        statesu.innerHTML = "Friend"
        statesu.style.color = "green"
        doo = 1
    }else{
        statesu.innerHTML = "Add Friend"
        statesu.style.color = "red"
        doo = 0
    }
})




