import {API_WEATHER, TOKEN_WEATHER} from '../../utils/default';

export const httpGet = async endPoint => {
  try {
    const response = await fetch(`${API_WEATHER}?${endPoint}&units=metric&APPID=${TOKEN_WEATHER}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.warn('httpGet error ', err);
  }
};
