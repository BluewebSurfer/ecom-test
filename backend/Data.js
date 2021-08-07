import bcrypt from "bcryptjs";


const Data = {
  users: [
    {
      name: "Rahul",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "KDS",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ], 
  products: [
    {
      
      name: "Nike",
      category: "Shirts",
      image: "/images/m1.jpg",
      price: 120,
      countInStock: 12,
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Adidas",
      category: "Pants",
      image: "/images/m2.jpg",
      price: 160,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.1,
      numReviews: 17,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Medicine",
      image: "/images/m3.jpg",
      price: 170,
      countInStock: 10,
      brand: "Medicine",
      rating: 4.1,
      numReviews: 12,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Medicine",
      image: "/images/m1.jpg",
      price: 220,
      countInStock: 5,
      brand: "HRX",
      rating: 4.9,
      numReviews: 25,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Medicine",
      image: "/images/m2.jpg",
      price: 140,
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Medicine", 
      image: "/images/m3.jpg",
      price: 130,
      countInStock: 5,
      brand: "Nike",
      rating: 3.0,
      numReviews: 32,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Shirts",
      image: "/images/m1.jpg",
      price: 132,
      countInStock: 5,
      brand: "Nike",
      rating: 4.1,
      numReviews: 32,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Shirts",
      image: "/images/m2.jpg",
      price: 170,
      countInStock: 22,
      brand: "Nike",
      rating: 3.0,
      numReviews: 32,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Shirts",
      image: "/images/m3.jpg",
      price: 140,
      countInStock: 14,
      brand: "Nike",
      rating: 3.0,
      numReviews: 32,
      description: "high quality product",
    },
    {
      
      name: "Medicine",
      category: "Shirts",
      image: "/images/m1.jpg",
      price: 180,
      countInStock: 34,
      brand: "Nike", 
      rating: 4.0,
      numReviews: 22,
      description: "high quality product",
    },
  ],
};
export default Data;
