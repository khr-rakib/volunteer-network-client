import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddEvent = () => {
  const history = useHistory();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setpreviewSource] = useState("");
  const [loader, setLoader] = useState(false);

  const [event, setEvent] = useState({
    name: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!previewSource) return;
    setLoader(true);
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedString) => {
    try {
      await fetch("https://infinite-temple-84022.herokuapp.com/addEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ banner: base64EncodedString, event }),
      })
        .then((res) => res.json())
        .then((data) => {
          history.push("/admin");
          toast.success("Event Added Successfully !!!");
        });
    } catch (error) {
      toast.error("Somethings went wrong !!!");
    }
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
            accept="image/*"
            onChange={handleFileInputChange}
            value={fileInputState}
          />
          {previewSource && <img src={previewSource} height="80px" alt="" />}
        </div>
        <div className="col-md-12">
          <button className="btn btn-primary btn-block">
            {loader && (
              <span
                className="spinner-grow mr-2 spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddEvent;
