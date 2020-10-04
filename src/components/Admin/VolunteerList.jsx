import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VolunteerList = () => {
  const [volunteerList, setVolunteerList] = useState();

  useEffect(() => {
    fetch("https://infinite-temple-84022.herokuapp.com/volunteersList")
      .then((res) => res.json())
      .then((data) => setVolunteerList(data));
  }, [volunteerList]);

  const handleDelete = (_id) => {
    fetch("https://infinite-temple-84022.herokuapp.com/loggedInVolunteer", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: _id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Volunteer Deleted Successfully !!!");
      })
      .catch((err) => toast.success("Somethings went wrong !!!"));
  };

  return (
    <table className="app__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Registration Date</th>
          <th>Volunteer List</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {volunteerList &&
          volunteerList.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td> {item.selectedEvent}</td>
              <td className="float-right">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default VolunteerList;
