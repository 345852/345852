import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Star, Play, TrendingUp } from 'lucide-react';

interface HotMoviesProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function HotMovies({ onBack, onMovieClick }: HotMoviesProps) {
  const hotMovies = [
    {
      id: '1',
      title: '速度与激情9',
      poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.5,
      views: '1200万',
      genre: '动作 / 冒险',
      year: '2021',
      duration: '143分钟',
      rank: 1
    },
    {
      id: '2',
      title: '泰坦尼克号',
      poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.3,
      views: '2500万',
      genre: '剧情 / 爱情',
      year: '1997',
      duration: '194分钟',
      rank: 2
    },
    {
      id: '3',
      title: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.1,
      views: '1800万',
      genre: '科幻 / 冒险',
      year: '2014',
      duration: '169分钟',
      rank: 3
    },
    {
      id: '4',
      title: '复仇者联盟',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.8,
      views: '3200万',
      genre: '动作 / 科幻',
      year: '2012',
      duration: '143分钟',
      rank: 4
    },
    {
      id: '5',
      title: '盗梦空间',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.3,
      views: '2800万',
      genre: '科幻 / 悬疑',
      year: '2010',
      duration: '148分钟',
      rank: 5
    },
    {
      id: '6',
      title: '阿凡达',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.9,
      views: '4500万',
      genre: '科幻 / 冒险',
      year: '2009',
      duration: '162分钟',
      rank: 6
    },
    {
      id: '7',
      title: '教父',
      poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.3,
      views: '1500万',
      genre: '剧情 / 犯罪',
      year: '1972',
      duration: '175分钟',
      rank: 7
    },
    {
      id: '8',
      title: '蝙蝠侠：黑暗骑士',
      poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.2,
      views: '2100万',
      genre: '动作 / 犯罪',
      year: '2008',
      duration: '152分钟',
      rank: 8
    },
    {
      id: '9',
      title: '指环王3',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.2,
      views: '1700万',
      genre: '奇幻 / 冒险',
      year: '2003',
      duration: '201分钟',
      rank: 9
    },
    {
      id: '10',
      title: '楚门的世界',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.2,
      views: '1400万',
      genre: '剧情 / 科幻',
      year: '1998',
      duration: '103分钟',
      rank: 10
    }
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-red-500" />
          <h1 className="text-xl">热门推荐</h1>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          {hotMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick(movie.id)}
              className="cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
                <ImageWithFallback
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                {/* Rank Badge */}
                {movie.rank <= 3 && (
                  <div className={`absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    movie.rank === 1 ? 'bg-yellow-500' : movie.rank === 2 ? 'bg-gray-400' : 'bg-orange-600'
                  }`}>
                    {movie.rank}
                  </div>
                )}
                {/* Rating */}
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {movie.rating}
                </div>
                {/* Views */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  {movie.views}
                </div>
              </div>
              <h4 className="text-sm truncate mb-1">{movie.title}</h4>
              <p className="text-xs text-gray-500">{movie.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
