var products = {
  "Action-Figure": [
    {
      nama: "Rikka Takanashi",
      image: "assets/produk1.jpg",
      desc: "waifu asa fajar, rikka takanashi dari anime chuninbyou",
      harga: "Rp. 100.000",
    },
    {
      nama: "Roronoa Zoro",
      image: "assets/produk2.jpg",
      desc: "Rorono zoro dari anime one piece,",
      harga: "Rp. 120.000",
    },
    {
      nama: "Uzumaki Naruto",
      image: "assets/produk3.jpg",
      desc: "Uzumaki Naruto, Hokage ke 7 konoha",
      harga: "Rp. 150.000",
    },
    {
      nama: "Todoroki Shoto",
      image: "assets/produk4.jpg",
      desc: "Todoroki Shoto dari anime My hero academy",
      harga: "Rp. 130.000",
    },
  ],
};

for (var key in products) {
  var judul = document.createElement("h2");
  judul.className = "my-3 mx-3";
  judul.innerHTML = key;
  document.getElementById(key).appendChild(judul);

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  cardGroup.id = `${key}-product`;
  document.getElementById(key).appendChild(cardGroup);

  var row = document.createElement("div");
  row.className = "row";
  row.id = `${key}-product`;
  document.getElementById(key).appendChild(row);

  for (var i = 0; i < products[key].length; i++) {
    var namaProduct = products[key][i].nama;
    var imageProduct = products[key][i].image;
    var descProduct = products[key][i].desc;
    var hargaProduct = products[key][i].harga;

    var col = document.createElement("div");
    col.className = "col col-md-3";
    col.innerHTML = `
      <div class="card mx-2 my-3 bg-dark">
      <img
        src="${imageProduct}"
          class="card-img-top"
          alt="..."
          width="150"
          height="150"
          />
          <div class="card-body">
            <h5 class="card-title">${namaProduct}</h5>
            <p class="card-text">${descProduct}</p>
            <p class="card-text">${hargaProduct}</p>
            <a onclick="chatToAdmin('${namaProduct}','${descProduct}','${hargaProduct}')" class="btn btn-outline-secondary text-light d-block">Beli Produk</a>
          </div>
      </div>`;
    document.getElementById(`${key}-product`).appendChild(col);
  }
}

function chatToAdmin(nama, desc, harga) {
  var noHp = "+6287736688869";
  window.open(
    `https://api.whatsapp.com/send?phone=${noHp}?&text=nama-produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0A%0AThanks%20BRO!`
  );
}
