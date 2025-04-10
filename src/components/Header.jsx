import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()



  
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/Login") // yoki navigate("/")
  }

  

  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-secondary">
      <div className="font-semibold">Manga School</div>
      <button
      onClick={handleLogout}
      className="btn-outline bg-[#509CDB] w-[120px] h-[40px] rounded-2xl text-white hover:text-[#509CDB] hover:bg-white hover:border-2 hover:border-[#509CDB]"
    >
      Log out
    </button>
    </header>
  )
}

export default Header
