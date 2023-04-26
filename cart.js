function productDetails(){

    let ab="<h2>Your Cart list</h2> <form class='login-form'>  <div class='cart control largee'>    <textarea id='product1' cols='30' rows='10'></textarea>  <div class='strength' id='strength'></div>   <button class='control1 ' onclick='productDetails1()' type='button'>Purchase List</button>  </form>"
    document.getElementById("div2").innerHTML=ab;
   
    // let option = document.createElement("option");
    // option.product = product;
    // let list = document.getElementById("list");
    // list.add(option);
      let product = document.getElementById("input").value;
     
    
       document.getElementById("product1").value = product;
      // document.getElementById("product2").value = product;
      // document.getElementById("product3").value = product;
      // document.getElementById("product4").value = product;
      // document.getElementById("product5").value = product;

    }
    function productDetails1(){
    
        let cd="<div class='div3 col-lg-4' ><div class='card' style='width: 18rem;'>    <img src='https://www.dslr-zone.com/wp-content/uploads/2021/10/4-1-768x768.jpeg' class='card-img-top' alt='...'>    <div class='card-body'>     <h5 class='card-title'>i phone</h5>   <p class='card-text'>bout this item     15 cm (6.1-inch) Super Retina XDR display     Cinematic mode adds shallow depth of field and shifts focus automatically in your videos     Advanced dual-camera system with 12MP Wide and Ultra Wide cameras</p><a href='#' class='btn btn-primary'>Buy Now</a></div></div></div><div class='div3 col-lg-4' id='div3'><div class='card' style='width: 18rem;'><img src='https://www.dslr-zone.com/wp-content/uploads/2021/10/4-1-768x768.jpeg' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>i phone</h5><p class='card-text'>bout this item15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videosAdvanced dual-camera system with 12MP Wide and Ultra Wide cameras</p><a href='#' class='btn btn-primary'>Buy Now</a>  </div></div> </div><div class='div3 col-lg-4' id='div3'><div class='card' style='width: 18rem;'><img src='https://www.dslr-zone.com/wp-content/uploads/2021/10/4-1-768x768.jpeg' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>i phone</h5><p class='card-text'>bout this item15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds shallow depth of field and shifts focus automatically in your videosAdvanced dual-camera system with 12MP Wide and Ultra Wide cameras</p> <a href='#' class='btn btn-primary'>Buy Now</a> </div> </div></div>"
        document.getElementById("div3").innerHTML=cd;
        let product1 = document.getElementById("product1").value;
    
        document.getElementById("product1cart").value = product1;
        // document.getElementById("product2cart").value = product1;
        // document.getElementById("product3cart").value = product1;
        // document.getElementById("product4cart").value = product1;
        // document.getElementById("product5cart").value = product1;
    }
