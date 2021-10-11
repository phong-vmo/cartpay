import React from "react";
import { IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="content">
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <IconButton onClick={() => removeFromCart(item.id)}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <p>{item.amount}</p>
        <IconButton onClick={() => addToCart(item)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </div>
    <div className="image">
      <img src={item.image} alt={item.title} />
    </div>
  </Wrapper>
);

export default CartItem;
