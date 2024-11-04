import { Bell, Heart, MessageCircle, User as UserIcon } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isLoggedIn] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-500" strokeWidth={2.5} fill="currentColor" />
            <span className="ml-2 text-2xl font-black tracking-tight text-gray-900">NETDATE</span>
          </div>
          
          {isLoggedIn ? (
            <nav className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-3 w-3 bg-rose-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <UserIcon className="h-6 w-6" />
              </button>
            </nav>
          ) : (
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Login
              </button>
              <button className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition font-medium shadow-sm hover:shadow-md">
                Sign Up Free
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}