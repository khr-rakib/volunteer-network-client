import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  const history = useHistory();

  const [event, setEvent] = useState({
    name: "",
    date: "",
    description: "",
    banner: "",
  });
  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(event);
    e.preventDefault();
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.replace("/admin");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="description">Event Description</label>
            <textarea
              cols="30"
              rows="2"
              id="description"
              name="description"
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="banner">Banner</label>
          <input
            type="file"
            id="banner"
            name="banner"
            className="form-control-file"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <button className="btn btn-primary btn-block">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default AddEvent;
