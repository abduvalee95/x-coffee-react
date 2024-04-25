import axios from "axios";
import { log } from "console";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`;
        if (input.search) url += `&search=${input.search}`;

        const result = await axios.get(url); // backendan resultni olib beryabti 
        console.log("getProducts",result);
        
        return result.data
    } catch (error) {
      console.log("Error, getProduct qismida shu Xatolik:", error);
      throw error;
    }
  }
}


export default ProductService;
