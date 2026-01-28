import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Star } from 'lucide-react';

interface MyCollectionsProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function MyCollections({ onBack, onMovieClick }: MyCollectionsProps) {
  const collections = [
    {
      id: '1',
      title: '肖申克的救赎',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.7,
      year: '1994',
      collectedAt: '2024-01-10'
    },
    {
      id: '2',
      title: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.3,
      year: '2014',
      collectedAt: '2024-01-08'
    },
    {
      id: '3',
      title: '这个杀手不太冷',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.4,
      year: '1994',
      collectedAt: '2024-01-05'
    }
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">我的收藏</h1>
      </div>

      {/* Collections Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          {collections.map((movie) => (
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
              </div>
              <h4 className="text-sm truncate mb-1">{movie.title}</h4>
              <p className="text-xs text-gray-500">{movie.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
