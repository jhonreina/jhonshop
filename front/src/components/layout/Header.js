import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg sticky-top py-3 p-sm-1">
        <div className="container">
          <div className="col-12 col-md-6 col-lg-2 text-center ">
            <div className="navbar-brand">
              <img
                src="./images/logo2.png"
                class="rounded mx-auto d-block"
                alt="logo"
              ></img>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-0 p-0">
            <div class="input-group mx-auto">
              <input
                type="text"
                id="search_field"
                class="form-control me-2"
                placeholder="¿Que buscas?"
              ></input>
              <div class="input-group-append">
                <button id="search-btn" class="btn">
                  <i
                    class="fa fa-search-plus text-white fa-2x"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 p-0 mt-0 d-flex justify-content-center">
            <div className="mt-2 dropdown">
              <Link
                to="#"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text-header">Panel de Control</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropDownMenu">
                <Link className="dropdown-item" to="/dashboard">
                  Admin. Productos
                </Link>
                <Link className="dropdown-item" to="/">
                  Pedidos
                </Link>
                <Link className="dropdown-item" to="/">
                  Mi cuenta
                </Link>
                <Link className="dropdown-item" to="/">
                  Cerrar sesion
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 d-flex justify-content-center">
            <Link to="/carrito" className="d-flex">
              <i
                class="fa fa-shopping-cart fa-2x text-white"
                aria-hidden="false"
              ></i>
              <span className="ml-1 m-1" id="cart_count">
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>    
    </Fragment>
  );
};

export default Header;
