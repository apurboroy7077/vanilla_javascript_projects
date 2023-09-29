let enter_buttons = document.getElementsByClassName("fa-power-off");
enter_buttons = Array.from(enter_buttons);
for (let i = 0; i < enter_buttons.length; i++) {
  let enter_button = enter_buttons[i];
  enter_button.addEventListener("click", () => {
    let input = enter_button.previousElementSibling;
    let current_div = enter_button.parentElement;
    let next_div = current_div.nextElementSibling;
    if (validate(input)) {
      current_div.classList.add("inactive");
      next_div.classList.remove("inactive");
      ok();
    } else {
      not_ok(current_div);
    }
  });
}
let validate = (input) => {
  if (input.placeholder == "Username" && input.value.length > 6) {
    return true;
  } else if (input.placeholder == "Password" && input.value.length > 6) {
    return true;
  } else if (input.placeholder == "Email") {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(input.value) == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
let not_ok = (current_div) => {
  let container = document.getElementsByClassName("container")[0];
  container.style.backgroundColor = "red";
  current_div.style.animation = "shake_effect 0.2s ease";
  current_div.addEventListener("animationend", () => {
    current_div.style.animation = "";
  });
};
let ok = () => {
  let container = document.getElementsByClassName("container")[0];
  container.style.backgroundColor = "lawngreen";
};
