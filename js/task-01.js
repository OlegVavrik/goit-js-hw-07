const liItem = document.querySelectorAll(".item");
console.log(`В списке ${liItem.length} категории.`);

const ulCategories = document.querySelectorAll(".item");
ulCategories.forEach(element => {
	console.log(`Категория:` + element.firstElementChild.textContent)
	console.log(`Количество элементов:` + element.lastElementChild.children.length)
 })
	 