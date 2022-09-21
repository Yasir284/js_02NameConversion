// Adding Event listner
let convertBtn = document.querySelector("#convert-btn");
convertBtn.addEventListener("click", getConversion);

function getConversion() {
  let content = document.querySelector("#text").value;
  document.querySelector("#camel-case").textContent = camelCase(content);
  document.querySelector("#pascal-case").textContent = pascalCase(content);
  document.querySelector("#snake-case").textContent = snakeCase(content);
  document.querySelector("#screaming-snake-case").textContent =
    screamingSnakeCase(content);
  document.querySelector("#kebab-case").textContent = kebabCase(content);
  document.querySelector("#screaming-kebab-case").textContent =
    screamingKebabCase(content);
}

function textSplit(text) {
  let textChange = text.split(" ");
  if (textChange.length > 1)
    textChange = textChange.map((element) => element.toLowerCase());
  let textFilter = textChange.filter((value) => value !== "");
  return textFilter;
}

// Function to convert into camelCase
function camelCase(text) {
  let textFilter = textSplit(text);
  let camelCase = textFilter[0];
  for (i = 1; i < textFilter.length; i++) {
    let element = textFilter[i].split("");
    let findIndex = element.findIndex((e) => isNaN(e));
    element[findIndex] = element[findIndex].toUpperCase();
    camelCase += element.join("");
  }
  return camelCase;
}

// Function to convert into PascalCase
function pascalCase(text) {
  let textFilter = textSplit(text);
  let pascalCase = "";
  for (i = 0; i < textFilter.length; i++) {
    let element = textFilter[i].split("");
    let findIndex = element.findIndex((e) => isNaN(e));
    element[findIndex] = element[findIndex].toUpperCase();
    pascalCase += element.join("");
  }
  return pascalCase;
}

// Function to convert into snake_case
function snakeCase(text) {
  return textSplit(text).join("_");
}

// Function to convert into SCREAMING_SNAKE_CASE
function screamingSnakeCase(text) {
  let textChange = text.toUpperCase().split(" ");
  let textFilter = textChange.filter((value) => {
    if (value !== "") {
      return value;
    }
  });
  let screamingSnakeCase = textFilter.join("_");
  return screamingSnakeCase;
}

// Function to convert into kebab-case
function kebabCase(text) {
  let textChange = textSplit(text);
  let textFilter = textChange.filter((value) => {
    if (value !== "") {
      return value;
    }
  });
  let kebabCase = textFilter.join("-");
  return kebabCase;
}

// Function to convert into SCREAMING-KEBAB-CASE
function screamingKebabCase(text) {
  let textChange = text.toUpperCase().split(" ");
  let textFilter = textChange.filter((value) => {
    if (value !== "") {
      return value;
    }
  });
  let screamingKebabCase = textFilter.join("-");
  return screamingKebabCase;
}
