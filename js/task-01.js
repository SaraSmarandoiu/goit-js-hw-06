// 1
const categoriesList = document.querySelectorAll("ul#categories li.item");

console.log("Number of categories:", categoriesList.length);

// 2
categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const itemCount = category.querySelectorAll("li").length;

  console.log("Category:", title);
    console.log("Elements", itemCount);
  
});
