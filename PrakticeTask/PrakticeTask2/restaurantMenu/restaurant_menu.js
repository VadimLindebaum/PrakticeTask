const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $29.99', 'Pasta - $18.50', 'Burger - $14.00', 'Salmon - $24.75'];
const dessertMenu = ['Cake - $6.50', 'Ice Cream - $4.25', 'Pudding - $5.00', 'Fruit Salad - $4.75'];

// Breakfast: using map
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById('breakfastTotalItems').innerHTML = `<strong>Total breakfast items:</strong> ${breakfastMenu.length}`;

// Main course: using forEach
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
document.getElementById('maincourseTotalItems').innerHTML = `<strong>Total main course items:</strong> ${mainCourseMenu.length}`;

// Dessert: using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
document.getElementById('dessertTotalItems').innerHTML = `<strong>Total dessert items:</strong> ${dessertMenu.length}`;
