import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Calendar, User, LogOut } from 'lucide-react'

const Header: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Calendar className="mr-2" />
          Murder Mystery Scheduler
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/events" className="hover:text-indigo-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-indigo-200 flex items-center">
                    <User className="mr-1" size={18} />
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:text-indigo-200 flex items-center">
                    <LogOut className="mr-1" size={18} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-indigo-200">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header