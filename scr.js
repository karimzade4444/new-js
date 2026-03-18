let cards = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Grape", color: "purple" },
];

let container = document.querySelector(".container");

function render() {
  container.innerHTML = "";
  cards.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.style.backgroundColor = el.color;
    const pName = document.createElement("p");
    pName.textContent = el.name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.onclick = () => {
      handleDeleteFruit(el.id);
    };
    div.append(pName, deleteButton);
    container.append(div);
    
  });
}

function handleDeleteFruit(id) {
  cards = cards.filter((item) => item.id != id);
  render();
}

render();

let createbtn = document.querySelector(".Create")
let inpcard  = document.querySelector(".inpCard")

createbtn.onclick=()=>{
  inpcard.style.display="block"
}


