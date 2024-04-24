import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { error, log } from "console";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enum/product.enum";
import { serverApi } from "../../../lib/config";

/*//*                  REDUX SLICE & SLECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever); //products obj[] qabul qilamiz

  useEffect(() => {
    const product = new ProductService(); // service apilardan retrieve qilamiz
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data)) // get products dan kirib kelgan datani setqilyabmiz
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className="title"> Burak Restaurant </Box>
            <Stack className={"single-search-big-box"}>
              <input
                type={"search"}
                className={"single-search-input"}
                name={"singleResearch"}
                placeholder={"Type here"}
                value={""}
              />
              <Button
                className={"single-button-search"}
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button variant="contained" color={"primary"} className="order">
                New
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                Price
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className="product-category">
              <div className="category-main">
                <Button variant={"contained"} color={"secondary"}>
                  Other
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Desert
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Drink
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  Salad
                </Button>
                <Button variant={"contained"} color={"primary"}>
                  Dish
                </Button>
              </div>
            </Stack>
            <Stack className="products-wrapper">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}${product.productImages[0]}`;
                  const productSizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " L"
                      : product.productSize + " Size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className={"product-sale"}>
                          {" "}
                          {productSizeVolume}
                        </div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>

                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge
                            badgeContent={product.productViews}
                            color="secondary"
                          >
                            <RemoveRedEyeIcon
                              sx={{
                                color:
                                  product.productViews === 0 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">
                  {" "}
                  Products are not availble! try later
                </Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination count={3} variant="outlined" color="secondary" />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className="family-brands">
          <Box className="title"> Our Family Brands </Box>
          <Stack className={"family-card"}>
            <Box className="card-box">
              <img src="/img/gurme.webp" alt="img" />
            </Box>
            <Box className="card-box">
              <img src="/img/seafood.webp" alt="img" />
            </Box>
            <Box className="card-box">
              <img src="/img/sweets.webp" alt="img" />
            </Box>
            <Box className="card-box">
              <img src="/img/doner.webp" alt="img" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}> Our address </Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Boulevard%20Point%20-%20Sheikh%20Mohammed%20bin%20Rashid%20Blvd%20-%20Downtown%20Dubai%20-%20Dubai%20-%20%D0%9E%D0%90%D0%AD+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width={"1320"}
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
