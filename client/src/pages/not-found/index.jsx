import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div id="not-found">
      <div className="container">
        <div class="text">
          <div class="text-center">
            <h1>404</h1>
            <p class="opps">
              {" "}
              <span class="text-danger">Opps!</span> Page not found.
            </p>
            <p class="lead">The page you’re looking for doesn’t exist.</p>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              back home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
