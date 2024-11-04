import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import SuccessStories from './components/SuccessStories';
import MatchCard from './components/MatchCard';
import type { Match } from './types';

const sampleMatch: Match = {
  id: '1',
  user: {
    id: '1',
    name: 'Sarah',
    age: 28,
    location: 'New York, NY',
    bio: 'Adventure seeker and coffee enthusiast. Looking for someone to explore the city with!',
    interests: ['Travel', 'Coffee', 'Photography', 'Hiking'],
    photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'],
    isPremium: true,
    isVerified: true
  },
  matchPercentage: 95,
  mutualInterests: ['Travel', 'Photography']
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MatchCard match={sampleMatch} />
            {/* More match cards would be dynamically rendered here */}
          </div>
        </div>

        <SuccessStories />
      </div>
    </div>
  );
}

export default App;