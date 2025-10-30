import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../api/api.js';
import { transferSuccess, transferFailed, showNotification } from './bankSlice.js';

// worker saga
function* handleTransferRequest(action) {
  try {
    const { amount, from, to } = action.payload;

    yield put(showNotification({ message: 'Authenticating user...', type: 'info' }));

    const user = yield call(api.authenticateUser);

    yield put(showNotification({ message: 'Validating transaction...', type: 'info' }));


    yield call(api.validateTransaction, { user, amount, from });

    yield put(showNotification({ message: 'Processing transfer...', type: 'info' }));

    const transaction = yield call(api.executeTransfer, { from, to, amount });

    yield put(transferSuccess(transaction));
    yield put(showNotification({ message: 'Transfer successful!', type: 'success' }));

  } catch (error) {
    console.error('Saga transfer failed:', error.message);
    yield put(transferFailed(error.message));
    yield put(showNotification({ message: `Error: ${error.message}`, type: 'error' }));
  }
}


export function* watchBankTransfers() {
  yield takeLatest('bank/transferRequested', handleTransferRequest);
}