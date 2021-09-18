const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulList = document.getElementById("ingredients");

const food = ingredients.forEach(ingredients => {
  let items = document.createElement("li");
  items.innerHTML = ingredients;
  ulList.append(items);
});