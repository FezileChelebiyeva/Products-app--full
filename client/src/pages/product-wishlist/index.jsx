import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWishlist } from "../../redux/slice/wishlist";
import "./index.scss";
const WishlistProducts = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div id="wishlist">
      <div className="container">
        <div className="wishlist">
          {wishlist?.product?.map((element) => {
            return (
              <div key={element.id} className="card">
                <Link to={`/${element.id}`}>
                  <div className="img">
                    <img src={element.imgUrl} alt="" />
                  </div>
                </Link>
                <div className="about">
                  <h2>{element.name}</h2>
                  <div className="title">
                    <p className="id">
                      <span className="name">Product Id:</span>{" "}
                      <span className="value">{element.id}</span>
                    </p>
                    <p className="price">
                      <span className="name">Price:</span>{" "}
                      <span className="value">{element.price}$</span>
                    </p>
                    <div className="btn">
                      <Button
                        onClick={(e) => {
                          dispatch(removeWishlist(element.id));
                        }}
                        type="primary"
                        danger
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishlistProducts;
