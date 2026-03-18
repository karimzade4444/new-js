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
    div.style.backgroundColor = el.color;
    const pName = document.createElement("p");
    pName.textContent = el.name;
    div.append(pName);
    container.append(div);
  });
}

function handleDeleteFruit(id) {
  cards = cards.filter((el) => el.id != id);
}

render();
