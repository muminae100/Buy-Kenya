export const initialState = {
    wishlistbasket: [],
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) =>{
    switch(action.type){
            case 'ADD_TO_WISHLIST':
            return{
                ...state,
                wishlistbasket: [...state.wishlistbasket, action.item]
            };
            case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            };
            case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            };
            case 'REMOVE_FROM_BASKET':
               const index = state.basket.filter(
                    (basketItem) => basketItem.id === action.id
               );
               let newBasket = [...state.basket];
               if(index>=0){
                    newBasket.splice(index, 1)

               }else{
                    console.warn(`Cant remove product ${action.id} from cart`)
               }
            return {
                ...state, 
                basket: newBasket
            }
            case 'REMOVE_FROM_WISHLIST':
               const index1 = state.wishlistbasket.filter(
                    (wishListItem) => wishListItem.id === action.id
               );
               let newwishListBasket = [...state.wishlistbasket];
               if(index1>=0){
                    newwishListBasket.splice(index1, 1)

               }else{
                    console.warn(`Cant remove item ${action.id} from wishlist`)
               }
            return {
                ...state, 
                wishlistbasket: newwishListBasket
            }
            case 'SET_USER':
            return{
                ...state,
                user: action.user
            };


            default:
                return state;

    }
};

export default reducer;