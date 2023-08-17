import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomitemContext from "./itemContext";
function App() {
  return (
<CustomitemContext>
        <div className="App">
          <h2>Shopping Cart</h2>
          <Navbar />
          <Items />
        </div>
</CustomitemContext>
  );
}
export default App;
