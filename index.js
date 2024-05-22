const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');


const li = document.getElementsByClassName("fruit");
for(let i=0;i<li.length;i++){
    const editBtn = document.createElement("button");
    const editBtnText = document.createTextNode("Edit");
    editBtn.className = "edit-btn"
    editBtn.appendChild(editBtnText);
    
    const fruitDesc = document.createElement("p");
    const fruitDescText = document.createTextNode("Fruit Description");
    fruitDesc.appendChild(fruitDescText);
    li[i].appendChild(editBtn);
    li[i].appendChild(fruitDesc)

}

const descToAdd = document.createElement("input");
const addBtn = document.querySelector(".add")
descToAdd.type = "text";
descToAdd.id = "description"
descToAdd.placeholder="Description"
form.insertBefore(descToAdd, addBtn)

form.addEventListener("submit", function(event){
  event.preventDefault();
  
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newDes = document.getElementById("description");
  const newLi = document.createElement('li');
  const desPara = document.createElement('p');
  desPara.style.fontStyle = 'italic'
  const newLiText = document.createTextNode(fruitToAdd.value);
  const newLiDes = document.createTextNode(newDes.value);
  
  newLi.appendChild(newLiText);
  desPara.appendChild(newLiDes);
  newLi.appendChild(desPara);

  newLi.className = "fruit";
  
  
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const deleteBtnText = document.createTextNode("x");
  const editBtnText = document.createTextNode("Edit");
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = "delete-btn"
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn"
  newLi.appendChild(deleteBtn);
  newLi.appendChild(editBtn);
  

  fruits.appendChild(newLi);
  
})
fruits.addEventListener("click",function(event){
  if(event.target.classList.contains("delete-btn")){
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
})
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event){
  const userText = event.target.value.toLowerCase();
  const fruitItem = document.getElementsByClassName("fruit");
  for(let i=0;i<fruitItem.length;i++){
    const currentFruit = fruitItem[i].firstChild.textContent.toLowerCase();
    if(currentFruit.indexOf(userText)== -1){
      fruitItem[i].style.display = "none"
    }
    else{
      fruitItem[i].style.display = "flex"
    }
  }
})