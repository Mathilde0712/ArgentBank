import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import authReducer from "../feature/auth.slice";
import storageSession from "redux-persist/lib/storage/session";

// Configuration pour qu'au rechergemen de la page, le token reste stocké dans le storageSession (si je ferme l'onglet, il n'est plus sto)
const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["auth"],
};

// Combiner les réducteurs
const rootReducer = combineReducers({
  auth: authReducer,
});

// Réducteur persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurer le store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["register", "rehydrate"],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
