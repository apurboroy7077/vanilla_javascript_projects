let buttons = document.getElementsByClassName("button");
let array_of_buttons = Array.from(buttons);
let input_value = "";
let input = document.getElementsByClassName("input")[0];
array_of_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    try {
      let clicked_button = button.innerHTML;
      if (clicked_button == "=") {
        input_value = input_value.toString();
        input_value = eval(input_value);
        input.value = input_value;
      } else if (clicked_button == "AC") {
        input_value = "";
        input.value = input_value;
      } else if (clicked_button == "DC") {
        input_value = input_value.toString();
        input_value = input_value.slice(0, -1);
        input.value = input_value;
      } else {
        input_value = input_value + clicked_button;
        input.value = input_value;
      }
    } catch (error) {
      console.log(error);
      input.value = "Invalid Input";
    }
  });
});
