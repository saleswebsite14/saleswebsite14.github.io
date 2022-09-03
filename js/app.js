

// addpanel


function visibility(){
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const form = document.getElementById('form');

        if (form.style.display === 'block') { 
           form.style.display = 'none';
        } else {
           form.style.display = 'block';
        }
    });

    btn.addEventListener('click', () => {
        const form = document.getElementById('form1');

        if (form1.style.display === 'block') { 
           form1.style.display = 'none';
        } else {
           form1.style.display = 'block';
        }
    });

    btn.addEventListener('click', () => {
        const form2 = document.getElementById('form2');

        if (form2.style.display === 'block') { 
           form2.style.display = 'none';
        } else {
           form2.style.display = 'block';
        }
    });

}



function add(){
  var pname = document.getElementById("pname").value;
  // var pid = document.getElementById("pid").value;
  var pabout = document.getElementById("pabout").value;
  var pprice = document.getElementById("pprice").value;
  var plink = document.getElementById("plink").value;
  
            var url = document.getElementById("plink").value;
            var Urldrive = "https://drive.google.com/file/d/";
            var Urldrivelength = Urldrive.length;
            var newUrlWithoutHead = url.slice(Urldrivelength,url.length);
            var Urlhead = "http://drive.google.com/uc?export=view&id=";
            var newUrlWithEnd = Urlhead.concat(newUrlWithoutHead);

            var computer = newUrlWithEnd.includes("/view?usp=sharing");//17
            var phone = newUrlWithEnd.includes("/view?usp=drivesdk");//18

            var computerUrlLength = newUrlWithEnd.length-17;
            var phoneUrlLength = newUrlWithEnd.length-18;
            
            var computerNewUrl = newUrlWithEnd.slice(0,computerUrlLength);
            var phoneNewUrl = newUrlWithEnd.slice(0,phoneUrlLength);

            if(computer){
                var inf = computerNewUrl;
            }
            else if(phone){
                var inf = phoneNewUrl;
            }
            else{
                alert("Url isn't true!");
            }

             

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

