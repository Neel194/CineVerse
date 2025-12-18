export { removeperson } from "../reducers/personSlice";
import axios from "../../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);

    let theultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      movieCredits: movieCredits.data.cast || [],
      tvCredits: tvCredits.data.cast || [],
    };

    dispatch(loadperson(theultimateDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};

