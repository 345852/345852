import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Star } from 'lucide-react';

interface MyRatingsProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function MyRatings({ onBack, onMovieClick }: MyRatingsProps) {
  const ratings = [
    {
      id: '1',
      title: '肖申克的救赎',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      myRating: 10,
      ratedAt: '2024-01-10'
    },
    {
      id: '2',
      title: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      myRating: 9,
      ratedAt: '2024-01-08'
    },
    {
      id: '3',
      title: '这个杀手不太冷',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      myRating: 9,
      ratedAt: '2024-01-05'
    }
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">我的评分</h1>
      </div>

      {/* Ratings List */}
      <div className="divide-y divide-gray-100">
        {ratings.map((item) => (
          <div
            key={item.id}
            onClick={() => onMovieClick(item.id)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="mb-2">{item.title}</h3>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(10)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.myRating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">{item.ratedAt}</p>
            </div>
            <div className="text-2xl text-red-500">{item.myRating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
