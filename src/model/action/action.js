import { MUSIC_DATA, MUSIC_DETAILS } from './types';

export const musicData = musicData => {
  return {
    type: MUSIC_DATA,
    payload: musicData
  }
}

export const musicDetails = musicDetails => {
  return {
    type: MUSIC_DETAILS,
    payload: musicDetails
  }
}
