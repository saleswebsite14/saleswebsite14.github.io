function addbasketproduct(){
    let name = document.getElementsByClassName("card_title").value;
    let about = document.getElementsByClassName("card_text").value;
    let price = document.getElementsByClassName("card_text_for_price").value;
    let image = document.getElementsByClassName("image").value;
    console.log(name);
    console.log(about);
    console.log(price);
    console.log(image);


    // const store = new SteinStore(
    //     "https://api.steinhq.com/v1/storages/630db53abc148508ba8a6c62/basket"
    // );

    // store
    // .append("basket", [
    //   {
    //    name: name,
    //    about: about,
    //    price: price,
    //    foto: image
    //   }
    // ])
    // .then(res => {
    //     alert("added succesfully");
    //   console.log(res);
    // });
}