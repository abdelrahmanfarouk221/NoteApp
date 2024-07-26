const note_Container = document.querySelector(".Note-Container");
const btn = document.querySelector(".btn");
var notes = document.querySelectorAll(".input-box");



btn.addEventListener("click",()=>{
    let inputBox =document.createElement("p");
    let img = document.createElement("img");

    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./assits/delete.png" ;
    img.className="delete-btn";
    note_Container.appendChild(inputBox).appendChild(img);
})


note_Container.addEventListener("click",(e)=>{
   if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
   }
}
)





