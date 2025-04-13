// Add event listener for the "Enter" key once, outside the function
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitFeedback();
  }
});

function submitFeedback() {
  const username = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();
  const job = document.getElementById("job").value.trim();
  const designation = document.getElementById("designation").value.trim();
  const productType = document.getElementById("productType").value.trim();
  const feedback = document.getElementById("feedbackText").value.trim();

  // Validate inputs
  if (
    !username ||
    !age ||
    !email ||
    !job ||
    !designation ||
    !productType ||
    !feedback
  ) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Display a thank-you message
  alert("Thank you for your valuable feedback");

  // Update the UI with user input
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;

  // Show the user info section
  document.getElementById("userInfo").style.display = "block";
}

// Attach the click event listener to the submit button
document.getElementById("submitBtn").onclick = submitFeedback;
