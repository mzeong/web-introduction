const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const checkboxes = document.querySelectorAll(".checkbox:checked");
  alert(`${name}님, 저와 ${checkboxes.length}개의 취향이 같으시네요!`);
});

const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
  const name = document.getElementById("name");
  const checkboxes = document.querySelectorAll(".checkbox");
  name.value = "";
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
});
