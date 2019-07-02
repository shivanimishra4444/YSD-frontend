import axios from 'axios';
import { APP_URL } from '../const';

export const fetchUsersList = async () => {
  try {
    return await axios.get(`${APP_URL}/api/users`);
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserDetail = async id => {
  try {
    return await axios.get(`${APP_URL}/api/user/${id}`);
  } catch (error) {
    console.error(error);
  }
};
