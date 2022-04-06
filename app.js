const giveMeanJoke = document.querySelector('button')
const joke = document.getElementById('joke');
const name = document.querySelector('#name');
const lastName = document.querySelector('#last-name');
const products = document.querySelector('#products');
// giveMeanJoke.addEventListener('click', () => {
//   fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err.message));
// })

giveMeanJoke.addEventListener('click', () => {
  // fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(data => joke.innerHTML = data.value).catch(err => console.log(err.message));
  betterCallToApi()
})

const betterCallToApi = async () => {
  try {
    const fullName = name.value + " " + lastName.value;
    if(fullName === ' ') {
      fullName = 'Chuck Noris';
    }
    console.log(fullName);
    const req = await fetch(`https://api.chucknorris.io/jokes/random?name=${fullName}`);
  const data = await req.json();
  joke.innerHTML = data.value;
  }catch(err) {
    console.log(err.message)
  }
}
const getAllProducts = async() => {
  const req = await fetch('https://fakestoreapi.com/products');
  const data = await req.json();
  console.log(data);
  data.forEach(product => {
    console.log(product)
    const newProduct = document.createElement('div');
    const title = document.createElement('h4');
    const image = document.createElement('img')
    const description = document.createElement('p');
    const price = document.createElement('p');
    const rate = document.createElement('p');
    description.innerHTML = product.description;
    description.style.width = '250px'
    price.innerHTML = '$' + product.price;
    rate.innerHTML = 'rate: ' + product.rating.rate;
    image.src = product.image;
    image.style.width = '150px';
    title.innerHTML = product.title;
    newProduct.append(image);
    newProduct.append(title);
    products.append(newProduct);
    products.append(description);
    products.append(price);
    products.append(rate);
    products.classList.add("container_products");
    newProduct.classList.add("container_product--product");
  });
}
getAllProducts();