import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import Header from "./components/Header";
import ProductsDetails from "./components/ProductsDetails";
function App() {
  return (
    <div>
      <Header/>
      <main>
       
        <Route path="/" exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductsDetails />
        </Route>
        
      </main>
    </div>
  );
}

export default App;
