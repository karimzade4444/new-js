const cards = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Grape", color: "purple" }
];

let container = document.querySelector(".container");

container.style.display = "flex";
container.style.gap = "20px";
container.style.flexWrap = "wrap";

cards.forEach((card) => {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let likeBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  div.style.border = "1px solid black";
  div.style.padding = "10px";
  div.style.cursor = "pointer";

  p.textContent = card.name;

  let likes = 0;
  likeBtn.textContent = "❤️ 0";

  deleteBtn.textContent = "❌ Delete";

  div.append(p, likeBtn, deleteBtn);
  container.append(div);

  // смена цвета карточки
  div.onclick = () => {
    if (div.style.backgroundColor === card.color) {
      div.style.backgroundColor = "white";
    } else {
      div.style.backgroundColor = card.color;
    }
  };

  // лайк
  likeBtn.onclick = (e) => {
    e.stopPropagation();
    likes++;
    likeBtn.textContent = "❤️ " + likes;
  };

  // удаление карточки
  deleteBtn.onclick = (e) => {
    e.stopPropagation();
    alert("Удалена карточка: " + card.name);
    div.remove();
  };
});