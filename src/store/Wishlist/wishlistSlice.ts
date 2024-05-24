import { TLoading, TProduct, isString } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { authLogOut } from "@store/auth/authSlice";

interface IWishlistState {
  itemsId: number[];
  error: string | null;
  loading: TLoading;
  productsFullInfo: TProduct[];
}

const initialState: IWishlistState = {
  itemsId: [],
  error: null,
  loading: "idle",
  productsFullInfo: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanWishlistProductFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    // * add to wishlist and remove
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter(
          (item) => item !== action.payload.id
        );
        state.productsFullInfo = state.productsFullInfo.filter(
          (item) => item.id !== action.payload.id
        );
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    //* get Wishlist data
    builder.addCase(actGetWishlist.pending, (state) => {
      state.error = null;
      state.loading = "pending";
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload.dataType === "ProductsFullInfo") {
        state.productsFullInfo = action.payload.data as TProduct[];
      } else if (action.payload.dataType === "productsIds") {
        state.itemsId = action.payload.data as number[];
      }
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // * when logout reset
    builder.addCase(authLogOut, (state) => {
      state.itemsId = [];
      state.productsFullInfo = [];
    });
  },
});

export { actLikeToggle };
export const { cleanWishlistProductFullInfo } = wishlistSlice.actions;
export default wishlistSlice.reducer;
