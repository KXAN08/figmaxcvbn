import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { ProSidebar, MenuItem } from 'react-pro-sidebar';

function fetchAdd(fullname, email, number, password) {
  const formdata = new FormData();
  formdata.append('fullname', fullname);
  formdata.append('email', email);
  formdata.append('phone_number', `+998${number}`);
  formdata.append('password', password);
  formdata.append('Role', 'USER');
  formdata.append('is_verified', 'false');

  return fetch('https://skrinshoter.ru/sUWzKfusgqB')
    .then(response => response.blob())
    .then(blob => {
      formdata.append('image', blob, 'fixed-image.jpg');

      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      return fetch('https://api.ashyo.fullstackdev.uz/users/add', requestOptions);
    });
}

const Teachers = () => {
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('teacherList');
    if (stored) {
      setTeachers(JSON.parse(stored));
    }
  }, []);

  const handleAddTeacher = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newTeacher = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      class: formData.get('class'),
      subject: formData.get('subject'),
      gender: formData.get('gender'),
      age: formData.get('age'),
      about: formData.get('about'),
    };

    fetchAdd(newTeacher.name, newTeacher.email, newTeacher.phone, newTeacher.password)
      .then(response => response.json())
      .then(() => {
        const updatedList = [...teachers, newTeacher];
        setTeachers(updatedList);
        localStorage.setItem('teacherList', JSON.stringify(updatedList));
        setShowForm(false);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex">
      <ProSidebar collapsed={true}>
        <Menu iconShape="square">
          <MenuItem icon={<Menu />}>Dashboard</MenuItem>
        </Menu>
      </ProSidebar>

      <div className="flex flex-col h-full w-full">
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-semibold text-gray-800">Teachers</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add Teachers
          </button>
        </div>

        {showForm ? (
          <div className="p-6">
            <form onSubmit={handleAddTeacher} className="grid gap-4 grid-cols-2">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="phone" placeholder="Phone" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="text" name="class" placeholder="Class" />
              <input type="text" name="subject" placeholder="Subject" />
              <select name="gender">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="number" name="age" placeholder="Age" />
              <textarea name="about" placeholder="About" className="col-span-2" rows="3" />
              <button type="submit" className="col-span-2 bg-green-500 text-white py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="px-6 pb-4">
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 p-2.5"
              placeholder="Search for a teacher"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {teachers.length === 0 ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">No Teachers</h2>
              <p className="text-gray-600 text-center">Please add teachers to see them here.</p>
            </>
          ) : (
            <ul className="space-y-2">
              {teachers.map((teacher) => (
                <li key={teacher.id}>
                  <Link to={`/teacher/${teacher.id}`} className="text-blue-600 hover:underline">
                    {teacher.name} - {teacher.email}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
