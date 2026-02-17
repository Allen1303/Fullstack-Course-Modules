let itemsArr = [];
const addItem = () => {
  const input = document.getElementById("itemInput");
  const result = document.getElementById("itemResult");
  const item = input.value.trim();
  if (item === "") {
    result.innerHTML = "⚠️ Please enter an item to buy";
    return;
  }
  itemsArr.push(item);
  result.innerHTML = `${item} added, the list has: ${
    itemsArr.length
  } item(s): ${itemsArr.join(", ")}`;
  input.value = "";
  input.focus();
};
const showList = () => {
  const result = document.getElementById("itemResult");
  if (itemsArr.length === 0) {
    result.innerHTML = "⚠️ No items on the list yet!";
  } else {
    let itemsText = `Shopping List: ${itemsArr.length} total: <br> `;
    for (let i = 0; i < itemsArr.length; i++) {
      itemsText += `• Item-${i + 1} ${itemsArr[i]} <br>`;
    }
    itemsText += `<strong>🛒 Total items: ${itemsArr.length}</strong>`;
    result.innerHTML = itemsText;
  }
};
const clearList = () => {
  const result = document.getElementById("itemResult");
  result.innerHTML = "";
};
document.getElementById("add-items").addEventListener("click", addItem);
document.getElementById("show-items").addEventListener("click", showList);
document.getElementById("clear-items").addEventListener("click", clearList);
