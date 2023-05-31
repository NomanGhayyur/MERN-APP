import React, { useState, useEffect } from "react";

function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    const response = await fetch("http://localhost:5000/api/user/userlist", {
      method: "GET",
    });
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setData(result.data);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "data");

  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <h2 className="text-center">User List</h2>

      <div className="row">
        {data?.map((data) => (
          <div key={data._id} className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{data.email}</p>
                <p className="card-text">{data.age}</p>
                <a href="/update" className="card-link">
                  Edit
                </a>
                <a href="" className="card-link">
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
