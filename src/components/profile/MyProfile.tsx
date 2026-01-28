import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Calendar, MapPin, Edit2, Star, Film, Heart, MessageCircle } from 'lucide-react';

interface MyProfileProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
  onNavigate?: (page: string) => void;
  onEdit?: () => void;
}

export function MyProfile({ onBack, onMovieClick, onNavigate, onEdit }: MyProfileProps) {
  const userInfo = {
    name: '影迷小王',
    avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: '热爱电影，享受生活 🎬',
    location: '北京',
    joinDate: '2023年5月',
    stats: {
      watched: 328,
      rated: 156,
      collections: 89,
      reviews: 45
    }
  };

  const recentReviews = [
    {
      id: '1',
      movieTitle: '肖申克的救赎',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 10,
      review: '永恒的经典！关于希望与自由的最佳诠释，每次重温都有新的感悟。',
      date: '2024-01-15',
      likes: 128
    },
    {
      id: '2',
      movieTitle: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9,
      review: '诺兰的又一力作，视觉效果震撼，情感细腻动人。',
      date: '2024-01-10',
      likes: 89
    }
  ];

  return (
    <div className="pb-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 bg-white border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">个人主页</h1>
        <div className="flex-1"></div>
        <button 
          onClick={onEdit}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Edit2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Profile Header */}
      <div className="bg-white px-4 py-6 mb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <ImageWithFallback
              src={userInfo.avatar}
              alt={userInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl mb-2">{userInfo.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{userInfo.bio}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {userInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {userInfo.joinDate}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100">
          <button 
            onClick={() => onNavigate?.('history')}
            className="text-center hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <div className="text-lg mb-1">{userInfo.stats.watched}</div>
            <div className="text-xs text-gray-500">看过</div>
          </button>
          <button 
            onClick={() => onNavigate?.('ratings')}
            className="text-center hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <div className="text-lg mb-1">{userInfo.stats.rated}</div>
            <div className="text-xs text-gray-500">评分</div>
          </button>
          <button 
            onClick={() => onNavigate?.('collections')}
            className="text-center hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <div className="text-lg mb-1">{userInfo.stats.collections}</div>
            <div className="text-xs text-gray-500">收藏</div>
          </button>
          <button 
            onClick={() => onNavigate?.('comments')}
            className="text-center hover:bg-gray-50 rounded-lg p-2 transition-colors"
          >
            <div className="text-lg mb-1">{userInfo.stats.reviews}</div>
            <div className="text-xs text-gray-500">影评</div>
          </button>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white px-4 py-4">
        <h3 className="mb-4">最近评价</h3>
        <div className="space-y-4">
          {recentReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex gap-3 mb-3">
                <div
                  onClick={() => onMovieClick(review.id)}
                  className="w-16 h-22 rounded overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <ImageWithFallback
                    src={review.poster}
                    alt={review.movieTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    onClick={() => onMovieClick(review.id)}
                    className="mb-1 cursor-pointer hover:text-red-500"
                  >
                    {review.movieTitle}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating / 2
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{review.rating}.0</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{review.review}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span>{review.date}</span>
                    <button className="flex items-center gap-1 hover:text-red-500">
                      <Heart className="w-3 h-3" />
                      {review.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-500">
                      <MessageCircle className="w-3 h-3" />
                      回复
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}