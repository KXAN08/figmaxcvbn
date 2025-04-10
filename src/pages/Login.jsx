import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ login: "", password: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      localStorage.setItem("token", "sample-token-12345")
      setLoading(false)
      navigate("/dashboard") // to‘g‘ri yo‘nalish
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Welcome, Log into your account</h1>
          <p className="mt-6 text-gray-500">It is our great pleasure to have you on board!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Enter your Login"
              required
              value={formData.login}
              onChange={handleChange}
              className="h-12 w-full border border-gray-300 px-4 rounded"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="h-12 w-full border border-gray-300 px-4 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#78c1ff] hover:bg-[#3498db] text-white font-semibold rounded"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-4">
            <Link to="/signup" className="text-[#78c1ff] hover:underline text-sm">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
