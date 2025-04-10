"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddTeacher() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    class: "",
    gender: "",
    subject: "",
    age: "",
    about: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTeacher = {
      id: Date.now(),
      ...formData,
    }

    const stored = JSON.parse(localStorage.getItem("teacherList")) || []
    stored.push(newTeacher)
    localStorage.setItem("teacherList", JSON.stringify(stored))

    alert(`Teacher ${formData.fullName} added successfully!`)
    navigate("/teachers")
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Add teacher</h1>
        <button type="submit" form="add-teacher-form" className="btn-primary">
          Save
        </button>
      </div>

      <form id="add-teacher-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          {/* Class */}
          <div className="space-y-2">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Class</option>
              <option value="JSS 1">JSS 1</option>
              <option value="JSS 2">JSS 2</option>
              <option value="JSS 3">JSS 3</option>
              <option value="SS 1">SS 1</option>
              <option value="SS 2">SS 2</option>
              <option value="SS 3">SS 3</option>
            </select>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Geography">Geography</option>
              <option value="History">History</option>
              <option value="Economics">Economics</option>
              <option value="French">French</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        {/* About */}
        <div className="space-y-2">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About
          </label>
          <textarea
            id="about"
            name="about"
            rows={6}
            value={formData.about}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Image Upload (Future Implementation) */}
        <div>
          <h3 className="text-lg font-medium mb-2">Import Img</h3>
          <button type="button" className="border px-4 py-2 rounded-md">
            Upload Image
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTeacher
