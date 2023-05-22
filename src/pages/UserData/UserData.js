import React, { memo, useContext } from "react";
import { CreateContext } from "../../context/useContext";
import { Button, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const UserData = () => {
  const { users, delUser, setSelectedUser, loader } = useContext(CreateContext);

  return (
    <div className="container mt-4">
      {loader ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Table striped bordered hover size="sm">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={user._id} className="text-center">
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Button
                    onClick={() => setSelectedUser(user)}
                    variant="success"
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button onClick={() => delUser(user._id)} variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      )}
    </div>
  );
};

export default memo(UserData);
