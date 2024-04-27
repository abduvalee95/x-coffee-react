import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];

  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart); // carrItem ni localStorege dagi malumotlar asosida tashkilashtirib beradi

  //**                          HANDLERS                **\

  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? {
              ...exist,
              quantity: exist.quantity + 1, // osha Productni qayta olgan holda qiymatni yangilemiz
            }
          : item
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = [...cartItems, { ...input }]; //bu yangilangan Cartni Tashkilashtiradi
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if (exist.quantity === 1) {
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id // aynan exist elementini butunlay ochirib beradi unga teng bolmagan elementlarni CardUpdatega qaytaradi
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 } // remove qilayotgan itemni topib beradi va -1 ga ayrib
          : item
      );
      setCartItems(cartUpdate); // update qilingan cartni qaytaradi
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id //teng bolganini ochirish uchun !== teng bolmaganini yozsek qaytarib beradi bizga
    );
    setCartItems(cartUpdate); // update qilingan cartni qaytaradi
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData");
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
