import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CreateContext } from "../../context/useContext";

const Home = () => {
  const { addFood, updateUserData, selectedUser, setSelectedUser } =
    useContext(CreateContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const nameValidation = {
    required: true,
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Invalid name. Only alphabetic characters are allowed.",
    },
  };

  const emailValidation = {
    required: true,
    pattern: {
      value: /^[A-Za-z][A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      message: "Invalid email address",
    },
  };

  const phoneValidation = {
    required: true,
    pattern: {
      value: /^\d{10,}$/,
      message: "Invalid phone number. Please enter at least 10 digits.",
    },
  };

  const onSubmit = (data) => {
    if (selectedUser) {
      updateUserData(selectedUser._id, data, reset);
      setSelectedUser(null);
    } else {
      addFood(data, reset);
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setValue("name", selectedUser.name);
      setValue("email", selectedUser.email);
      setValue("phone", selectedUser.phone);
    }
  }, [selectedUser, setValue]);

  return (
    <div className="w-50 m-auto mt-3">
      <h2 className="text-center text-primary">User To Do List</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name", nameValidation)}
          />
          {errors.name && (
            <span className="text-danger">{errors.name.message}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", emailValidation)}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone"
            {...register("phone", phoneValidation)}
          />
          {errors.phone && (
            <span className="text-danger">{errors.phone.message}</span>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default Home;
