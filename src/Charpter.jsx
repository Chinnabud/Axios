import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Chapter = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const callApi = async () => {
    try {
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      const data_format = res.data.data;
      setData(data_format);
    } catch (err) {
      setError("ไม่สามารถโหลดข้อมูลได้");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Chapter {id}
      </h1>
      {loading && <p className="text-center text-gray-500">กำลังโหลดข้อมูล...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading &&
          !error &&
          data.map((c) => (
            <CourseCard
              key={c.course_id}
              title={c.ch_title}
              views={c.ch_view}
              timeTotal={c.ch_timetotal}
              url={c.ch_url}
            />
          ))}
      </div>
    </div>
  );
};

const CourseCard = ({ title, views, timeTotal, url }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <iframe
        className="w-full h-40 rounded-lg mb-4"
        src={`https://www.youtube.com/embed/${url}`}
        title={title}
        allowFullScreen
      ></iframe>
      <div className="text-sm text-gray-600">
        
        <p className="mb-1">👁 Views: {views}</p>
        <p>⏳ Total Time: {timeTotal} minutes</p>{/* บรรทัดนี้อยากให้ดูเหมือนยูทูป เลยถามแชทว่าทำยังไง */}
      </div>
    </div>
  );
};

export default Chapter;
