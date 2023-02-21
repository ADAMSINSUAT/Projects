import React, {Component} from "react";
import GroceryDisplay from "./GroceryDisplay";

class App extends Component{
  state = {
    groceryData:[
      {
        productID: 1,
        productName: "Butter",
        productQuantity: 1,
        productPrice: 20,
        // productTotal: parseFloat(this.productQuantity * this.productPrice),
      },
      {
        productID: 2,
        productName: "Eggs",
        productQuantity: 12,
        productPrice: 10,
        // productTotal: parseFloat(this.productQuantity * this.productPrice),
      },
      {
        productID: 3,
        productName: "1L Milk",
        productQuantity: 1,
        productPrice: 45,
        // productTotal: parseFloat(this.productQuantity* this.productPrice),
      },
    ]
  }
  render(){
    return(
      <div>
        <GroceryDisplay groceries={this.state.groceryData}></GroceryDisplay>
      </div>
    )
  }
}

export default App;