var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599
  };
  //Main Container
  var mainContainer = document.getElementById("main-container");
  //left column
  var leftColumn = document.createElement("div");
  leftColumn.className = "left-column";
  mainContainer.append(leftColumn);
  
  //right column
  var rightColumn = document.createElement("div");
  rightColumn.className = "right-column";
  
  //Product description wrapper
  var productDescription = document.createElement("div");
  productDescription.className = "product-description";
  
  //Product name
  var productName = document.createElement("h1");
  productName.id = "name";
  productName.innerHTML = productData.name;
  productDescription.appendChild(productName);
  
  //Product brand
  var productBrand = document.createElement("h4");
  productBrand.id = "brand";
  productBrand.innerHTML = productData.brand;
  productDescription.appendChild(productBrand);
  
  //Product price
  var productPrice = document.createElement("h3");
  var priceRsText = document.createTextNode("Price: Rs ");
  var productPriceSpan = document.createElement("span");
  productPriceSpan.id = "price";
  productPriceSpan.innerHTML = productData.price;
  productPrice.appendChild(priceRsText);
  productPrice.appendChild(productPriceSpan);
  productDescription.appendChild(productPrice);
  
  //Description
  var description = document.createElement("div");
  var descriptionHeading = document.createElement("h3");
  descriptionHeading.innerHTML = "Description";
  description.appendChild(descriptionHeading);
  
  var descText = document.createElement("p");
  descText.innerHTML = productData.description;
  description.appendChild(descText);
  productDescription.appendChild(description);
  
  //Product preview wrapper
  var productPreview = document.createElement("div");
  productPreview.className = "product-preview";
  
  var previewHeading = document.createElement("h3");
  previewHeading.innerHTML = "Product Preview";
  productPreview.appendChild(previewHeading);
  
  //Small Images wrapper or Preview images wrapper
  var previewImgWrapper = document.createElement("div");
  previewImgWrapper.className = "previewImg";
  productPreview.appendChild(previewImgWrapper);
  
  //Creating and appending small images/preview images
  for (var pos = 0; pos < productData.photos.length; pos++) {
    var smallImage = document.createElement("img");
    smallImage.id = "img" + pos;
    smallImage.className = "preview-images";
    smallImage.src = productData.photos[pos];
    previewImgWrapper.appendChild(smallImage);
  }
  productDescription.appendChild(productPreview);
  
  //add to cart button
  var buttonWrapper = document.createElement("div");
  buttonWrapper.className = "btn";
  var addToCartBtn = document.createElement("button");
  addToCartBtn.id = "add-to-cart";
  addToCartBtn.innerHTML = "Add to Cart";
  
  buttonWrapper.appendChild(addToCartBtn);
  rightColumn.appendChild(productDescription);
  rightColumn.appendChild(buttonWrapper);
  
  mainContainer.append(rightColumn);
  
  var firstImg = document.getElementById("img0");
  firstImg.classList.add("active");
  //Left Column's Product Image
  var productImg = document.createElement("img");
  productImg.id = "productImg";
  productImg.src = productData.preview;
  
  leftColumn.appendChild(productImg);
  
  //On click event listener
  var previewImages = document.getElementsByClassName("preview-images");
  
  for (var index = 0; index < previewImages.length; index++) {
    var image = previewImages[index];
    image.addEventListener("click", function (e) {
      productImg.src = e.target.currentSrc; //assigning selected img's url to product image
      var currentId = e.target.id; //storing selected img's id
      var currentImg = document.getElementById(currentId);
      currentImg.classList.add("active"); //adding active class to selected image
      for (var i = 0; i < previewImgWrapper.children.length; i++) {
        var id = previewImgWrapper.children[i].id;
        if (id !== currentId) {
          document.getElementById(id).classList.remove("active"); //removing active class from non selected images
        }
      }
    });
  }
  