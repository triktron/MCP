window.generateTile = function(cover, title, artist) {
  var con = document.createElement("div");
  var coverCon = document.createElement("div");
  var text = document.createElement("div");
  var titleCon = document.createElement("b");
  var artistCon = document.createElement("small");
  con.classList.add("tile");
  coverCon.classList.add("cover");
  text.classList.add("text");
  coverCon.style["background-image"] = 'url("' + cover + '")';
  titleCon.innerText = title;
  artistCon.innerText = artist;
  con.appendChild(coverCon);
  con.appendChild(text);
  text.appendChild(titleCon);
  text.appendChild(document.createElement("br"))
  text.appendChild(artistCon);

  return con
}
