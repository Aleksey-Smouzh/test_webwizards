const form = document.querySelector("#contact-form");
const popupModal = document.querySelector(".popup__bg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements["name"].value;
  const surname = form.elements["surname"].value;
  const email = form.elements["email"].value;
  const agree = form.elements["agreed"].checked;

  const response = { name, surname, email, agree };

  e.target.reset();

  console.log(JSON.stringify(response));

  popupModal.classList.remove("active");
});
