import React, { useEffect, useState } from "react";

const VolunteerList = () => {
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
        <tr>
          <td>Kh Rakib</td>
          <td>khr.rakib@gmail.com</td>
          <td>22-10-2020</td>
          <td> Organize books at the library.</td>
          <td className="float-right">
            <button className="btn btn-danger btn-sm">
              <i className="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default VolunteerList;
