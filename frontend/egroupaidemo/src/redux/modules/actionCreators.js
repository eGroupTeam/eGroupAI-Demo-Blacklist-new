import { createActions } from 'redux-actions';

const actionMap = {
  PAGES: {
    HOME: {
      TOGGLE_RECOGNIZE: undefined,
      SET_RESULT: undefined
    },
    WHITE: {
      FETCH_GET_BLACK_WHITE: undefined,
      FETCH_GET_BLACK_WHITE_REQUEST: undefined,
      FETCH_GET_BLACK_WHITE_SUCCESS: undefined,
      FETCH_GET_BLACK_WHITE_FAILURE: undefined
    },
    BLACK: {
      FETCH_GET_BLACK_WHITE: undefined,
      FETCH_GET_BLACK_WHITE_REQUEST: undefined,
      FETCH_GET_BLACK_WHITE_SUCCESS: undefined,
      FETCH_GET_BLACK_WHITE_FAILURE: undefined
    },
    TRAIN: {
      WAIT_USER_TO_TRAIN: undefined,
      START_RETRIVE_FACES: undefined,
      STOP_RETRIVE_FACES: undefined,
      CONCAT_RETRIVED_FACES: undefined,
      TOGGLE_BLACK_STATUS: undefined,
      TOGGLE_AUTO_TRAIN: undefined,
      SHOW_RETRIVED_FACES: undefined,
      APPEND_SELECTED_FACE: undefined,
      TRAIN_PROCESS_FINISH: undefined,

      FETCH_POST_MODEL_TRAIN: undefined,
      FETCH_POST_MODEL_TRAIN_REQUEST: undefined,
      FETCH_POST_MODEL_TRAIN_SUCCESS: undefined,
      FETCH_POST_MODEL_TRAIN_FAILURE: undefined,

      FETCH_POST_MODEL_SWITCH: undefined,
      FETCH_POST_MODEL_SWITCH_REQUEST: undefined,
      FETCH_POST_MODEL_SWITCH_SUCCESS: undefined,
      FETCH_POST_MODEL_SWITCH_FAILURE: undefined
    }
  }
};

export default createActions(actionMap);
