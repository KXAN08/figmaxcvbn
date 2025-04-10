import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TeacherDetail = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('teacherList')) || [];
    const selected = list.find(t => t.id === Number(id));
    setTeacher(selected);
  }, [id]);

  if (!teacher) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Details</h1>
      <p><strong>Name:</strong> {teacher.name}</p>
      <p><strong>Email:</strong> {teacher.email}</p>
      <p><strong>Phone:</strong> {teacher.phone}</p>
    </div>
  );
};

export default TeacherDetail;
