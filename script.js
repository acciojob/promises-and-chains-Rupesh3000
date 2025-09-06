//your JS code here. If required.
const age = document.querySelector("#age").value;
const name = document.querySelector("#name").value;
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let ageValue = age.trim("");
  let nameValue = age.trim("");

  if (!ageValue.length > 0 && !nameValue.length > 0) {
    alert("Please enter valid details.");
    return;
  } else {
    if (ageValue > 18) {
      setTimeout(() => {
        alert("Welcome, . You can vote.");
      }, 4000);
    } else {
      setTimeout(() => {
        alert("Oh sorry . You aren't old enough.");
      }, 4000);
    }
  }
});