import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../../services/fakeApi";
import { ADD_TODO_REQUEST, ADD_TODO } from "../actions/todos";

function* todoRequest(action) {
  try {
    const cep = yield call(Api, action.payload);
    yield put({ type: ADD_TODO, payload: cep.logradouro });
  } catch (err) {
    console.log("ERRROROROROR");
    yield put({ type: "FETCH_TODO_FAILED", err });
  }
}

function* sagas() {
  yield takeLatest(ADD_TODO_REQUEST, todoRequest);
}

export default sagas;
