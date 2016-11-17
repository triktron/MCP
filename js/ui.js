function init() {
  document.querySelector(".menu").addEventListener('click', () => {
    if (!document.querySelector(".shadow").classList.contains("active")) document.querySelector(".shadow").classList.add("active")
    if (!document.querySelector(".nav").classList.contains("open")) document.querySelector(".nav").classList.add("open")
  });
  document.querySelector(".shadow").addEventListener('click', () => {
    if (document.querySelector(".shadow").classList.contains("active")) document.querySelector(".shadow").classList.remove("active")
    if (document.querySelector(".nav").classList.contains("open")) document.querySelector(".nav").classList.remove("open")
  });

  document.querySelector(".playlist-icon").addEventListener('click', () => {
    document.querySelector(".lower-part").classList.toggle("active")
  });

  function b(a,b) {
    b.style.top = (a.getBoundingClientRect().top + a.getBoundingClientRect().height) + "px"
    b.style.left = a.getBoundingClientRect().left + "px";
    b.style.width = a.getBoundingClientRect().width + "px";
  }

  document.querySelectorAll(".card").forEach((a => {
    a.addEventListener('click', () => {
      // makeActivePanel(card.getAttribute("card"))
      p.scrollToPage(Number(a.getAttribute("page")))
      b(a,document.querySelector(".active-card"));
    })
  }));

  window.p = new Dragend(document.querySelector(".panels"), {
    onSwipeEnd: function() {
      b(document.querySelectorAll(".card")[p.page],document.querySelector(".active-card"));
    }
  });
  b(document.querySelector(".card"),document.querySelector(".active-card"));
}

window.addEventListener('load', init);
