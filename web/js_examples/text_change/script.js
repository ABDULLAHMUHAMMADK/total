let x = document.getElementById("para");
let y = `orignal text: ${x.textContent}`;
x.textContent = y;
function get() {
  let x = document.getElementById("para");
  let y = document.getElementById("output");
  x = x.textContent;
  y.textContent = x;
}

function set() {
  let x = document.getElementById("para");
  let y = document.getElementById("output");
  let z = document.getElementById("text");
  let a = z.value;
  let c = x.textContent;
  x.textContent = a;

  if (a === "") {
    y.textContent = "enter string";
    x.textContent = c;
  }
}
