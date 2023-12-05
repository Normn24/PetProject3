const listNumber = document.querySelectorAll(".whatDo__list li h6");

listNumber.forEach((n, index) => {
  n.setAttribute('data-before', "0" + (index + 1));
})