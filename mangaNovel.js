var manga = {
  "Manga-Dan-Novel": [
    {
      nama: "One Piece",
      image: "assets/manga1.jpeg",
      desc: "Manga one piece yang tidak tamat",
      harga: "Rp. 150.000",
    },
    {
      nama: "Tokyo revenger",
      image: "assets/manga2.jpg",
      desc: "Manga tawuran tokyo revenger",
      harga: "Rp. 150.000",
    },
    {
      nama: "One puchman",
      image: "assets/manga3.png",
      desc: "Pahlawan botak, One hit one kill",
      harga: "Rp. 150.000",
    },
    {
      nama: "Black clover",
      image: "assets/manga4.jpg",
      desc: "Penyihir yang tidak punya sihir",
      harga: "Rp. 150.000",
    },
  ],
};

for (var key in manga) {
  var judul = document.createElement("h2");
  judul.className = "my-3 mx-3";
  judul.innerHTML = key;
  document.getElementById(key).appendChild(judul);

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  cardGroup.id = `${key}-manga`;
  document.getElementById(key).appendChild(cardGroup);

  var row = document.createElement("div");
  row.className = "row";
  row.id = `${key}-manga`;
  document.getElementById(key).appendChild(row);

  for (var i = 0; i < manga[key].length; i++) {
    var namaManga = manga[key][i].nama;
    var imageManga = manga[key][i].image;
    var descManga = manga[key][i].desc;
    var hargaManga = manga[key][i].harga;

    var col = document.createElement("div");
    col.className = "col col-md-3";
    col.innerHTML = `
      <div class="card mx-2 my-3 bg-dark">
      <img
        src="${imageManga}"
          class="card-img-top"
          alt="..."
          width="150"
          height="150"
          />
          <div class="card-body">
            <h5 class="card-title">${namaManga}</h5>
            <p class="card-text">${descManga}</p>
            <p class="card-text">${hargaManga}</p>
            <a onclick="chatToAdmin('${namaManga}','${descManga}','${hargaManga}')" class="btn btn-outline-secondary text-light d-block">Beli Produk</a>
          </div>
      </div>`;
    document.getElementById(`${key}-manga`).appendChild(col);
  }
}

chatToAdmin = (nama, desc, harga) => {
  var noHp = "+6287736688869";
  window.open(
    `https://api.whatsapp.com/send?phone=${noHp}?&text=nama-produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0A%0AThanks%20BRO!`
  );
};
