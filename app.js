// imgdown
var product_id = 1;

var control_panel_give_product_id = product_id.toString();


    const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6303152abc148508ba88c27b"
  );

 
  product_id = 3;
  var control_panel_give_product_id = product_id.toString();

  store.read("sekil", { search: {id: control_panel_give_product_id} }).then(data => {
    document.getElementById("name2").innerHTML = data[0].name;
    document.getElementById("about2").innerHTML = data[0].about;
    document.getElementById("price2").innerHTML = data[0].price;
    document.getElementById("foto2").src = data[0].foto;
  });
// imgupload

function add(){
  var pname = document.getElementById("pname").value;
  var pid = document.getElementById("pid").value;
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
          id: pid,
          name: pname,
          about: pabout,
          price: pprice,
          foto: inf
        }
      ])
      .then(res => {
        console.log(res);
      });
  }



  
  // https://docs.google.com/spreadsheets/d/1ZQdFgGmJmySuxv3WrWeT8brMYOLsT8HmGmxZqPb29RI/edit#gid=0/