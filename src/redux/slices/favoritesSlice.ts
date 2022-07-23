import createEntrySlice from './generic/entrySlice'


const favoritesSlice = createEntrySlice('favorites')

export const favoritesActions = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
