import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("teacherList")) || [];
    const found = list.find((t) => t.id.toString() === id);
    setTeacher(found);
  }, [id]);

  if (!teacher) return <p>Loading teacher info...</p>;

  return (
    <div className="p-6">
      <Link to="/teachers" className="text-blue-500 underline mb-4 block">
        ← Back to Teachers
      </Link>
      <h2 className="text-2xl font-bold mb-2">Teacher Profile</h2>
      <p><strong>Name:</strong> {teacher.name}</p>
      <p><strong>Email:</strong> {teacher.email}</p>
      <p><strong>Phone:</strong> {teacher.phone}</p>
      <p><strong>Class:</strong> {teacher.class}</p>
      <p><strong>Subject:</strong> {teacher.subject}</p>
      <p><strong>Gender:</strong> {teacher.gender}</p>
      <p><strong>Age:</strong> {teacher.age}</p>
      <p><strong>About:</strong> {teacher.about}</p>
    </div>
  );
};

export default TeacherProfile;
