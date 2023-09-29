import { quotes } from "./speed_typing_factory.js";
let display_quote = document.getElementsByClassName("display_quote")[0];
let input_quote = document.getElementsByClassName("input_quote")[0];
let quote_display = () => {
  let index = Math.floor(Math.random() * quotes.length);
  let choosen_quote = quotes[index];
  choosen_quote = Array.from(choosen_quote);
  for (let i = 0; i < choosen_quote.length; i++) {
    let character = choosen_quote[i];
    let span_element = `<span>${character}</span>`;
    display_quote.innerHTML = display_quote.innerHTML + span_element;
  }
};

input_quote.addEventListener("input", () => {
  let quote_displayed = display_quote.querySelectorAll("span");
  quote_displayed = Array.from(quote_displayed);
  let quote_inputed = input_quote.value;
  quote_inputed = Array.from(quote_inputed);
  let correct = true;
  for (let i = 0; i < quote_displayed.length; i++) {
    let quote_displayed_character_span = quote_displayed[i];
    let quote_displayed_character = quote_displayed_character_span.innerHTML;
    let input_character = quote_inputed[i];
    if (input_character == quote_displayed_character) {
      quote_displayed_character_span.classList.add("correct");
      quote_displayed_character_span.classList.remove("incorrect");
    } else if (input_character == null) {
      quote_displayed_character_span.classList.remove("correct");
      quote_displayed_character_span.classList.remove("incorrect");
      correct = false;
    } else {
      quote_displayed_character_span.classList.remove("correct");
      quote_displayed_character_span.classList.add("incorrect");
      correct = false;
    }
  }
  if (correct == true) {
    display_quote.innerHTML = "";
    input_quote.value = "";
    let score = timer_div.innerHTML;
    let score_list = `<li>${score}</li>`;
    let score_list_selector = document.getElementsByClassName("score_list")[0];
    score_list_selector.innerHTML = score_list_selector.innerHTML + score_list;
    quote_display();
    time_seter();
  }
});

quote_display();

let timer_div = document.getElementsByClassName("timer")[0];
let time;
let time_seter = () => {
  time = new Date();
  timer_div.innerHTML = 0;
  setInterval(() => {
    timer_div.innerHTML = get_time();
  }, 1000);
};
let get_time = () => {
  let counted_time = Math.floor((new Date() - time) / 1000);
  return counted_time;
};
time_seter();
