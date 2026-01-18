const form = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 画面リロード防止

  const name = nameInput.value;
  const age = Number(ageInput.value);

  if (!name) {
    message.textContent = "名前を入力してください";
    return;
  }

  if (age < 20) {
    message.textContent = `${name}さんは未成年です`;
  } else {
    message.textContent = `ようこそ ${name}さん`;
  }
});
