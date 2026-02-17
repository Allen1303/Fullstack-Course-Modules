let numbers = [];
const addNumber = () => {
  const input = document.getElementById("numberInput");
  const result = document.getElementById("numberResult");
  const number = input.value.trim();
  if (number === "" || isNaN(Number(number))) {
    result.innerHTML = `⚠️ Enter a valid number`;
    return;
  }
  numbers.push(number);
  result.innerHTML = `Added ${number} We now have ${
    numbers.length
  } Number(s): ${numbers.join(", ")}`;
  input.value = "";
  input.focus();
};
const showNumbers = () => {
  const result = document.getElementById("numberResult");
  if (numbers.length === 0) {
    result.innerHTML = "⚠️ No numbers added yet";
  } else {
    let numberText = `${numbers.length} Number(s) added. <br>`;
    for (let i = 0; i < numbers.length; i++) {
      numberText += `${i + 1}. ${numbers[i]} <br>`;
    }
    let sum = numbers.reduce(
      (accumulator, current) => accumulator + Number(current),
      0
    );
    numberText += `<strong>Sum: ${sum}</strong>`;
    result.innerHTML = numberText;
  }
};
document.getElementById("addNumberBtn").addEventListener("click", addNumber);
document.getElementById("showNumberBtn").addEventListener("click", showNumbers);
