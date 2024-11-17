import axios from "axios";
import { useEffect, useState } from "react";

function ViewUser() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9192/auth/getUsers");

      console.log(response.data);

      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.log("not valid");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  });

  return (
    <>
      <h1>Users List</h1>

      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
               <>

               <li key={user.id}> Name:{user.name}, Email:{user.email}</li>
               
               
               </>

            ))}
          </ul>
        ) : (
          <p>No record</p>
        )}
      </div>
    </>
  );
}

export default ViewUser;