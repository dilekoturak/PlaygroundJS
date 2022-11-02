// Object property shorthand

const name = 'Dilek';
const age = 29;

const user = {
    name,
    age,
    location: 'Izmir'
}

console.log(user);

// Object destructuring

const product = {
    name: 'Lip Stick',
    category: 12000,
    price: 50
}

// const price = product.price;
// const category = product.category;

// ES6
// const {price: productPrice, category} = product;

// console.log(productPrice);
// console.log(category);

const transaction = (type, {name, category}) => {
    console.log(type, name, category);
}

transaction('order', product);