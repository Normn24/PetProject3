const listNumber = document.querySelectorAll(".whatDo__list li h6");

listNumber.forEach((n, index) => {
  n.setAttribute('data-before', "0" + (index + 1));
})


function borderList() {
  const listLine = document.querySelectorAll(".clients__list li");
  listLine.forEach((element, index) => {
    if (window.innerWidth > 1600) {
      if (index !== 5) {
        element.style.borderBottom = "none";
      }
      if (index <= 2) {
        element.style.borderBottom = "1px solid #000";
      }

      if (index == 1 || index == 4) {
        element.style.borderRight = "1px solid  #000";
        element.style.borderLeft = "1px solid #000";
      }
    } else {
      if (index <= 2) {
        element.style.borderBottom = "none";
      }
      if (index == 1 || index == 4) {
        element.style.borderRight = "none";
        element.style.borderLeft = "none";
      }
      if (index !== 5) {
        element.style.borderBottom = "1px solid #000";
      }
    }

  });
}
borderList();

document.onload = borderList;
window.onresize = borderList;
