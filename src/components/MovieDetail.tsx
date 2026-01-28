import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Play, 
  Star, 
  Heart, 
  Share2, 
  Bookmark,
  Calendar,
  Clock,
  Film,
  Users,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { useShare } from '../contexts/ShareContext';

interface MovieDetailProps {
  movieId: string;
  onBack: () => void;
  onPlayClick: (movieId: string, title: string) => void;
  isLiked: boolean;
  onLikeToggle: () => void;
  onViewAllComments?: () => void;
}

export function MovieDetail({ movieId, onBack, onPlayClick, isLiked, onLikeToggle, onViewAllComments }: MovieDetailProps) {
  const { openShare } = useShare();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(125000);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    onLikeToggle();
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      alert('已添加到收藏');
    } else {
      alert('已取消收藏');
    }
  };

  // 模拟电影数据
  const movieData = {
    '1': {
      title: '肖申克的救赎',
      englishTitle: 'The Shawshank Redemption',
      poster: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.7,
      year: '1994',
      duration: '142分钟',
      genre: ['剧情', '犯罪'],
      director: '弗兰克·德拉邦特',
      cast: ['蒂姆·罗宾斯', '摩根·弗里曼', '鲍勃·冈顿'],
      description: '20世纪40年代末，小有成就的青年银行家安迪因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德，请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。',
      views: '2500万',
      likes: 125000,
      bookmarks: 89000
    }
  };

  const movie = movieData[movieId as keyof typeof movieData] || movieData['1'];

  const handleShare = () => {
    openShare({
      title: movie.title,
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  const reviews = [
    {
      id: 1,
      user: '电影迷小王',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 10,
      content: '这是一部关于希望和自由的伟大作品，每次重温都有新的感悟。',
      likes: 1234,
      time: '2天前'
    },
    {
      id: 2,
      user: '影评人张三',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9,
      content: '摩根·弗里曼的旁白深入人心，情节紧凑，是必看经典。',
      likes: 892,
      time: '1周前'
    }
  ];

  const relatedMovies = [
    {
      id: 2,
      title: '阿甘正传',
      poster: 'https://images.unsplash.com/photo-1708787788824-07d6d97b0111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMG1vdmllJTIwY291cGxlfGVufDF8fHx8MTc2ODQ4MTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.5
    },
    {
      id: 3,
      title: '这个杀手不太冷',
      poster: 'https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwZGFya3xlbnwxfHx8fDE3Njg0OTM1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.4
    },
    {
      id: 4,
      title: '泰坦尼克号',
      poster: 'https://images.unsplash.com/photo-1645808651017-c5e3018553c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODQ5NjIwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.4
    }
  ];

  return (
    <div className="pb-4">
      {/* Header with Back Button */}
      <div className="relative">
        <div className="h-80 relative">
          <ImageWithFallback
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-4 left-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Movie Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl mb-2">{movie.title}</h1>
            <p className="text-sm text-white/80 mb-3">{movie.englishTitle}</p>
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg">{movie.rating}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {movie.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {movie.duration}
              </span>
            </div>
            <div className="flex gap-2 mb-4">
              {movie.genre.map((g, index) => (
                <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-4 flex gap-3">
        <button 
          onClick={() => onPlayClick(movieId, movie.title)}
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-full hover:bg-red-600"
        >
          <Play className="w-5 h-5" />
          <span>立即播放</span>
        </button>
        <button 
          onClick={handleLike}
          className={`p-3 rounded-full ${
            isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-700'
          } hover:bg-red-50 hover:text-red-500`}
        >
          <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500' : ''}`} />
        </button>
        <button 
          onClick={handleBookmark}
          className={`p-3 rounded-full ${
            isBookmarked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-700'
          } hover:bg-red-50 hover:text-red-500`}
        >
          <Bookmark className={`w-6 h-6 ${isBookmarked ? 'fill-red-500' : ''}`} />
        </button>
        <button 
          onClick={handleShare}
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <Share2 className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Stats */}
      <div className="px-4 py-3 grid grid-cols-3 gap-4 border-y border-gray-100">
        <div className="text-center">
          <div className="text-lg mb-1">{movie.views}</div>
          <div className="text-xs text-gray-500">播放量</div>
        </div>
        <div className="text-center border-x border-gray-100">
          <div className="text-lg mb-1">{(likeCount / 10000).toFixed(1)}万</div>
          <div className="text-xs text-gray-500">点赞</div>
        </div>
        <div className="text-center">
          <div className="text-lg mb-1">{(movie.bookmarks / 10000).toFixed(1)}万</div>
          <div className="text-xs text-gray-500">收藏</div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-4">
        <h2 className="text-lg mb-3">剧情简介</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{movie.description}</p>
      </div>

      {/* Cast & Crew */}
      <div className="px-4 py-4 bg-gray-50">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Film className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">导演</span>
          </div>
          <p className="text-sm">{movie.director}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">主演</span>
          </div>
          <p className="text-sm">{movie.cast.join(' / ')}</p>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">影评推荐</h2>
          <button
            onClick={() => onViewAllComments?.()}
            className="text-sm text-red-500 hover:text-red-600"
          >
            查看全部
          </button>
        </div>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm mb-1">{review.user}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">{review.rating}分</span>
                    </div>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{review.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{review.content}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <button className="flex items-center gap-1 text-sm hover:text-red-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-sm hover:text-red-500">
                  <MessageCircle className="w-4 h-4" />
                  <span>回复</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Movies */}
      <div className="px-4 py-4">
        <h2 className="text-lg mb-4">相关推荐</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {relatedMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-32">
              <div className="relative h-44 rounded-lg overflow-hidden mb-2">
                <ImageWithFallback
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                  {movie.rating}
                </div>
              </div>
              <h4 className="text-sm truncate">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}