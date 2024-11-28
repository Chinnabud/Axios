import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = res.data.data;
    setData(data_format);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Courses
      </h1>
      <hr className="my-4 border-gray-600" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition duration-300">
      <img
        src={props.picture}
        alt={props.title}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h2 className="text-xl font-semibold text-white">{props.title}</h2>
      <p className="text-gray-400 text-sm text-center mb-4">{props.detail}</p>
      <NavLink
        to={"/course/" + props.id}
        className="text-blue-400 hover:underline"
      >
        เนื้อหาในหลักสูตร
      </NavLink>
    </div>
  );
};

export default Course;
