const liItem = document.querySelectorAll(".item");
console.log(`В списке ${liItem.length} категории.`);

const ulCategories = [...liItem].map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`).join("\n");
console.log(ulCategories);


