// imgdown

    const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
  )

// addpanel

function add(){
  var pname = document.getElementById("pname").value;
  // var pid = document.getElementById("pid").value;
  var pabout = document.getElementById("pabout").value;
  var pprice = document.getElementById("pprice").value;
  var plink = document.getElementById("plink").value;

  var link = plink.slice(32,plink.length);
  var text = "http://drive.google.com/uc?export=view&id=";
  var inf = text.concat(link);
  inf = inf.slice(0,inf.length-17);
  console.log(inf);

  const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
  );
  
  store.append("sekil", [
        {
          name: pname,
          about: pabout,
          price: pprice,
          foto: inf
        }
      ])
      .then(res => {
        console.log(res);
      })
      alert("Product succesfully added!");;
  }

function search(){
  var pname = document.getElementById("m_pname").value;
  // var pid = document.getElementById("pid").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store.read("sekil", { search: { name: pname , about: pabout , price: pprice} }).then(data => {
  alert("Product found!");
});
}

function delete_product(){
  var pname = document.getElementById("m_pname").value;
  // var pid = document.getElementById("pid").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store.delete("sekil", { search: { name: pname , about: pabout , price: pprice} }).then(data => {
  alert("Product is deleted!");
});
}

function modify_product_all(){
  var pname = document.getElementById("m_pname").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  var n_pname = document.getElementById("n_m_pname").value;
  var n_pabout = document.getElementById("n_m_pabout").value;
  var n_pprice = document.getElementById("n_m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store
    .edit("sekil", {
      search: { name: pname , about: pabout , price: pprice},
      set: { name: n_pname , about: n_pabout , price: n_pprice}
    })
    .then(res => {
      console.log(res);
      alert("succesfully change");
    });
}

function modify_product_name(){
  var pname = document.getElementById("m_pname").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  var n_pname = document.getElementById("n_m_pname").value;
  var n_pabout = document.getElementById("n_m_pabout").value;
  var n_pprice = document.getElementById("n_m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store
    .edit("sekil", {
      search: { name: pname , about: pabout , price: pprice},
      set: { name: n_pname }
    })
    .then(res => {
      console.log(res);
      alert("Succesfully change!");
    });

}

function modify_product_about(){
  var pname = document.getElementById("m_pname").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  var n_pname = document.getElementById("n_m_pname").value;
  var n_pabout = document.getElementById("n_m_pabout").value;
  var n_pprice = document.getElementById("n_m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store
    .edit("sekil", {
      search: { name: pname , about: pabout , price: pprice},
      set: { about: n_pabout }
    })
    .then(res => {
      console.log(res);
      alert("about succesfully change");
    });
    
}
function modify_product_price(){
  var pname = document.getElementById("m_pname").value;
  var pabout = document.getElementById("m_pabout").value;
  var pprice = document.getElementById("m_pprice").value;

  var n_pname = document.getElementById("n_m_pname").value;
  var n_pabout = document.getElementById("n_m_pabout").value;
  var n_pprice = document.getElementById("n_m_pprice").value;

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
);

store
    .edit("sekil", {
      search: { name: pname , about: pabout , price: pprice},
      set: { price: n_pprice }
    })
    .then(res => {
      console.log(res);
      alert("price succesfully change");
    });
    
}

  
  // https://docs.google.com/spreadsheets/d/1ZQdFgGmJmySuxv3WrWeT8brMYOLsT8HmGmxZqPb29RI/edit#gid=0/