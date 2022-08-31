function signin(){
    let usname = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;


    const store = new SteinStore(
        "https://api.steinhq.com/v1/storages/628dea4b4906bb0537479349"
    );
/* data = [{
name: john,
pass: 1234
}] 
*/

    
    if(usname != "" && pass != ""){
       store.read("register", { search: { name: usname } }  ).then(data => {
            let result = data[0].name;
            let res = data[0].password;
           
            if(res == pass && result == usname){ 
                alert("you can entered succesfully!");
                window.open("home.html","_self");
            }
            if(res != pass && result == usname){
                document.getElementById("txtmsg").innerHTML = "Wrong password";
            }
        });  
    
   
        

        store.read("register", { search: { password: pass } }  ).then(data => {
            let result = data[0].name;
            let res = data[0].password;

            if(res == pass && result != usname){
                document.getElementById("txtmsg1").innerHTML = "Wrong username";
            }
            if(res == pass){
                document.getElementById("hiddenpassword").innerHTML = "true";
            }
            else{
                console.log("false");
            }
    
        });
    }
        
}

function boxcontain(){

    let usname = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    
    if(usname == ""){
        document.getElementById("txtmsg1").innerHTML = "Please,write everybox";
     }
     else{
         document.getElementById("txtmsg1").innerHTML = "";
     }
     if(pass == ""){
   document.getElementById("txtmsg").innerHTML = "Please,write everybox";
     }
     else{
         document.getElementById("txtmsg").innerHTML = "";
     }
}
