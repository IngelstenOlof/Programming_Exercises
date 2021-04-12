postForm();
async function postForm() {
  const formName = document.getElementById("name");
  const formEmail = document.getElementById("email");
  const formIssue = document.getElementById("issue");
  const formComment = document.getElementById("comment");

  const response = await fetch("/form/data");
  const json = await response.json();
  console.log(json);

  formName.textContent = json["name-input"];
  formEmail.textContent = json["email-input"];
  formIssue.textContent = json["issues-input"] + ":";
  formIssue.style.textTransform = "capitalize";
  formComment.textContent = json["comments-input"];
}
