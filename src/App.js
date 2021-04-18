import Cart from './components/Cart'


import './App.css';


const items = [
  {id: 1, name: "Pizza", price: 2.99, qty: 1},
  {id: 2, name: "Burger", price: 5.99, qty: 1},
  {id: 3,name: "Salad", price: 8.99, qty: 1},
  {id: 4, name: "Taco", price: 4.99, qty: 1}
]

function App() {
  return (
    <div className = "App">
      <h2>Shpping Cart App</h2>
      <Cart initItems = {items}/>
    </div>
  );
}

export default App;
