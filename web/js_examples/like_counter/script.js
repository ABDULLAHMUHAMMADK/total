function incr() {
  let x = document.getElementById("inc");
  let y = +x.textContent;
  y++;
  x.textContent = y;
}
function dec() {
  let x = document.getElementById("inc");
  let y = +x.textContent;
  y--;
  x.textContent = y;
}
function res() {
  let x = document.getElementById("inc");
  let y = +x.textContent;
  y=0;
  x.textContent = y;
}
