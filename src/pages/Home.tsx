import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Calendar, Users, BookOpen } from 'lucide-react'

const Home: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Murder Mystery Event Scheduler</h1>
      <p className="text-xl mb-8">Plan and organize thrilling murder mystery events with friends!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Schedule Events</h2>
          <p>Create and manage exciting murder mystery events.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Invite Friends</h2>
          <p>Easily invite and manage participants for your events.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Explore Scenarios</h2>
          <p>Choose from a variety of intriguing murder mystery scenarios.</p>
        </div>
      </div>

      {user ? (
        <Link to="/events/create" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Create New Event
        </Link>
      ) : (
        <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Login to Get Started
        </Link>
      )}
    </div>
  )
}

export default Home