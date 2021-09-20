const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulList = document.getElementById("ingredients");

const list = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`,"");

ulList.innerHTML = list;