// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import jobSlice from "./jobSlice";

// const store= configureStore({
//     reducer:{
//           auth: authSlice,
//           job:jobSlice
//     }
// });

// export default store;
// install redux-persist 
// ______________________search redux-persist-toolkit and then open website and then follow below code_________________________________________________________________________________

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const rootReducer= combineReducers({
    auth:authSlice,
    job:jobSlice,
    company:companySlice,
    application:applicationSlice
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store= configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export default store;