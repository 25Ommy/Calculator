let num = document.querySelectorAll("li");
let results = document.querySelector(".result");
let dummy = document.querySelector(".dummy");

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    let getvalue = document.querySelector(".result");
    getvalue = getvalue.value;

    if (num[i].innerHTML == "=") {
      results.value = eval(results.value);
      results.style.color = "#212b3c";
    } else {
      if (num[i].innerHTML === "C") {
        results.value = "";
      } else {
        results.value += num[i].innerHTML;
        dummy.textContent += num[i].innerHTML;
      }
      if (num[i].innerHTML == "DEL") {
        results.value = getvalue.slice(0, -1);
        dummy.textContent = getvalue.slice(0, -1);
      }
    }
  });
}

document.addEventListener("keydown", (enter) => {
  num.forEach((Element) => {
    if (Element.textContent === enter.key) {
      results.value += Element.textContent;
      dummy.textContent += Element.textContent;
    } else if (enter.key == "Enter") {
      results.value = eval(results.value);
      results.style.color = "#212b3c";
    }
  });
});
