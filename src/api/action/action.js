import axios from 'axios'

export const LoginAction = async (form, navigate, toast, dispatch) => {
    try {
        const { data, status } = await axios.post('https://soomgo.the-watcher.uz/auth/login', form)
        console.log(data, status);

        if (status === 200) {
            toast.success("Foydalanuvchi ro'yxatdan o'tdi")
            dispatch({ type: "LOGIN", payload: data })
            navigate('/')
        }
    } catch (error) {
        toast.error(error.message)
    }
}

export const RegisterAction = async (form, toast, navigate, dispatch) => {
    try {
        const { data, status } = await axios.post('https://soomgo.the-watcher.uz/auth/register', form)

        if (status === 201) {
            toast.success("Foydalanuvchi ro'yxatdan o'tdi")
            dispatch({ type: "REGISTER", payload: data })
            navigate('/login')
        }
    } catch (error) {
        toast.error(error.message)
    }
}

export const GetAllProducts = async (dispatch) => {
    try {
        const { data, status } = await axios.get("https://fakestoreapi.com/products")

        if (status === 200) {
            dispatch({ type: "GET_ALL_PRODUCTS", payload: data })
        }
    } catch (error) {
        console.log(error);
    }
}

export const GetSingleProduct = async (id, dispatch) => {
    try {
        const { data, status } = await axios.get(`https://fakestoreapi.com/products/${id}`)

        if (status === 200) {
            dispatch({ type: "SINGLE_PRODUCT", payload: data })
        }
    } catch (error) {
        console.log(error);
    }
}

export const FilterProductsByCategory = async (filter, dispatch) => {
    const productUrl = filter !== "all" ? `https://fakestoreapi.com/products/category/${filter}` : `https://fakestoreapi.com/products`
    try {
        const { data, status } = await axios.get(productUrl)
        if (status === 200) {
            dispatch({ type: "FILTER_DATA", payload: data })
        }
    } catch (error) {
        console.log(error);
    }
}

export const AddToCart = async (item, toast, dispatch) => {
    toast.success("Product cartga qo'shildi")
    dispatch({ type: "ADD_TO_CART", payload: item })
}

export const DeleteToCart = async (id, toast, dispatch) => {
    toast.success("Product o'chirildi")
    dispatch({ type: "DELETE_PRODUCT", payload: id })
}

export const IncreamentQuantity = async (id, dispatch) => {
    dispatch({ type: "INC_PRODUCT", payload: id })
}

export const DecreamentQuantity = async (id, dispatch) => {
    dispatch({ type: "DEC_PRODUCT", payload: id })
}