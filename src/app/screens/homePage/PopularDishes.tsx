import React from "react";
import { Box, Container, Stack } from "@mui/material";
// * MUI JoY
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
//!    redux imports
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

/*//*                  REDUX SLICE & SLECTOR */

const popularDishesRetrieve = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetrieve);

  return (
    <div className="popular-dishes-frame">
      <Container className="popular-section">
        <Box className="category-title">Popular Dishes</Box>
        <Stack className="cards-frame">
          {popularDishes.length !== 0 ? (
            popularDishes.map((product: Product) => {
              const imagePath = `${serverApi}/${product.productImages[3]}`;
              return (
                <CssVarsProvider key={product._id}>
                  <Card className={"card"}>
                    <CardCover>
                      <img src={imagePath} alt="img" />
                    </CardCover>

                    <CardCover className={"card-cover"} />

                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          level="h2"
                          fontSize="lg"
                          textColor="#fff"
                          mb={1}
                        >
                          {product.productName}
                        </Typography>

                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "neutral.300",
                            fontWeight: "md",
                          }}
                        >
                          {product.productViews}
                          <VisibilityIcon
                            sx={{
                              fontSize: 25,
                              marginLeft: "5px",
                            }}
                          />
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        height: "60px",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="neutral.300"
                      >
                        {product.productDesc}
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })
          ) : (
            <Box className="no-data">Popular products are not availeble! </Box>
          )}
        </Stack>
      </Container>
    </div>
  );
}
