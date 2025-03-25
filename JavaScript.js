document.addEventListener("DOMContentLoaded", function () {
  // Example: Change the headline color on click (just to demonstrate JS functionality)
  const headline = document.getElementById("head-line");
  if (headline) {
    headline.addEventListener("click", function () {
      if (headline.style.color === "blue") {
        headline.style.color = "black";
      } else {
        headline.style.color = "blue";
      }
    });
  }

  const summarySection = document.querySelector(".summary");
  if (summarySection) {
    summarySection.addEventListener("mouseover", function () {
      summarySection.classList.add("summary-hover");
    });

    summarySection.addEventListener("mouseout", function () {
      summarySection.classList.remove("summary-hover");
    });
  }

  // Example: Add a simple console log for each image loaded.
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", () => {
      console.log(`Image loaded: ${img.src}`);
    });
  });

  const footer = document.querySelector("footer");
  if (footer) {
    const currentYear = new Date().getFullYear();
    const referenceText = footer.innerHTML;
    footer.innerHTML = referenceText + `<p>Current Year: ${currentYear}</p>`;
  }

  const listItems = document.querySelectorAll("ol li");
  if (listItems) {
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(`Clicked: ${item.textContent}`);
        item.style.backgroundColor = "lightyellow";
        setTimeout(() => {
          item.style.backgroundColor = "";
        }, 1000);
      });
    });
  }

  window.scrollTo(0, 0);
});
