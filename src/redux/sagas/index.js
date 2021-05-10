import { all } from "redux-saga/effects";
import fetchImagesSaga from "./fetchImagesSaga";
function* rootSaga() {
    yield all([fetchImagesSaga()])
}
export default rootSaga;