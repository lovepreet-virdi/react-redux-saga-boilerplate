import CONSTANTS from "../constants";
const initialState = {
  loading: false,
  images: [],
};
export default function imageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CONSTANTS.IMAGE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CONSTANTS.IMAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        images: payload,
      };
    }
    case CONSTANTS.IMAGE_ERROR: {
      return {
        ...state,
        loading: false,
        images: [],
      };
    }
    default:
      return state;
  }
}
