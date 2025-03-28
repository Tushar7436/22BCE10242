import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"

function TopUsers() {
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrors(false);
        setLoading(true);
        const Access = {access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQyMTYzLCJpYXQiOjE3NDMxNDE4NjMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3ZjJlNzBlLTRkN2EtNDY4Zi1iZDVmLTFmYjcyNTFkMmI2MSIsInN1YiI6InR1c2hhcmFnYXJ3YWwyMDIyQHZpdGJob3BhbC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IkFGRk9SRE1FRCIsImNsaWVudElEIjoiMzdmMmU3MGUtNGQ3YS00NjhmLWJkNWYtMWZiNzI1MWQyYjYxIiwiY2xpZW50U2VjcmV0IjoiZ0hmRGx4dkJHZE5IZGN0biIsIm93bmVyTmFtZSI6IlR1c2hhciBBZ2Fyd2FsIiwib3duZXJFbWFpbCI6InR1c2hhcmFnYXJ3YWwyMDIyQHZpdGJob3BhbC5hYy5pbiIsInJvbGxObyI6IjIyQkNFMTAyNDIifQ.5noAC46kuqppKHP6xp_MGbjIIzwFDp4iS_V1rsw_bFM.4Wk4yvPRqww6KO9EmwaM1YAYdGxMDTFbkg_h1pHVJY4"};
        const response = await axios.get("http://20.244.56.144/test/users",Access);
        console.log(response.data); 
        setUser(response.data);
      } catch (error) {
        setErrors(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (errors) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col z-0">
      <h1 className="text-6xl underline text-center pb-5">Users</h1>
      {/* <ul>
          <li>{user.id}</li>
      </ul> */}
    </div>
  );
}

export default TopUsers;
