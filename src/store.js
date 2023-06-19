import { configureStore, createSlice } from '@reduxjs/toolkit';

/* ===== Form Search State ===== */
const formState = {
  searchTerm: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState: formState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearchTerm } = formSlice.actions;

/* ===== Footer State ===== */

const footerState = {
  currentPage: 1,
  currentPageURL: '/',
};

const footerSlice = createSlice({ // criando o slice
  name: 'footer', // nome do slice
  initialState: footerState, // estado inicial
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPageURL: (state, action) => {
      state.currentPageURL = action.payload;
    }
  }
});

export const { setPage, setCurrentPageURL } = footerSlice.actions;

/* ===== Comics State ===== */

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

/* ===== Avengers State ===== */

const cardsAvengersState = {
  characters: [],
  isLoading: true,
  itemsPerPage: 6,
}

const cardsAvengersSlice = createSlice({
  name: 'cardsAvengers',
  initialState: cardsAvengersState,
  reducers: {
    setAvengers: (state, action) => {
      state.characters = action.payload;
    },
    setAvLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAvItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    }
  }
});

export const { setAvengers, setAvLoading, setAvItemsPerPage } = cardsAvengersSlice.actions;

/* ===== Store Config ===== */

const store = configureStore({
  reducer: {
    footer: footerSlice.reducer,
    cardsComics: cardsComicsSlice.reducer,
    cardsAvengers: cardsAvengersSlice.reducer,
    form: formSlice.reducer
  }
});

export default store;