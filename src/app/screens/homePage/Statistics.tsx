import React from 'react';
// import './favorites.css';
import { CssVarsProvider } from "@mui/joy/styles";

const Statistics: React.FC = () => {
  return (
    <CssVarsProvider>
    <div className="container-lg">
      <h1 className="text-center">A NEW ORLEANS ORIGINAL</h1>

      <p className="text-center text-primary cursive h3">A few of our favorites...</p>

      <div className="row g-5 justify-content-center wow animate__fadeIn">
        <div className="col-3 mb-3 text-center favorite-item">
          <a href="https://www.pjscoffee.com/menu/#espresso">
            <img
              alt="Cafe Latte"
              className="img-fluid thumbnail mx-auto"
              src="https://www.pjscoffee.com/uploads/product-latte_141222.png"
              style={{ maxHeight: '400px' }}
            />
          </a>
          <p className="p-3 montserrat text-uppercase lead fw-bold">
            <a href="https://www.pjscoffee.com/menu/#espresso">Latte</a>
          </p>
        </div>

        <div className="col-3 mb-3 text-center favorite-item">
          <a href="https://www.pjscoffee.com/menu/#iced">
            <img
              alt="Iced Coffee"
              className="img-fluid thumbnail mx-auto"
              src="https://www.pjscoffee.com/uploads/products-icedcoffee55_155354.png"
              style={{ maxHeight: '400px' }}
            />
          </a>
          <p className="p-3 montserrat text-uppercase lead fw-bold">
            <a href="https://www.pjscoffee.com/menu/#iced">Cold Brew</a>
          </p>
        </div>

        <div className="col-3 mb-3 text-center favorite-item">
          <a href="https://www.pjscoffee.com/energy">
            <img
              alt="Energy product"
              className="img-fluid thumbnail mx-auto"
              src="https://www.pjscoffee.com/uploads/product-bluerazz55_155352.png"
              style={{ maxHeight: '400px' }}
            />
          </a>
          <p className="p-3 montserrat text-uppercase lead fw-bold">
            <a href="https://www.pjscoffee.com/energy">Energy</a>
          </p>
        </div>
      </div>

      <ul className="nav justify-content-center bg-white border-top border-bottom bg-white white-bar-nav align-items-center wow animate__fadeIn">
        <li className="nav-item">
          <span className="nav-link cursive text-primary">View Menus:</span>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold text-uppercase" href="https://www.pjscoffee.com/food/">
            Food
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold text-uppercase" href="https://www.pjscoffee.com/menu">
            Beverages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold text-uppercase" href="https://www.pjscoffee.com/beignets">
            Beignets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold text-uppercase" href="https://www.pjscoffee.com/catering">
            Catering
          </a>
        </li>
      </ul>
      </div>
/</CssVarsProvider>
  );
};

export default Statistics;
