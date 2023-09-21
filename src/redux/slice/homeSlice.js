import { categories } from "../../data/categories";
import { products } from "../../data/products";

const homeSlice = createSlice({

    name: "home", 
    initialState: {
        allCategories: categories,
        allProducts: products,
    },
    reducers: {

    },
});

export default homeSlice.reducer;