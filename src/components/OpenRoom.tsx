import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, Grid3x3, X, Filter, Users, TrendingUp, Clock, Film, Home as HomeIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface OpenRoomProps {
  onClose: () => void;
  isOpen: boolean;
  onRoomClick: (roomId: string) => void;
}

interface Room {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  viewers?: number;
}

export function OpenRoom({ onClose, isOpen, onRoomClick }: OpenRoomProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    { name: '看个人脉', icon: Users },
    { name: '推了个荐', icon: TrendingUp },
    { name: '约定时', icon: Clock },
    { name: '强推个片', icon: Film },
    { name: '开个房间', icon: HomeIcon, active: true }
  ];

  const rooms: Room[] = [
    {
      id: '1',
      title: '邀你一起追新作的人喂饱',
      thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
      duration: '12:10',
    },
    {
      id: '2',
      title: '邀你一起追新作的人喂饱',
      thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHNjcmVlbnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      duration: '121:10',
    },
    {
      id: '3',
      title: '邀你一起追新作的人喂饱',
      thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMG5pZ2h0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
      duration: '58:29',
    },
    {
      id: '4',
      title: '分享你谈人喂虫什么小姐姐',
      thumbnail: 'https://images.unsplash.com/photo-1574267432644-f38ce4b5f3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      duration: '121:10',
    },
    {
      id: '5',
      title: '暮夜菩萨十二世记号自己去找素燃',
      thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNsYXBwZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
      duration: '8:38',
    },
    {
      id: '6',
      title: '一起温入观看您温暖时刻',
      thumbnail: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNpbmVtYXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      duration: '121:10',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setSearchQuery('');
      // Delay hiding to allow animation to complete
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-50 z-50 max-w-md mx-auto rounded-t-3xl overflow-hidden transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '85vh' }}
      >
        {/* Handle Bar */}
        <div className="bg-white pt-2 pb-3">
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto"></div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white px-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2.5">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜寻你爱"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
            <button className="p-2.5 hover:bg-gray-100 rounded-lg">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto px-4 pb-6" style={{ maxHeight: 'calc(85vh - 120px)' }}>
          {/* Rooms Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-xl overflow-hidden cursor-pointer" onClick={() => onRoomClick(room.id)}>
                <div className="relative bg-gray-200" style={{ height: '120px' }}>
                  <ImageWithFallback
                    src={room.thumbnail}
                    alt={room.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {room.duration}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700 line-clamp-2">{room.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}