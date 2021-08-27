const output = document.querySelector("#output");
const pass_length = document.querySelector(".pass-length");
const isLowercase = document.querySelector("#lowercase");
const isUppercase = document.querySelector("#uppercase");
const isNumbers = document.querySelector("#numbers");
const isSpecSyms = document.querySelector("#spec-symbols");

const button = document.querySelector(".button");
const copyBtn = document.querySelector(".copy");

const base = {
  wordsL: "abcdefghijklmnopqrstuvwxyz",
  wordsU: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  nums: "0123456789",
  specSyms: "`~!@#$%^&*()_'\"-+=№,.{}[]/|\\:;<>",
};

let totalArr = "";

const createPassword = () => {
  totalArr += isLowercase.checked ? base.wordsL : "";
  totalArr += isUppercase.checked ? base.wordsU : "";
  totalArr += isNumbers.checked ? base.nums : "";
  totalArr += isSpecSyms.checked ? base.specSyms : "";

  let ans = "";

  if (totalArr.length) {
    for (let i = 0; i < Number(pass_length.value); i++) {
      ans += totalArr[Math.floor(Math.random() * totalArr.length)];
    }
  } else ans = "Выбери один из параметров.";

  output.value = ans;

  totalArr = "";
};

const copyAns = () => {
  output.select();
  document.execCommand("copy");
  alert("Скопировано в буфер обмена");
};

pass_length.addEventListener("input", () => {
  document.querySelector(".value").innerHTML = pass_length.value;
});
copyBtn.addEventListener("click", copyAns);
button.addEventListener("click", createPassword);
