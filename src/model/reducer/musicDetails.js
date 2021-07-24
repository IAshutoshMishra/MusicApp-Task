import { MUSIC_DETAILS } from '../action/types';

const initialState = {
  musicDetails: {}
};

const musicDetails = (state = initialState, action) => {
  switch(action.type) {
    case MUSIC_DETAILS:
      return {
        ...state,
        musicDetails: action.payload
      };
    default:
      return state;
  }
}

export default musicDetails;