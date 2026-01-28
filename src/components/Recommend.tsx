import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Share2, Bookmark, Trophy, Search, Filter, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useShare } from '../contexts/ShareContext';

interface RecommendProps {
  onMovieClick: (movieId: string) => void;
  onHomeClick?: () => void;
}

export function Recommend({ onMovieClick, onHomeClick }: RecommendProps) {
  const { openShare } = useShare();
  const [searchQuery, setSearchQuery] = useState('');
  const [itemStates, setItemStates] = useState<{[key: string]: {liked: boolean, bookmarked: boolean, likes: number}}>({
    '1': { liked: false, bookmarked: false, likes: 1234 },
    '2': { liked: false, bookmarked: false, likes: 2341 },
    '3': { liked: false, bookmarked: true, likes: 3456 }
  });

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
      title: '电影实时热点内心',
      subtitle: '一圈看到你',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.5,
      tags: ['剧情', '科幻', '冒险'],
      description: '这部电影带给观众前所未有的视觉震撼，剧情扣人心弦，人物刻画深入人心，是不容错过的佳作。导演运用创新的叙事手法...',
      comments: 567
    },
    {
      id: '2',
      title: '今年最佳动作片',
      subtitle: '速度与激情',
      poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.8,
      tags: ['动作', '犯罪', '惊悚'],
      description: '动作场面精彩刺激，特效制作精良，剧情紧凑不拖沓。主演们的精湛演技和导演的精心编排，让每一个镜头都充满张力...',
      comments: 892
    },
    {
      id: '3',
      title: '感动千万人的爱情故事',
      subtitle: '时光倒流',
      poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.2,
      tags: ['爱情', '剧情', '文艺'],
      description: '一个关于爱与时光的美好故事，细腻的情感表达，优美的画面呈现，让人回味无穷。电影通过独特的视角展现了爱情的真谛...',
      comments: 1234
    }
  ];

  return (
    <div className="pb-4">
      {/* Header: 返回 + 搜索框 + 筛选 */}
      <div className="px-4 pt-4 pb-3 border-b">
        <div className="flex items-center gap-2">
          {onHomeClick && (
            <button
              onClick={onHomeClick}
              className="p-1.5 -ml-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2.5 min-w-0">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="寻找你的爱"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm min-w-0"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
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