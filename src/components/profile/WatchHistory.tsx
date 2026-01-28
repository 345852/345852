import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Clock, Trash2 } from 'lucide-react';

interface WatchHistoryProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

export function WatchHistory({ onBack, onMovieClick }: WatchHistoryProps) {
  const history = [
    {
      id: '1',
      title: '肖申克的救赎',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      watchedAt: '今天 18:30',
      progress: 85
    },
    {
      id: '2',
      title: '星际穿越',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      watchedAt: '昨天 20:15',
      progress: 100
    },
    {
      id: '3',
      title: '这个杀手不太冷',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      watchedAt: '2天前',
      progress: 45
    }
  ];

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">观看历史</h1>
      </div>

      {/* History List */}
      <div className="divide-y divide-gray-100">
        {history.map((item) => (
          <div key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
            <div
              onClick={() => onMovieClick(item.id)}
              className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
            >
              <ImageWithFallback
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.progress < 100 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <div
              onClick={() => onMovieClick(item.id)}
              className="flex-1 min-w-0 cursor-pointer"
            >
              <h3 className="mb-2">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{item.watchedAt}</span>
              </div>
              {item.progress < 100 && (
                <p className="text-xs text-gray-500 mt-1">
                  观看至 {item.progress}%
                </p>
              )}
            </div>
            <button className="p-2 text-gray-400 hover:text-red-500">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
