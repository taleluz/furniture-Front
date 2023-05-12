import { useDispatch } from "react-redux";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import  CartItemType  from "../../../models/cartItem";
import  "../../../styles/details.css"
import { Link } from "react-router-dom";
import { removeFromWishlist, addWishlistItemToCart } from "../../../services/wishlistSlice";
import { addProdQuantity, addToCart } from "../../../services/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

interface Props {
item: CartItemType;
}
const WishItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { image, name, price, quantity ,id, count_in_stock} = item;
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

  const handleRemoveItem = (): void => {
    dispatch(removeFromWishlist(item));
  };

  const handleAddToCart = (product:any) => {
    console.log(product)
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if ((existingCartItem && existingCartItem.quantity >= product.count_in_stock )|| (product.count_in_stock === 0)) {
      alert(`${product.count_in_stock} in stock`);
    } else {
      dispatch(addProdQuantity({ 
        id: product.id, image: product.image, name: product.name, price: product.price, quantity:1 }));
      handleRemoveItem();
    }
  };

  return (
    <div className="cart-item">
      <div className="product-image">
        <Link to={`/product/${item.id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="product-name">
        <h2>{name}</h2>
        <h2 className="product-price">${price}</h2>
        <button className="button-33" role="button" onClick={handleRemoveItem}>Remove </button>
        <button className="button-33" role="button" onClick={()=>handleAddToCart(item)}>Add to cart </button>
      </div>
    </div>
  );
};

export default WishItem;
