import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const TeachersList = () => {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem("teacherList")
    if (stored) {
      setTeachers(JSON.parse(stored))
    }
  }, [])

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Teachers</h2>
        <Link to="/teachers/add" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Teacher
        </Link>
      </div>
      {teachers.length === 0 ? (
        <p>No teachers yet. Add some!</p>
      ) : (
        <ul className="space-y-2">
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              <Link
                to={`/teachers/${teacher.id}`}
                className="block p-2 border rounded hover:bg-gray-100"
              >
                {teacher.name} - {teacher.email}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TeachersList
