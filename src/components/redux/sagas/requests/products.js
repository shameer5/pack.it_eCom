import { commerce } from "../../../lib/commerce_config";

export function requestGetProducts(){
    const products = commerce.products.list();
    return products;
}