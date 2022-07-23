import createEntrySlice from './generic/entrySlice'


const explorerSlice = createEntrySlice('explorer')

export const explorerActions = explorerSlice.actions

export const explorerReducer = explorerSlice.reducer
