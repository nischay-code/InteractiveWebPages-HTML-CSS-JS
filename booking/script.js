let no = document.querySelectorAll(".no");
let img = document.querySelector("img");
var a = 0;
for (let x = 0; x < no.length; x++) {
  function remove(a) {
    for (let y = 0; y < 10; y++) {
      if (y == a) {
        no[y].classList.add("selected");
      } else {
        no[y].classList.remove("selected");
      }
    }
  }
  no[x].addEventListener("click", () => {
    if (x == 0) {
      img.src = "./imgs/1.png";
      remove(x);
    } else if (x == 1) {
      img.src = "./imgs/2.png";
      remove(x);
    } else if (x == 2) {
      img.src = "./imgs/3.png";
      remove(x);
    } else if (x == 3) {
      img.src = "./imgs/4.png";
      remove(x);
    } else if (x == 4) {
      img.src = "./imgs/5.png";
      remove(x);
    } else if (x == 5) {
      img.src = "./imgs/5.png";
      remove(x);
    } else if (x == 6) {
      img.src = "./imgs/5.png";
      remove(x);
    } else if (x == 7) {
      img.src = "./imgs/6.png";
      remove(x);
    } else if (x == 8) {
      img.src = "./imgs/6.png";
      remove(x);
    } else if (x == 9) {
      img.src = "./imgs/6.png";
      remove(x);
    }
  });
  img.addEventListener("change", () => {});
}
