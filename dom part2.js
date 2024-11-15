let a=document.getElementById("hello");
a.style.backgroundColor="blue"
let pchildElement=document.createElement("div");
let prabhasimage=document.createElement("img");
prabhasimage.width="100"
 prabhasimage.src="https://i.pinimg.com/550x/9c/90/10/9c901018cab53a62c2fd73592c209eff.jpg"

pchildElement.textContent="this is div tag"


a.append(pchildElement,prabhasimage)
// a.removeChild(prabhasimage)
let kohliimage=document.createElement("img")
kohliimage.frameBorder=1
kohliimage.width="300"
kohliimage.src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
a.replaceChild(kohliimage,prabhasimage)
const clonedelement=a.cloneNode("true")
document.body.append(clonedelement)
let saipallavipic=document.createElement("img")
saipallavipic.setAttribute("src" ,"https://i.pinimg.com/550x/e4/1d/b2/e41db2821070c79a002e7c4c24acfdc8.jpg");
saipallavipic.setAttribute("width","200px")
document.body.appendChild(saipallavipic)
saipallavipic.style.backgroundColor="black"
saipallavipic.style.padding="30px"
saipallavipic.removeAttribute("width")
 let divTag=document.createElement("div")
 divTag.className="container"
 divTag.classList.add("vamsi")
 divTag.classList.add("ravi")
 divTag.classList.remove("vamsi")
 divTag.classList.replace("ravi","rakesh")
console.log(divTag)
kohliimage.addEventListener("click",function(){
    alert("kohli img is clicked")
    saipallavipic.style.borderRadius="50%"
})

let div=document.querySelector("div")
console.log(div.firstElementChild);
console.log(div.lastElementChild);
let t=document.querySelector(".one")
t.insertAdjacentElement("afterend",prabhasimage)



