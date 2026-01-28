import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Star, ThumbsUp, MessageCircle, Send, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface MovieCommentsProps {
  movieId: string;
  movieTitle?: string;
  onBack: () => void;
}

interface Comment {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  content: string;
  likes: number;
  time: string;
}

const initialComments: Comment[] = [
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

export function MovieComments({ movieId, movieTitle = '影评', onBack }: MovieCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [inputText, setInputText] = useState('');
  const [replyingTo, setReplyingTo] = useState<{ id: number; user: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextIdRef = { current: 3 };

  const handleLike = (id: number) => {
    setLikedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleReplyClick = (comment: Comment) => {
    setReplyingTo({ id: comment.id, user: comment.user });
    setInputText('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  useEffect(() => {
    if (replyingTo) inputRef.current?.focus();
  }, [replyingTo]);

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;
    const content = replyingTo ? `回复 ${replyingTo.user}：${text}` : text;
    const newComment: Comment = {
      id: nextIdRef.current++,
      user: '我',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400',
      rating: 10,
      content,
      likes: 0,
      time: '刚刚'
    };
    setComments(prev => [newComment, ...prev]);
    setInputText('');
    setReplyingTo(null);
  };

  const displayComments = comments.map(c => ({
    ...c,
    likes: c.likes + (likedIds.has(c.id) ? 1 : 0)
  }));

  return (
    <div className="pb-24 flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex-shrink-0 px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-medium flex-1">评论</h1>
        </div>
        {movieTitle && (
          <p className="text-sm text-gray-500 mt-1 pl-12">{movieTitle}</p>
        )}
      </div>

      {/* Comment List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {displayComments.map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={comment.avatar}
                    alt={comment.user}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium truncate">{comment.user}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">{comment.rating}分</span>
                    </div>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{comment.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">{comment.content}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <button
                  onClick={() => handleLike(comment.id)}
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    likedIds.has(comment.id) ? 'text-red-500' : 'hover:text-red-500'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${likedIds.has(comment.id) ? 'fill-red-500' : ''}`} />
                  <span>{comment.likes}</span>
                </button>
                <button
                  onClick={() => handleReplyClick(comment)}
                  className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>回复</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex-shrink-0 px-4 py-3 border-t border-gray-100 bg-white">
        {replyingTo && (
          <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
            <span>回复 {replyingTo.user}</span>
            <button
              onClick={() => setReplyingTo(null)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder={replyingTo ? `回复 ${replyingTo.user}：` : '说几句...'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-red-500/30"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-3 bg-red-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
