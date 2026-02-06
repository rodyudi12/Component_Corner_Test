import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import './App.css'
import HeadphoneImage from './assets/Headphone.jpg'
import SmartwatchImage from './assets/Smartwatch.jpg'
import SpeakerImage from './assets/Speaker.jpg'
import LaptopImage from './assets/Laptop.jpg'
import WebcamImage from './assets/Webcam.jpg'
import KeyboardImage from './assets/Keyboard.jpg'

function App() {

const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem('cart')
  return savedCart ? JSON.parse(savedCart) : []
})

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

const addToCart = (product) => {
  setCart([...cart, product])
  console.log('Added to cart:', product)
}
const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove))
}

const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: HeadphoneImage,
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: SmartwatchImage,
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: SpeakerImage,
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: LaptopImage,
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: WebcamImage,
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: KeyboardImage,
    description: "RGB backlit keyboard with custom switches"
  }
];
  return(
    <BrowserRouter>
      <Header
        name = "Rodrigo's Online Store"
        cartLength={cart.length}
      />
      
      <Routes>
        <Route path ="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              addToCart={addToCart}
            />
          }
        />
         <Route
          path="/cart"
          element={
            <CartPage
              products={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
        <Footer
          StoreInfo="My Online Store"
          ContactInfo="Contact us: support@mystore.com"
        />
    </BrowserRouter>
  )
}
    
export default App
