import React, { createContext, useState, useEffect } from "react";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../services/services";

export const CreateContext = createContext();

const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoader(true);
    const usersData = await getAllUser();
    setUsers(usersData);
    setLoader(false);
  };

  const addFood = async (userData, reset) => {
    setLoader(true);
    const newUser = await createUser(userData);
    if (newUser) {
      setUsers((users) => [...users, newUser]);
    }
    fetchUsers();
    reset();
    setLoader(false);
  };

  const delUser = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmation) {
      setLoader(true);
      try {
        await deleteUser(id);
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        fetchUsers();
        setLoader(false);
      } catch (error) {
        console.error("Error while deleting user:", error);
      }
    }
  };

  const updateUserData = async (userId, userData, reset) => {
    setLoader(true);
    const updatedUser = await updateUser(userId, userData);
    if (updatedUser) {
      setUsers((users) =>
        users.map((user) => (user._id === userId ? updatedUser : user))
      );
    }
    fetchUsers();
    reset();
    setLoader(false);
  };

  return (
    <CreateContext.Provider
      value={{
        users,
        addFood,
        delUser,
        updateUserData,
        selectedUser,
        setSelectedUser,
        loader,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default UserContext;
