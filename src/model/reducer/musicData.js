import { MUSIC_DATA } from '../action/types';

const initialState = {
  musicData: []
};

const musicData = (state = initialState, action) => {
  switch(action.type) {
    case MUSIC_DATA:
      return {
        ...state,
        musicData: action.payload
      };
    default:
      return state;
  }
}

export default musicData;