import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Welcome to your dashboard</h1>
        <p className="text-gray-500 text-text-secondary">Manga School Management System</p>
      </div>

      <div className="grid gap-6">
        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="h-6 w-6 text-primary">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          title="Add other admins"
          description="Manage admins for your school system."
          tags={["Admin", "Users", "Management"]}
          onClick={() => navigate("/add-admin")}
        />

        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="h-6 w-6 text-accent">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          }
          title="Add classes"
          description="Create and manage your school's classes."
          tags={["Classes", "Courses", "Schedule"]}
          onClick={() => navigate("/add-class")}
        />

        <Card
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="h-6 w-6 text-primary">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          }
          title="Add students"
          description="Enroll new students into your system."
          tags={["Students", "Enrollment", "Registration"]}
          onClick={() => navigate("/students")}
        />
      </div>
    </div>
  )
}

function Card({ icon, title, description, tags, onClick }) {
  return (
    <div onClick={onClick} className="manga-card p-6 cursor-pointer hover:bg-gray-50 transition">
      <div className="flex items-start gap-4">
        <div className="bg-secondary-lighter p-3 rounded-full">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-xl font-manga text-primary">{title}</h3>
          <p className="text-text-secondary">{description}</p>
          <div className="mt-3">
            {tags.map((tag, index) => (
              <span key={index} className="manga-tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
