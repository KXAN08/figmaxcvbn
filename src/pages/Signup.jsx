import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", login: "", password: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Account created successfully! You can now log in.")
      navigate("/login")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Welcome, Sign up</h1>
          <p className="mt-6 text-gray-500">Create your account and join us!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-12 w-full border border-gray-300 px-4 rounded"
            />
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Create your Login"
              required
              value={formData.login}
              onChange={handleChange}
              className="h-12 w-full border border-gray-300 px-4 rounded"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create your Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="h-12 w-full border border-gray-300 px-4 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#3498db] hover:bg-[#2980b9] text-white font-semibold rounded"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-[#3498db] hover:underline text-sm">
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
