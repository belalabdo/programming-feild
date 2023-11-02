let dropdown = document.getElementById("dropdown");
let dropdownMenu = document.getElementById("dropdownMenu");
let dropdownMenuActivated = 0;

dropdown.addEventListener("click", function () {
  if (dropdownMenuActivated == 1) {
    dropdownMenuActivated = 0;
    changeDropDwonStatue(0);
  } else {
    dropdownMenuActivated = 1;
    changeDropDwonStatue(1);
  }
});

function changeDropDwonStatue(bool) {
  dropdownMenu.style = `
    opacity : ${bool};
    top: ${bool ? "100%" : "250%"};
  `;
}
