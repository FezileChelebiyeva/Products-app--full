import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../../redux/slice/getData";
import { Space, Spin } from "antd";
import SearchComp from "../../components/search";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { addWishlist, removeWishlist } from "../../redux/slice/wishlist";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const wishlist = useSelector((state) => state.wishlist);
  const cards = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(fetchData(""));
  }, []);

  const handleSortByPrice = () => {
    dispatch(fetchData(1));
  };
  const handleWishlist = (product) => {
    dispatch(addWishlist(product));
  };
  const handleRemoveWishlist = (id) => {
    dispatch(removeWishlist(id));
  };
  const [count, setCount] = useState(4);
  return (
    <div id="products-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
      </Helmet>
      <div className="container">
        <div className="search-sort">
          <SearchComp />
          <div className="sort">
            <Button onClick={() => handleSortByPrice()} type="primary" ghost>
              Sort By Price
            </Button>
          </div>
        </div>
        <div className="products">
          {products.loading ? (
            <div className="spin">
              <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
              </Space>
            </div>
          ) : (
            products?.data?.slice(0, count).map((element) => {
              return (
                <div key={element.id} className="card">
                  {wishlist.product?.find((el) => el.id == element.id) ? (
                    <div
                      onClick={() => handleRemoveWishlist(element.id)}
                      className="icon"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleWishlist(element)}
                      className="icon"
                    >
                      <i className={`fa-regular fa-heart`}></i>
                    </div>
                  )}
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
                      <p className="description">
                        <span className="name">Description:</span>{" "}
                        <span className="value">{element.description}</span>
                      </p>
                    </div>
                    <div className="btn">
                      <Button
                        onClick={(e) => {
                          dispatch(deleteData(element.id)).then((el) =>
                            dispatch(fetchData(""))
                          );
                        }}
                        type="primary"
                        danger
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {products.loading
            ? null
            : products.error && (
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "red",
                    marginTop: "20px",
                  }}
                >
                  {products.error}
                </div>
              )}
        </div>
        <div className="btn">
          <Button onClick={() => setCount(count + 4)}>More</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
