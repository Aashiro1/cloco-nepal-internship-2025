var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
  var resultDiv = document.createElement("div");
  resultDiv.textContent = add(+input1.value, +input2.value);
  document.body.appendChild(resultDiv);
});

bro = 'JS is FUNNNNN'
if(bro = 'JS is boring af')
    console.log(bro)

else
    console.log("nahh bro", bro)