import axios from "axios";

const BASE_URL = "https://server-rose-six.vercel.app";

export const getAllUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all-user`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching user:", error);
    return [];
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-user`, userData);
    return response.data;
  } catch (error) {
    console.error("Error while creating user:", error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/delete-user/${id}`);
  } catch (error) {
    console.error(`Error while deleting user ${id}:`, error);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/update-user/${id}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error(`Error while updating user ${id}:`, error);
    return null;
  }
};
