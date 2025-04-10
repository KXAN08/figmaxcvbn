"use client"
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, Users, BookOpen, Settings, LogOut, CreditCard, FileText } from "lucide-react"

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(true)

  const currentPath = location.pathname

  return (
    <div className={`bg-[#152259] text-white flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-60"}`}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
        <div className="p-4 flex items-center justify-between">
        <div className="flex items-center justify-center w-full">
          {isCollapsed ? (
            <img src="/img/logo-icon.png" alt="Logo icon" className="w-10 h-10" />
          ) : (
            <img src="/img/logo.png" alt="Full logo" className="w-28 h-auto" />
          )}
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
          <Menu size={20} />
        </button>
      </div>
      
        )}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white">
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem
          icon={<BookOpen size={20} />}
          label="Dashboard"
          active={currentPath === "/dashboard"}
          collapsed={isCollapsed}
          onClick={() => navigate("/dashboard")}
        />
        <NavItem
          icon={<Users size={20} />}
          label="Teachers"
          active={currentPath.startsWith("/teachers")}
          collapsed={isCollapsed}
          onClick={() => navigate("/teachers")}
        />
        <NavItem
          icon={<BookOpen size={20} />}
          label="Students"
          active={currentPath === "/students"}
          collapsed={isCollapsed}
          onClick={() => navigate("/students")}
        />
        <NavItem
          icon={<CreditCard size={20} />}
          label="Billing"
          active={currentPath === "/billing"}
          collapsed={isCollapsed}
          onClick={() => navigate("/billing")}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          active={currentPath === "/settings"}
          collapsed={isCollapsed}
          onClick={() => navigate("/settings")}
        />
        <NavItem
          icon={<FileText size={20} />}
          label="Exams"
          active={currentPath === "/exams"}
          collapsed={isCollapsed}
          onClick={() => navigate("/exams")}
        />
      </nav>

      <div className="p-4">
        <NavItem
          icon={<LogOut size={20} />}
          label="Log out"
          collapsed={isCollapsed}
          onClick={() => {
            localStorage.removeItem("token")
            navigate("/login")
          }}
        />
      </div>
    </div>
  )
}

function NavItem({ icon, label, onClick, active, collapsed }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md transition-colors
        ${active ? "bg-primary text-white" : "hover:bg-secondary-lighter"}`}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </button>
  )
}

export default Sidebar
