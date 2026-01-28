import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Heart, Share2, Bookmark, Trophy } from 'lucide-react';
import { useState } from 'react';
import { useShare } from '../contexts/ShareContext';

interface TuigejiProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function Tuigeji({ onBack, onMovieClick }: TuigejiProps) {
  const { openShare } = useShare();
  const [itemStates, setItemStates] = useState<{[key: string]: {liked: boolean, bookmarked: boolean, likes: number}}>(({
    '1': { liked: false, bookmarked: false, likes: 856 },
    '2': { liked: false, bookmarked: false, likes: 1234 },
    '3': { liked: false, bookmarked: true, likes: 2341 },
    '4': { liked: false, bookmarked: false, likes: 987 }
  }));

  const handleLike = (id: string) => {
    setItemStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        liked: !prev[id].liked,
        likes: prev[id].liked ? prev[id].likes - 1 : prev[id].likes + 1
      }
    }));
  };

  const handleBookmark = (id: string) => {
    setItemStates(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        bookmarked: !prev[id].bookmarked
      }
    }));
    const state = itemStates[id];
    if (!state.bookmarked) {
      alert('已添加到收藏');
    } else {
      alert('已取消收藏');
    }
  };

  const handleShare = () => {
    openShare({ title: '强推个片' });
  };

  const recommendations = [
    {
      id: '1',
      title: '本周热门榜单推荐',
      subtitle: '今日热度飙升影片',
      poster: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGZpbG0lMjBwb3N0ZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.3,
      tags: ['动作', '惊悚', '科幻'],
      description: '一部震撼人心的视觉盛宴，精彩的故事情节配合顶级的特效制作，带给观众极致的观影体验。导演巧妙的叙事手法...',
      comments: 432
    },
    {
      id: '2',
      title: '年度必看佳片',
      subtitle: '影迷强力推荐',
      poster: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBwb3N0ZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.1,
      tags: ['剧情', '悬疑', '犯罪'],
      description: '一个关于人性和正义的深刻故事，剧情紧凑扣人心弦，演员们的精湛演技让每个角色都栩栩如生，是今年不容错过的佳作...',
      comments: 678
    },
    {
      id: '3',
      title: '经典重映特别推荐',
      subtitle: '重温经典时刻',
      poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNpbmVtYXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.5,
      tags: ['经典', '剧情', '文艺'],
      description: '经典中的经典，时间的沉淀让这部电影更显珍贵。精妙的台词、完美的镜头语言、深刻的主题表达，值得反复品味...',
      comments: 892
    },
    {
      id: '4',
      title: '独家推荐新片',
      subtitle: '上映即爆款',
      poster: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNsYXBwZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.9,
      tags: ['喜剧', '冒险', '奇幻'],
      description: '一部充满想象力的奇幻冒险电影，轻松幽默的剧情中蕴含着深刻的人生哲理，适合全家一起观看的温馨佳作...',
      comments: 567
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-4 pt-4 pb-3 border-b">
        <div className="flex items-center gap-3 mb-3">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl flex-1">推了个荐</h1>
        </div>
        <p className="text-sm text-gray-600">精选热门影片为你推荐</p>
      </div>

      {/* Recommendation Cards */}
      <div className="py-4 space-y-6">
        {recommendations.map((item) => (
          <div 
            key={item.id} 
            className="px-4"
          >
            {/* Header Info */}
            <div 
              onClick={() => onMovieClick(item.id)}
              className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div>
                <h3 className="text-xl mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-red-500">
                <Trophy className="w-5 h-5 fill-red-500" />
                <span className="text-lg">{item.rating}</span>
              </div>
            </div>

            {/* Poster Image */}
            <div 
              onClick={() => onMovieClick(item.id)}
              className="relative h-64 rounded-xl overflow-hidden mb-3 cursor-pointer hover:opacity-95 transition-opacity"
            >
              <ImageWithFallback
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">
              {item.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <button 
                onClick={() => handleLike(item.id)}
                className={`flex items-center gap-2 ${
                  itemStates[item.id]?.liked ? 'text-red-500' : 'text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${itemStates[item.id]?.liked ? 'fill-red-500' : ''}`} />
                <span className="text-sm">{itemStates[item.id]?.likes || 0}</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm">{item.comments}</span>
              </button>
              <button
                onClick={() => handleBookmark(item.id)}
                className={`flex items-center gap-2 ${
                  itemStates[item.id]?.bookmarked ? 'text-red-500' : 'text-gray-600'
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 ${itemStates[item.id]?.bookmarked ? 'fill-red-500' : ''}`}
                />
                <span className="text-sm">
                  {itemStates[item.id]?.bookmarked ? '已收藏' : '收藏'}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="px-4 py-3">
        <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg text-sm">
          加载更多推荐
        </button>
      </div>
    </div>
  );
}
