import { commerce } from "../../../lib/commerce_config";

export function requestGetCart (){
    return commerce.cart.retrieve();
}
export function requestAddToCart(id,quantity){
    return commerce.cart.add(id,quantity);
}

export function requestUpdateCart(id,quantity){
    return commerce.cart.update(id, {quantity: quantity});
}

export function requestRemoveCart(id){
    return commerce.cart.remove(id);
}

export function requestEmptyCart(){
    return commerce.cart.empty();
}

export function requestRefreshCart(){
    return commerce.cart.refresh();
}