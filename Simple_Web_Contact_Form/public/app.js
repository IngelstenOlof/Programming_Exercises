postForm();
async function postForm() {
  //Get references to the DOM elements
  const formName = document.getElementById("name");
  const formEmail = document.getElementById("email");
  const formIssue = document.getElementById("issue");
  const formComment = document.getElementById("comment");

  //GET data from server
  const response = await fetch("/form/data");
  const json = await response.json();
  console.log(json);

  //Apply json data to respective DOM elements
  formName.textContent = json["name-input"];
  formEmail.textContent = json["email-input"];
  formIssue.textContent = json["issues-input"] + ":";
  formIssue.style.textTransform = "capitalize";
  formComment.textContent = json["comments-input"];
}
