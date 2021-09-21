const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.getElementById("ingredients");


const list = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.innerHTML = ingredient;
  return items;
});
ulList.append(...list);
