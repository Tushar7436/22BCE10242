import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function TopUsers() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrors(false);
        setLoading(true);

        const access_token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTM2ODY1LCJpYXQiOjE3NDMxMzY1NjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3ZjJlNzBlLTRkN2EtNDY4Zi1iZDVmLTFmYjcyNTFkMmI2MSIsInN1YiI6InR1c2hhcmFnYXJ3YWwyMDIyQHZpdGJob3BhbC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IkFGRk9SRE1FRCIsImNsaWVudElEIjoiMzdmMmU3MGUtNGQ3YS00NjhmLWJkNWYtMWZiNzI1MWQyYjYxIiwiY2xpZW50U2VjcmV0IjoiZ0hmRGx4dkJHZE5IZGN0biIsIm93bmVyTmFtZSI6IlR1c2hhciBBZ2Fyd2FsIiwib3duZXJFbWFpbCI6InR1c2hhcmFnYXJ3YWwyMDIyQHZpdGJob3BhbC5hYy5pbiIsInJvbGxObyI6IjIyQkNFMTAyNDIifQ.4Wk4yvPRqww6KO9EmwaM1YAYdGxMDTFbkg_h1pHVJY4";
        const response = await axios.get("http://20.244.56.144/test/users", {
          headers: { Authorization: `Bearer ${access_token}` },
        });
        const sortedUsers = response.data.sort((a, b) => b.posts - a.posts);

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
        setErrors(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (errors) {
    return <div className="text-center text-red-500">Something went wrong</div>;
  }

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col z-0">
      <h1 className="text-6xl underline text-center pb-5">Top Users</h1>
      <ul className="text-white text-lg">
        {users.map((user) => (
          <li key={user.id} className="p-2">
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUsers;
