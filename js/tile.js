window.generateTile = function(cover, title, artist) {
  var con = document.createElement("div");
  var coverCon = document.createElement("img");
  var text = document.createElement("div");
  var titleCon = document.createElement("b");
  var artistCon = document.createElement("small");
  con.classList.add("tile");
  coverCon.classList.add("cover");
  text.classList.add("text");
  coverCon.src = cover;
  titleCon.innerText = title;
  artistCon.innerText = artist;
  con.appendChild(coverCon);
  con.appendChild(text);
  text.appendChild(titleCon);
  text.appendChild(document.createElement("br"))
  text.appendChild(artistCon);

  return con
}

window.adaptiveSize = function adaptiveSize(opts) {
  this.defaultWith = 152;
  this.container = opts.container;

  this.isNeeded = function() {
    var total = this.defaultWith*this.container.children.length;
    return total > this.container.getBoundingClientRect().width;
  }

  this.update = function() {
    if (!this.isNeeded()) return this.applyWidth(this.defaultWith);
    var containerWidth = this.container.getBoundingClientRect().width;
    var remainder = containerWidth % this.defaultWith;
    var perRow = (containerWidth - remainder)/this.defaultWith;
    var newSize = (containerWidth - 8) / perRow// this.defaultWith + (remainder / perRow);
    console.log(containerWidth,remainder,perRow,newSize)
    this.applyWidth(newSize)
  }

  this.applyWidth = function(width) {
    var height = ((width - 12) * 37 / 28) + "px";
    var width = (width - 12) + "px";
    for (var i of this.container.children) {
      i.style.width = width;
      i.style.height = height;
    }
  }
  this.update();
}
