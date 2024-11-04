export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  photos: string[];
  isPremium: boolean;
  isVerified: boolean;
}

export interface Match {
  id: string;
  user: User;
  matchPercentage: number;
  mutualInterests: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}