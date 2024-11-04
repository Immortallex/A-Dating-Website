import { Heart, MessageCircle, Star, X } from 'lucide-react';
import type { Match } from '../types';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const { user, matchPercentage, mutualInterests } = match;

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="h-64 w-full object-cover"
        src={user.photos[0]}
        alt={user.name}
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {user.name}, {user.age}
              {user.isPremium && (
                <Star className="inline-block ml-2 h-5 w-5 text-yellow-400" />
              )}
            </h3>
            <p className="text-gray-600">{user.location}</p>
          </div>
          <span className="text-lg font-bold text-rose-500">{matchPercentage}% Match</span>
        </div>
        
        <p className="mt-2 text-gray-600 line-clamp-2">{user.bio}</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {mutualInterests.map((interest) => (
            <span
              key={interest}
              className="px-2 py-1 text-sm bg-rose-100 text-rose-700 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <button className="flex-1 mr-2 flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
            <X className="h-5 w-5 mr-1" />
            Pass
          </button>
          <button className="flex-1 mr-2 flex items-center justify-center py-2 px-4 bg-rose-500 text-white rounded-full hover:bg-rose-600">
            <Heart className="h-5 w-5 mr-1" />
            Like
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}