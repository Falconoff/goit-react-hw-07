// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import filterReducer from './filtersSlice';

// const contactsConfig = {
//   key: 'contactsKey',
//   storage,
//   //   whitelist: ["contacts"], // blacklist: ["showProfilesList"]
// };

export const store = configureStore({
  reducer: {
    // contacts: persistReducer(contactsConfig, contactsReducer),
    contacts: contactsReducer,
    filters: filterReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
