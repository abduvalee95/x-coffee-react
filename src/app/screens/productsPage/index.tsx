import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";
import { CartItem } from "../../../lib/types/search";

interface ProductPageProps {
  onAdd: (items: CartItem) => void;
}
export default function ProductsPage(props: ProductPageProps) {
  const { onAdd } = props;// togridan togri ishlatmizmiz childga pass qilamiz
  const products = useRouteMatch();
  console.log(products);

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>

        <Route path={`${products.path}`}>
          <Products onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
