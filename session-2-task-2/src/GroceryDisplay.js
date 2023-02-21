import React from "react";

const GroceryDisplay = (props) => {

    const { groceries } = props;

    const groceryData = groceries.map((data) => data)
    console.log(groceryData.map((data) => data.productID))
    return (
        <div>
            <div>Grocery List:</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {groceryData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.productID}</td>
                                <td>{data.productName}</td>
                                <td>{data.productQuantity}</td>
                                <td>{data.productPrice}</td>
                            </tr>
                        )
                    })}
                </tbody>
                {/* Amount: {groceries.productTotal} */}
                {/* ------------------------------- */}
                {/* Total: {groceries.reduce((partialSum, a)=>
                partialSum + a, 0)} */}
            </table>
        </div>
    )
}

export default GroceryDisplay;