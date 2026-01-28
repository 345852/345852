import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ChevronRight, Star, Clock, Play, ChevronLeft, Users, TrendingUp, Film, MessageCircle, Home as HomeIcon, Gift } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import identityImage from 'figma:asset/694a478a772df3097bbd38e35d4b0de5a479a8d4.png';

interface HomeProps {
  onMovieClick: (movieId: string) => void;
  onMoreClick?: () => void;
  onPlayClick?: (movieId: string) => void;
  onPersonalNetworkClick?: () => void;
  onOpenRoomClick?: () => void;
  onTuigejiClick?: () => void;
  onArticleClick?: (articleId: string) => void;
  onSearchClick?: () => void;
  onTimePillarClick?: () => void;
  onRankingClick?: () => void;
  onRecommendClick?: () => void;
  onShareActivityClick?: () => void;
  onPersonClick?: (personId: string, name: string, title: string, avatar: string) => void;
}

export function Home({ onMovieClick, onMoreClick, onPlayClick, onPersonalNetworkClick, onOpenRoomClick, onTuigejiClick, onArticleClick, onSearchClick, onTimePillarClick, onRankingClick, onRecommendClick, onShareActivityClick, onPersonClick }: HomeProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const translateRef = useRef(0);

  const banners = [
    {
      id: 'share-activity',
      title: '邀请好友 赢VIP会员',
      description: '每邀请1人得7天VIP，上不封顶',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcmVkfGVufDB8fHx8MTczNzMzMTIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      isActivity: true,
    },
    {
      id: '1',
      title: '我和电影有个约会',
      description: '探索电影世界，发现精彩故事',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '2',
      title: '星际穿越',
      description: '探索无尽宇宙的奥秘',
      poster: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: '3',
      title: '盗梦空间',
      description: '梦境与现实的边界',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    }
  ];

  const categories = [
    { name: '看个人脉', icon: Users, action: 'personalNetwork' },
    { name: '排个榜单', icon: TrendingUp, action: 'ranking' },
    { name: '时空转', icon: Clock, action: 'timePillar' },
    { name: '强推个片', icon: Film, action: 'recommend' },
    { name: '开个房间', icon: HomeIcon, action: 'openRoom' }
  ];

  const directors = [
    {
      id: 1,
      name: '张艺谋',
      title: '中国电影大师',
      poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: 2,
      name: '克里斯托弗·诺兰',
      title: '科幻电影大师',
      poster: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      id: 3,
      name: '昆汀·塔伦蒂诺',
      title: '暴力美学大师',
      poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
    }
  ];

  const handlePrevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  // Minimum swipe distance (in px) to trigger a swipe action
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextBanner();
    }
    if (isRightSwipe) {
      handlePrevBanner();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setPrevTranslate(currentTranslate);
    translateRef.current = currentTranslate;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const walk = currentX - startX;
    const newTranslate = translateRef.current + walk;
    setCurrentTranslate(newTranslate);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const threshold = 50; // 最小拖动距离阈值
    
    if (movedBy < -threshold && currentBanner < banners.length - 1) {
      setCurrentBanner((prev) => {
        const next = (prev + 1) % banners.length;
        setCurrentTranslate(0);
        setPrevTranslate(0);
        translateRef.current = 0;
        return next;
      });
    } else if (movedBy > threshold && currentBanner > 0) {
      setCurrentBanner((prev) => {
        const next = (prev - 1 + banners.length) % banners.length;
        setCurrentTranslate(0);
        setPrevTranslate(0);
        translateRef.current = 0;
        return next;
      });
    } else {
      setCurrentTranslate(0);
      setPrevTranslate(0);
      translateRef.current = 0;
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    const threshold = 50;
    
    if (movedBy < -threshold && currentBanner < banners.length - 1) {
      setCurrentBanner((prev) => {
        const next = (prev + 1) % banners.length;
        setCurrentTranslate(0);
        setPrevTranslate(0);
        translateRef.current = 0;
        return next;
      });
    } else if (movedBy > threshold && currentBanner > 0) {
      setCurrentBanner((prev) => {
        const next = (prev - 1 + banners.length) % banners.length;
        setCurrentTranslate(0);
        setPrevTranslate(0);
        translateRef.current = 0;
        return next;
      });
    } else {
      setCurrentTranslate(0);
      setPrevTranslate(0);
      translateRef.current = 0;
    }
  };

  // 全局鼠标事件处理，确保在元素外部也能响应
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const currentX = e.clientX;
      const walk = currentX - startX;
      const newTranslate = translateRef.current + walk;
      setCurrentTranslate(newTranslate);
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      const movedBy = currentTranslate - prevTranslate;
      const threshold = 50;
      
      if (movedBy < -threshold && currentBanner < banners.length - 1) {
        setCurrentBanner((prev) => {
          const next = (prev + 1) % banners.length;
          setCurrentTranslate(0);
          setPrevTranslate(0);
          translateRef.current = 0;
          return next;
        });
      } else if (movedBy > threshold && currentBanner > 0) {
        setCurrentBanner((prev) => {
          const next = (prev - 1 + banners.length) % banners.length;
          setCurrentTranslate(0);
          setPrevTranslate(0);
          translateRef.current = 0;
          return next;
        });
      } else {
        setCurrentTranslate(0);
        setPrevTranslate(0);
        translateRef.current = 0;
      }
    };

    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, prevTranslate, currentTranslate, currentBanner, banners.length]);

  return (
    <div className="pb-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-4 pb-3 sticky top-0 z-10">
        <div 
          onClick={onSearchClick}
          className="w-full flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <Search className="w-5 h-5 flex-shrink-0 text-gray-400" />
          <span className="flex-1 text-sm text-gray-500 text-left">搜索热门影视</span>
        </div>
      </div>

      {/* Banner */}
      <div 
        className="relative mx-4 mt-4 rounded-2xl overflow-hidden"
        style={{ height: '200px' }}
      >
        <div
          className="relative w-full h-full flex"
          style={{
            transform: `translateX(calc(-${currentBanner * 100}% + ${currentTranslate}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
          onClick={(e) => {
            // 如果正在拖拽，不触发点击事件
            if (isDragging || Math.abs(currentTranslate) > 10) {
              e.preventDefault();
              return;
            }
            const currentBannerData = banners[currentBanner];
            if (currentBannerData.isActivity && onShareActivityClick) {
              onShareActivityClick();
            } else if (onPlayClick) {
              onPlayClick(currentBannerData.id);
            }
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="relative w-full h-full flex-shrink-0"
            >
              <ImageWithFallback
                src={banner.poster}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Activity Badge */}
              {banner.isActivity && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-yellow-400 text-red-600 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <Gift className="w-3 h-3" />
                    限时活动
                  </span>
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h2 className="text-white text-xl font-medium mb-1">{banner.title}</h2>
                <p className="text-white/80 text-sm">{banner.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="absolute bottom-4 right-4 flex gap-1.5 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentBanner(index);
                setCurrentTranslate(0);
                setPrevTranslate(0);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white mx-4 mt-4 rounded-2xl p-4">
        <div className="grid grid-cols-5 gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  if (category.action === 'personalNetwork' && onPersonalNetworkClick) {
                    onPersonalNetworkClick();
                  } else if (category.action === 'openRoom' && onOpenRoomClick) {
                    onOpenRoomClick();
                  } else if (category.action === 'ranking' && onRankingClick) {
                    onRankingClick();
                  } else if (category.action === 'timePillar' && onTimePillarClick) {
                    onTimePillarClick();
                  } else if (category.action === 'recommend' && onRecommendClick) {
                    onRecommendClick();
                  }
                }}
                className="flex flex-col items-center gap-2 py-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-xs text-gray-700">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Directors Section */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-medium">特色导演大盘点</h2>
          <button 
            onClick={onMoreClick}
            className="text-sm text-red-500 flex items-center gap-1"
          >
            更多
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {directors.map((director) => (
            <div
              key={director.id}
              onClick={() => onPersonClick ? onPersonClick(director.id.toString(), director.name, director.title, director.poster) : onMovieClick(director.id.toString())}
              className="flex-shrink-0 w-32 cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-2" style={{ height: '160px' }}>
                <ImageWithFallback
                  src={director.poster}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-sm font-medium">{director.name}</p>
                  <p className="text-white/80 text-xs">{director.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self Identity Section */}
      <div className="mt-4 px-4">
        <h2 className="text-lg font-medium mb-3">寻找自我认同</h2>
        <div 
          onClick={() => onArticleClick && onArticleClick('self-identity')}
          className="rounded-2xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
        >
          <div className="relative" style={{ height: '180px' }}>
            <img
              src={identityImage}
              alt="寻找自我认同"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white/70 text-xs mb-2">
                探讨青春成长中的身份认同与内心探索
              </p>
              <h3 className="text-white text-base font-medium mb-2">
                银幕里的自我认同之旅
              </h3>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <span>阅读时间：6分钟</span>
                <span>•</span>
                <span>成长解读</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mt-4 px-4">
        <h2 className="text-lg font-medium mb-3">浅说暗黑童话</h2>
        <div 
          onClick={() => onArticleClick && onArticleClick('dark-fairy-tale')}
          className="bg-black rounded-2xl overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
        >
          <div className="relative" style={{ height: '180px' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="暗黑童话"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white/70 text-xs mb-2">
                深入解析暗黑童话背后的深刻寓意与艺术表达
              </p>
              <h3 className="text-white text-base font-medium mb-2">
                从《白雪公主》到《睡美人》，童话的暗黑面
              </h3>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <span>阅读时间：8分钟</span>
                <span>•</span>
                <span>电影解析</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}