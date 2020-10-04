import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { userContext } from "../App";
import { toast } from "react-toastify";

const EventTasks = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [selectedTasks, setSelectedTasks] = useState();

  useEffect(() => {
    fetch(
      "https://infinite-temple-84022.herokuapp.com/loggedInVolunteer?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setSelectedTasks(data));
  });

  const handleDelete = (_id) => {
    fetch("https://infinite-temple-84022.herokuapp.com/loggedInVolunteer", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: _id }),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Event has been canceled !!!"))
      .catch((err) => toast.error("Something went wrong !!!"));
  };

  return (
    <div className="event__tasks">
      <div className="container">
        <Navbar />
        <div className="row mt-5 py-5">
          {selectedTasks &&
            selectedTasks.map((item) => (
              <div className="col-md-6 mt-4" key={item._id}>
                <div className="event__tasks__Box">
                  <div style={{ marginRight: "20px" }}>
                    <img src={item.banner} className="img-fluid" alt="" />
                  </div>
                  <div style={{ width: "100%" }}>
                    <h4>{item.selectedEvent}</h4>
                    <p>{item.date}</p>
                    <button onClick={(e) => handleDelete(item._id)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventTasks;
