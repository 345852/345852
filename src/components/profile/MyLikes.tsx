import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Heart, Star, Trash2 } from 'lucide-react';

interface MyLikesProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
  likedMovies: Set<string>;
}

export function MyLikes({ onBack, onMovieClick, likedMovies }: MyLikesProps) {
  const allMovies = [
    {
      id: '1',
      title: '肖申克的救赎',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?w=1080',
      rating: 9.7,
      year: '1994',
      likedAt: '2024-01-15 14:30'
    },
    {
      id: '2',
      title: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?w=1080',
      rating: 9.3,
      year: '2014',
      likedAt: '2024-01-12 20:15'
    },
    {
      id: '3',
      title: '这个杀手不太冷',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?w=1080',
      rating: 9.4,
      year: '1994',
      likedAt: '2024-01-10 16:45'
    },
    {
      id: '4',
      title: '盗梦空间',
      poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1080',
      rating: 9.2,
      year: '2010',
      likedAt: '2024-01-08 11:20'
    },
    {
      id: '5',
      title: '楚门的世界',
      poster: 'https://images.unsplash.com/photo-1489599848485-4ee3db9d3eb4?w=1080',
      rating: 9.1,
      year: '1998',
      likedAt: '2024-01-05 09:30'
    },
    {
      id: '6',
      title: '阿甘正传',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1080',
      rating: 9.5,
      year: '1994',
      likedAt: '2024-01-03 18:00'
    }
  ];

  const filteredMovies = allMovies.filter(movie => likedMovies.has(movie.id));

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">点赞记录</h1>
      </div>

      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          {filteredMovies.map((movie) => (
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
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {movie.rating}
                </div>
                <div className="absolute top-2 left-2 bg-red-500/90 p-1.5 rounded-full">
                  <Heart className="w-3 h-3 fill-white" />
                </div>
              </div>
              <h4 className="text-sm truncate mb-1">{movie.title}</h4>
              <p className="text-xs text-gray-500">{movie.year}</p>
            </div>
          ))}
        </div>
      </div>

      {filteredMovies.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <Heart className="w-16 h-16 text-gray-300 mb-4" />
          <p className="text-gray-500 mb-2">还没有点赞过任何电影</p>
          <p className="text-sm text-gray-400">去发现更多精彩电影吧</p>
        </div>
      )}
    </div>
  );
}
