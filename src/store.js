import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/user/userSlice.js';
import bankReducer from './components/saga-example/bank/bankSlice.js';
import createSagaMiddleware from 'redux-saga';
import { watchBankTransfers } from './components/saga-example/bank/bankSaga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    bank: bankReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchBankTransfers);