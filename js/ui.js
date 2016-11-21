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
  document.querySelector(".volume-bnt").addEventListener('click', () => {
    document.querySelector(".volume").classList.toggle("open")
  });
  document.querySelector(".volume-bnt").addEventListener('mouseover', () => {
    document.querySelector(".volume").classList.add("open")
  });
  document.querySelector(".volume-bnt").addEventListener('mouseleave', (evt) => {
    if (!evt.relatedTarget.isSameNode(document.querySelector(".volume"))) document.querySelector(".volume").classList.remove("open")
  });
  document.querySelector(".volume").addEventListener('mouseleave', (evt) => {
    document.querySelector(".volume").classList.remove("open")
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
  addAlbums()
}

function addAlbums() {
  var albums = [{
  	u: "https://blobcache.monstercat.com/blobs/a644f19d49c40aad66be572337793318edc01b9f",
  	t: "Havoc",
  	a: "Monstercat"
  }, {
  	u: "https://blobcache.monstercat.com/blobs/179c8a9d294220d2ca9c6dcbdf4c3705abd15f8e",
  	t: "Killing giants",
  	a: "Puppet & Murtagh"
  }, {
  	u: "https://blobcache.monstercat.com/blobs/6a190fffcba6d34a715b6b9682904f3092a3f6f6",
  	t: "Rare",
  	a: "Going Quatum"
  }, {
  	u: "https://blobcache.monstercat.com/blobs/7216d3fbf1443a78dc8cee29d9a5dfa0cbbec7bf",
  	t: "Fight",
  	a: "Tokyo Machine"
  }];

  for (var i of albums) {
    document.querySelector(".dragend-page[panel=playlist]").appendChild(generateTile(i.u,i.t,i.a));
  }

  window.adpts = new adaptiveSize({
    container:document.querySelector(".dragend-page[panel=playlist]")
  })
  window.addEventListener('resize', function(event){
   adpts.update()
  });
  window.addEventListener("orientationchange", function() {
    console.log("orientationchange");
    setTimeout(function(){adpts.update()},300)
  });
}

window.addEventListener('load', init);
