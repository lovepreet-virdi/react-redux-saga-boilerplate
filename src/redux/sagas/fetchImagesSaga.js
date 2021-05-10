import { call, put, takeLatest, } from "redux-saga/effects";
import fetchImagesService from "../services/fetchImagesService";
import CONSTANTS from "../constants"
function* fetchImages() {
    try {
        yield put({ type: CONSTANTS.IMAGE_LOADING });
        const response = yield call(fetchImagesService);
        const images = response.data;
        yield put({ type: CONSTANTS.IMAGE_SUCCESS, payload: images });

    } catch (error) {
        yield put({ type: CONSTANTS.IMAGE_ERROR });
    }
}
function* fetchImagesSaga() {
    yield takeLatest(CONSTANTS.FETCH_IMAGES, fetchImages)

}
export default fetchImagesSaga;