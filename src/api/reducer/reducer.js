export const intialState = {
    user: {},
    products: [],
    singleProduct: {},
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    isLoading: true,
    singleProductLoading: true,
}

export const reducer = (state = intialState, action) => {

    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                isLoading: false
            }
        case "LOGIN":
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }

        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case "SINGLE_PRODUCT":
            return {
                ...state,
                singleProduct: action.payload,
                singleProductLoading: false
            }
        case "FILTER_DATA":
            return {
                ...state,
                products: action.payload,
                isLoading: false
            }
        case "ADD_TO_CART":
            const product = [...state.cart, { ...action.payload, qty: 1 }]
            localStorage.setItem('cart', JSON.stringify(product))
            return {
                ...state,
                cart: product
            }
        case "DELETE_PRODUCT":
            const deleteProduct = state.cart.filter((item) => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(deleteProduct))
            return {
                ...state,
                cart: deleteProduct
            }
        case "INC_PRODUCT":
            const incProduct = state.cart.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
            localStorage.setItem("cart", JSON.stringify(incProduct))
            return {
                ...state,
                cart: incProduct
            }
        case "DEC_PRODUCT":
            const decProduct = state.cart.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
            )
            localStorage.setItem("cart", JSON.stringify(decProduct))
            return {
                ...state,
                cart: decProduct
            }
        default:
            return state
    }
}