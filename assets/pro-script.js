// For All Products

document.addEventListener("DOMContentLoaded", function () {
  // Get the productID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get("productID");

  // Your product data (replace with your data)
  const products = [
    {
      id: "1",
      name: "Men's Fashion T-Shirt",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 140,
      imageUrl: "assets/images/products/f1.jpg",
      sImageUrl1: "assets/images/products/f1.jpg",
      sImageUrl2: "assets/images/products/f2.jpg",
      sImageUrl3: "assets/images/products/f3.jpg",
      sImageUrl4: "assets/images/products/f4.jpg",
    },
    {
      id: "2",
      name: "Cartoon Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 139,
      imageUrl: "assets/images/products/f2.jpg",
      sImageUrl1: "assets/images/products/f1.jpg",
      sImageUrl2: "assets/images/products/f2.jpg",
      sImageUrl3: "assets/images/products/f3.jpg",
      sImageUrl4: "assets/images/products/f4.jpg",
    },
    {
      id: "3",
      name: "Great Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 145,
      imageUrl: "assets/images/products/f3.jpg",
      sImageUrl1: "assets/images/products/f1.jpg",
      sImageUrl2: "assets/images/products/f2.jpg",
      sImageUrl3: "assets/images/products/f3.jpg",
      sImageUrl4: "assets/images/products/f4.jpg",
    },
    {
      id: "4",
      name: "Men's Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 155,
      imageUrl: "assets/images/products/f4.jpg",
      sImageUrl1: "assets/images/products/f1.jpg",
      sImageUrl2: "assets/images/products/f2.jpg",
      sImageUrl3: "assets/images/products/f3.jpg",
      sImageUrl4: "assets/images/products/f4.jpg",
    },
    {
      id: "9",
      name: "Great Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 155,
      imageUrl: "assets/images/products/n1.jpg",
      sImageUrl1: "assets/images/products/n1.jpg",
      sImageUrl2: "assets/images/products/n2.jpg",
      sImageUrl3: "assets/images/products/n3.jpg",
      sImageUrl4: "assets/images/products/n4.jpg",
    },
    {
      id: "10",
      name: "Great Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 155,
      imageUrl: "assets/images/products/n2.jpg",
      sImageUrl1: "assets/images/products/n1.jpg",
      sImageUrl2: "assets/images/products/n2.jpg",
      sImageUrl3: "assets/images/products/n3.jpg",
      sImageUrl4: "assets/images/products/n4.jpg",
    },
    {
      id: "11",
      name: "Great Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 155,
      imageUrl: "assets/images/products/n3.jpg",
      sImageUrl1: "assets/images/products/n1.jpg",
      sImageUrl2: "assets/images/products/n2.jpg",
      sImageUrl3: "assets/images/products/n3.jpg",
      sImageUrl4: "assets/images/products/n4.jpg",
    },
    {
      id: "12",
      name: "Great Astronaut T-Shirts",
      description: `
          The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per centsq. yd. fabric constructed from 100% cotton, 
          this classic fit preshunk jersey knit provides unmatched comfort with each wear. 
          Featuring a taped neck and shoulder, and a seamless double-needle collar, 
          and available in a range of colors, it offers it all in the ultimate head-turning package.`,
      price: 155,
      imageUrl: "assets/images/products/n4.jpg",
      sImageUrl1: "assets/images/products/n1.jpg",
      sImageUrl2: "assets/images/products/n2.jpg",
      sImageUrl3: "assets/images/products/n3.jpg",
      sImageUrl4: "assets/images/products/n4.jpg",
    },
    // Add more products as needed
  ];

  // Find the product with the matching productID
  const product = products.find((p) => p.id === productID);

  if (product) {
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
    const productPrice = document.getElementById("productPrice");
    const productImage = document.getElementById("MainImg");

    const productSmallImages = document.getElementsByClassName("small-img");
    for (let i = 0; i < productSmallImages.length; i++) {
      productSmallImages[i].src = product["sImageUrl" + (i + 1)];
    }

    productImage.src = product.imageUrl;
    productPrice.textContent = "$" + product.price.toFixed(2);
    productName.textContent = product.name;
    productDescription.textContent = product.description;
  }
});
