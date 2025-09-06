const form = document.querySelector("#votingForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const age = document.querySelector("#age").value;
  const name = document.querySelector("#name").value.trim();

  // Validation
  if (!name || !age || isNaN(age) || age === "") {
    alert("Please enter valid details");
    return;
  }

  // Convert age to a number
  const ageNum = Number(age);

  // Create a Promise
  const votingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle Promise resolution or rejection
  votingPromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});