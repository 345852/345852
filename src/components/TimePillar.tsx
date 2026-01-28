import { ArrowLeft, Circle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TimePillarProps {
  onBack: () => void;
  onMovieClick: (movieId: string) => void;
}

interface TimeEvent {
  year: number;
  title: string;
  subtitle?: string;
  movieId?: string;
}

export function TimePillar({ onBack, onMovieClick }: TimePillarProps) {
  const timeEvents: TimeEvent[] = [
    {
      year: 2022,
      title: '世界杯开幕',
      subtitle: '卡塔尔世界杯',
      movieId: 'world-cup-2022'
    },
    {
      year: 2022,
      title: '春晚播出',
      subtitle: '虎年春晚',
      movieId: 'spring-festival-2022'
    },
    {
      year: 2014,
      title: '黄金时代、迷途的人',
      subtitle: '新作品上映',
      movieId: 'golden-era-2014'
    },
    {
      year: 2009,
      title: '建国大业、在闪烁的阳光下',
      subtitle: '年度大片',
      movieId: 'founding-of-republic'
    },
    {
      year: 1994,
      title: '肖申克的救赎',
      subtitle: '影史经典诞生',
      movieId: '1'
    },
    {
      year: 1994,
      title: '阿甘正传、狮子王',
      subtitle: '走红全球',
      movieId: 'forrest-gump'
    },
    {
      year: 1977,
      title: '星球大战',
      subtitle: '开启科幻新纪元',
      movieId: 'star-wars'
    },
    {
      year: 1972,
      title: '教父',
      subtitle: '黑帮电影巅峰',
      movieId: 'godfather'
    },
    {
      year: 1968,
      title: '2001太空漫游',
      subtitle: '科幻史诗',
      movieId: '2001-space-odyssey'
    },
    {
      year: 1954,
      title: '指环王诞生记',
      subtitle: '奇幻文学经典',
      movieId: 'lotr-birth'
    },
    {
      year: 1939,
      title: '乱世佳人',
      subtitle: '好莱坞黄金时代',
      movieId: 'gone-with-wind'
    },
    {
      year: 1927,
      title: '爵士歌王',
      subtitle: '第一部有声电影',
      movieId: 'jazz-singer'
    },
    {
      year: 1895,
      title: '电影诞生',
      subtitle: '卢米埃尔兄弟',
      movieId: 'cinema-birth'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">时空柱</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative px-4 pb-20">
        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Central Pillar - positioned at left third */}
        <div className="absolute left-32 top-0 bottom-0 w-1">
          <div className="w-full h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 opacity-60 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        </div>

        {/* Timeline Events */}
        <div className="relative pt-8 space-y-12">
          {timeEvents.map((event, index) => (
            <div key={index} className="relative flex items-start">
              {/* Year Label on the left */}
              <div className="w-20 text-right pr-6 pt-3">
                <span className="text-gray-400 text-sm font-mono">
                  {event.year > 0 ? event.year : `${Math.abs(event.year)}BC`}
                </span>
              </div>

              {/* Center Node */}
              <div className="relative flex-shrink-0 z-10 pt-3">
                <Circle className="w-4 h-4 text-blue-400 fill-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Connector Line */}
              <div className="absolute left-32 top-1/2 w-12 h-px bg-blue-400/50" />

              {/* Event Card on the right */}
              <div className="flex-1 pl-14 pr-4">
                <div 
                  onClick={() => {
                    if (event.movieId) {
                      onMovieClick(event.movieId);
                    }
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:bg-white/15 transition-all cursor-pointer group max-w-xs"
                >
                  <h3 className="font-medium text-sm mb-1 group-hover:text-blue-300 transition-colors">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-xs text-gray-400">{event.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Earth */}
        <div className="relative mt-16 mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZXxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=800"
              alt="Earth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}