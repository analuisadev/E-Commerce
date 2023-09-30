import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export default function ProductsProvider({ children }: any) {
    const [amount, setAmount] = useState(0);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [lastSeen, setLastSeen] = useState([]);

    const seenProduct = (product) => {
        setAmount(amount + 1);

        let newShoppingCart = shoppingCart;
        newShoppingCart.push(product);
        setShoppingCart(newShoppingCart);

        let newLastSeen = new Set(lastSeen);
        newLastSeen.add(product);
        setLastSeen([...newLastSeen]);
    }

    return (
        <ProductsContext.Provider value={{
            amount,
            shoppingCart,
            lastSeen,
            seenProduct
        }}>
            {children}
        </ProductsContext.Provider>
    );
}