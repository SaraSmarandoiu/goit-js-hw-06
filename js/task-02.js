const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1
const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  
  const listItem = document.createElement("li");
 // 2
  listItem.textContent = ingredient;
  // 3
  listItem.classList.add("item");
 // 4
ingredientsList.appendChild(listItem);
});