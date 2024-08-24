function New() {
  let x = document.getElementById("img");
  if ((x.src = "./assets/ab_1.jpg")) {
    x.src = "./assets/ab_2.jpg";
  }
}

function old() {
  let x = document.getElementById("img");
  if ((x.src = "./assets/ab_2.jpg")) {
    x.src = "./assets/ab_1.jpg";
  }
}

function hide() {
  let x = document.getElementById("img");
  x.style.visibility = 'hidden';
}

function show() {
    let x = document.getElementById("img");
    x.style.visibility = 'visible';
  }