import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPageState = {
  currentPage: 1,
};

const pageNumberSlice = createSlice({ // criando o slice
  name: 'pageNumber', // nome do slice
  initialState: initialPageState, // estado inicial
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setPage } = pageNumberSlice.actions;


const cardsComicsState = {
  comics: [],
  isLoading: true,
  itemsPerPage: 16,
}

const cardsComicsSlice = createSlice({
  name: 'cardsComics',
  initialState: cardsComicsState,
  reducers: {
    setComics: (state, action) => {
      state.comics = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    }
  }
});

export const { setComics, setLoading, setItemsPerPage } = cardsComicsSlice.actions;

const store = configureStore({
  reducer: {
    pageNumber: pageNumberSlice.reducer,
    cardsComics: cardsComicsSlice.reducer,
  }
});

export default store;