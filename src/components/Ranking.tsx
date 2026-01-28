import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Star, Medal, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface RankingProps {
  onMovieClick: (movieId: string) => void;
  onHomeClick?: () => void;
}

export function Ranking({ onMovieClick, onHomeClick }: RankingProps) {
  const tabs = ['电影榜', '剧集榜', '综艺榜', '动漫榜'];
  const [activeTab, setActiveTab] = useState('电影榜');
  const [displayCount, setDisplayCount] = useState(5);

  const rankingData = {
    '电影榜': [
      {
        rank: 1,
        id: '1',
        title: '肖申克的救赎',
        rating: 9.7,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 犯罪',
        year: '1994',
        change: 'same'
      },
      {
        rank: 2,
        id: '2',
        title: '霸王别姬',
        rating: 9.6,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 爱情',
        year: '1993',
        change: 'up'
      },
      {
        rank: 3,
        id: '3',
        title: '阿甘正传',
        rating: 9.5,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 爱情',
        year: '1994',
        change: 'down'
      },
      {
        rank: 4,
        id: '4',
        title: '泰坦尼克号',
        rating: 9.4,
        poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 爱情',
        year: '1997',
        change: 'up'
      },
      {
        rank: 5,
        id: '5',
        title: '这个杀手不太冷',
        rating: 9.4,
        poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 动作',
        year: '1994',
        change: 'same'
      },
      {
        rank: 6,
        id: '6',
        title: '辛德勒的名单',
        rating: 9.5,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 历史',
        year: '1993',
        change: 'up'
      },
      {
        rank: 7,
        id: '7',
        title: '盗梦空间',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '科幻 / 悬疑',
        year: '2010',
        change: 'up'
      },
      {
        rank: 8,
        id: '8',
        title: '星际穿越',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '科幻 / 冒险',
        year: '2014',
        change: 'same'
      },
      {
        rank: 9,
        id: '9',
        title: '楚门的世界',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 科幻',
        year: '1998',
        change: 'down'
      },
      {
        rank: 10,
        id: '10',
        title: '海上钢琴师',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 音乐',
        year: '1998',
        change: 'up'
      },
      {
        rank: 11,
        id: '11',
        title: '三傻大闹宝莱坞',
        rating: 9.1,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '喜剧 / 剧情',
        year: '2009',
        change: 'same'
      },
      {
        rank: 12,
        id: '12',
        title: '放牛班的春天',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 音乐',
        year: '2004',
        change: 'up'
      },
      {
        rank: 13,
        id: '13',
        title: '美丽人生',
        rating: 9.5,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 喜剧',
        year: '1997',
        change: 'up'
      },
      {
        rank: 14,
        id: '14',
        title: '千与千寻',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '动画 / 奇幻',
        year: '2001',
        change: 'same'
      },
      {
        rank: 15,
        id: '15',
        title: '控方证人',
        rating: 9.6,
        poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '悬疑 / 犯罪',
        year: '1957',
        change: 'down'
      },
      {
        rank: 16,
        id: '16',
        title: '大话西游',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '喜剧 / 爱情',
        year: '1995',
        change: 'up'
      },
      {
        rank: 17,
        id: '17',
        title: '教父',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 犯罪',
        year: '1972',
        change: 'same'
      },
      {
        rank: 18,
        id: '18',
        title: '龙猫',
        rating: 9.1,
        poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '动画 / 奇幻',
        year: '1988',
        change: 'up'
      },
      {
        rank: 19,
        id: '19',
        title: '忠犬八公',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情',
        year: '2009',
        change: 'same'
      },
      {
        rank: 20,
        id: '20',
        title: '触不可及',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 喜剧',
        year: '2011',
        change: 'up'
      }
    ],
    '剧集榜': [
      {
        rank: 1,
        id: '21',
        title: '权力的游戏',
        rating: 9.4,
        poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 奇幻',
        year: '2011',
        change: 'same'
      },
      {
        rank: 2,
        id: '22',
        title: '绝命毒师',
        rating: 9.5,
        poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 犯罪',
        year: '2008',
        change: 'up'
      },
      {
        rank: 3,
        id: '23',
        title: '请回答1988',
        rating: 9.6,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '剧情 / 家庭',
        year: '2015',
        change: 'down'
      },
    ],
    '综艺榜': [
      {
        rank: 1,
        id: '31',
        title: '向往的生活',
        rating: 8.8,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '真人秀',
        year: '2017',
        change: 'same'
      },
      {
        rank: 2,
        id: '32',
        title: '快乐大本营',
        rating: 8.5,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '娱乐',
        year: '1997',
        change: 'up'
      },
      {
        rank: 3,
        id: '33',
        title: '奔跑吧兄弟',
        rating: 8.3,
        poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '真人秀',
        year: '2014',
        change: 'same'
      },
    ],
    '动漫榜': [
      {
        rank: 1,
        id: '41',
        title: '千与千寻',
        rating: 9.3,
        poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '动画 / 奇幻',
        year: '2001',
        change: 'same'
      },
      {
        rank: 2,
        id: '42',
        title: '龙猫',
        rating: 9.1,
        poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '动画 / 奇幻',
        year: '1988',
        change: 'up'
      },
      {
        rank: 3,
        id: '43',
        title: '海贼王',
        rating: 9.2,
        poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        genre: '动画 / 冒险',
        year: '1999',
        change: 'same'
      },
    ]
  };

  const rankingList = rankingData[activeTab as keyof typeof rankingData] || rankingData['电影榜'];
  const displayedMovies = rankingList.slice(0, displayCount);
  const hasMore = displayCount < rankingList.length;

  const handleLoadMore = () => {
    setDisplayCount(Math.min(displayCount + 5, 20));
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b">
        <div className="flex items-center gap-3">
          {onHomeClick && (
            <button
              onClick={onHomeClick}
              className="p-1.5 -ml-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <h1 className="text-lg font-medium text-gray-800">
            豆瓣电影Top250
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
              activeTab === tab
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Ranking List */}
      <div className="px-4 py-3">
        {displayedMovies.map((item, index) => (
          <div
            key={item.rank}
            onClick={() => onMovieClick(item.id)}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50 -mx-4 px-4 transition-colors"
          >
            {/* Rank Number */}
            <div className="flex-shrink-0 w-8 text-center">
              <span
                className={`text-2xl ${
                  index < 3 ? 'text-red-500' : 'text-gray-400'
                }`}
              >
                {item.rank}
              </span>
            </div>

            {/* Poster */}
            <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="mb-1 truncate">{item.title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {item.rating}
                </span>
                <span>·</span>
                <span>{item.year}</span>
              </div>
              <p className="text-xs text-gray-500">{item.genre}</p>
            </div>

            {/* Change Indicator */}
            <div className="flex-shrink-0">
              {item.change === 'up' && (
                <div className="flex items-center gap-1 text-red-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">↑</span>
                </div>
              )}
              {item.change === 'down' && (
                <div className="flex items-center gap-1 text-green-500">
                  <span className="text-xs">↓</span>
                </div>
              )}
              {item.change === 'same' && (
                <div className="text-gray-400 text-xs">-</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="px-4 py-3">
          <button 
            onClick={handleLoadMore}
            className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
          >
            加载更多
          </button>
        </div>
      )}
    </div>
  );
}