import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Play, ThumbsUp, MessageCircle, Share2, Bookmark, MoreVertical, UserPlus, Send } from 'lucide-react';
import { useState } from 'react';
import { useShare } from '../contexts/ShareContext';

interface ArticleDetailProps {
  articleId: string;
  onBack: () => void;
  onPlayClick?: (movieId: string, title: string) => void;
}

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
  liked: boolean;
}

export function ArticleDetail({ articleId, onBack, onPlayClick }: ArticleDetailProps) {
  const { openShare } = useShare();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: '影迷小王',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=100',
      content: '这部电影真的太震撼了！！剧情紧凑，演员演技在线，强烈推荐大家去看！',
      time: '2小时前',
      likes: 23,
      liked: false
    },
    {
      id: '2',
      author: '电影狂热者',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=100',
      content: '导演的镜头语言太有张力了，每一帧都像是艺术品。配乐也恰到好处，烘托了整体氛围。',
      time: '5小时前',
      likes: 45,
      liked: false
    },
    {
      id: '3',
      author: '王磊',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=100',
      content: '个人觉得剧情有点拖沓，但整体还是不错的，值得一看。',
      time: '1天前',
      likes: 12,
      liked: false
    },
    {
      id: '4',
      author: '张晓晓',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxlfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=100',
      content: '看完之后久久不能平静，这就是电影的魅力！',
      time: '1天前',
      likes: 67,
      liked: false
    }
  ]);

  const article = {
    id: articleId,
    title: '探索科幻的新宇宙 —— 最新解读',
    author: {
      name: '影评人',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=100',
      intro: '资深影评人，专注于科幻、悬疑类电影分析。从业10年，发表影评超过500篇。'
    },
    poster: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGZpbG0lMjBwb3N0ZXJ8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    views: 2840,
    publishTime: '2小时前',
    recommendCount: 156,
    content: `在科幻电影的浩瀚宇宙中，总有一些作品能够脱颖而出，给观众带来前所未有的震撼体验。今天要为大家解读的这部影片，无疑是近年来最值得关注的科幻巨制之一。

影片从一开始就营造出了独特的氛围感，通过精妙的镜头语言和出色的美术设计，将一个完全陌生的世界呈现在观众面前。导演对于细节的把控令人赞叹，无论是主角们身处的太空站环境，还是外星球的地貌特征，都展现出了极高的完成度。

在剧情方面，影片巧妙地融合了科幻元素和人性探讨。主角在面对未知挑战时所展现出的勇气和智慧，让观众为之动容。同时，影片也通过主角的经历，深入探讨了人类在面对浩瀚宇宙时的渺小感和对未知的好奇心。

特效制作堪称一流水准。无论是太空场景的渲染，还是各类高科技装备的展示，都达到了极高的视觉标准。配合上震撼的音效设计，整部影片给人以沉浸式的观影体验。

值得一提的是，演员们的表现也可圈可点。主演通过细腻的表演，将角色的内心世界完美呈现，让观众能够真切地感受到角色所经历的情感变化。

总的来说，这是一部在各个方面都表现优异的科幻佳作。无论你是科幻迷，还是普通观众，都能在这部影片中找到属于自己的感动。强烈建议大家抽时间去影院感受这部作品的魅力！`
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      alert('已添加到收藏');
    } else {
      alert('已取消收藏');
    }
  };

  const handleShare = () => {
    openShare({ title: article.title, url: typeof window !== 'undefined' ? window.location.href : '' });
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      alert('已关注');
    } else {
      alert('已取消关注');
    }
  };

  const handleCommentLike = (commentId: string) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1
        };
      }
      return comment;
    }));
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: '影迷小王',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=100',
        content: commentText,
        time: '刚刚',
        likes: 0,
        liked: false
      };
      setComments([newComment, ...comments]);
      setCommentText('');
      setShowCommentInput(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-4">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-4 pt-4 pb-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">文章详情页</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 py-4">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <ImageWithFallback
                src={article.author.avatar}
                alt={article.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{article.author.name}</div>
              <div className="text-xs text-gray-500">{article.publishTime}</div>
            </div>
          </div>
          <button
            onClick={handleFollow}
            className={`px-4 py-1.5 rounded-full text-sm ${
              isFollowing
                ? 'bg-gray-100 text-gray-600'
                : 'bg-red-500 text-white'
            }`}
          >
            {isFollowing ? '已关注' : '+ 关注'}
          </button>
        </div>

        {/* Article Title */}
        <h2 className="text-xl mb-4">{article.title}</h2>

        {/* Video Player Cover - 点击进入视频播放页 */}
        <button
          type="button"
          onClick={() => onPlayClick?.(articleId, article.title)}
          className="relative w-full h-48 bg-black rounded-xl overflow-hidden mb-3 block text-left cursor-pointer hover:opacity-95 transition-opacity"
        >
          <ImageWithFallback
            src={article.poster}
            alt={article.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
            </div>
          </div>
        </button>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span>{article.views}次阅读</span>
          <span>·</span>
          <span>{article.publishTime}</span>
          <span>·</span>
          <span>推荐数量 {article.recommendCount}</span>
        </div>

        {/* Article Content */}
        <div className="text-sm leading-relaxed text-gray-700 whitespace-pre-line mb-6">
          {article.content}
        </div>

        {/* Author Intro */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">作者介绍</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {article.author.intro}
          </p>
        </div>

        {/* Interaction Buttons */}
        <div className="flex items-center justify-around py-4 border-y border-gray-100 mb-6">
          <button 
            onClick={handleLike}
            className={`flex flex-col items-center gap-1 ${
              liked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <ThumbsUp className={`w-6 h-6 ${liked ? 'fill-red-500' : ''}`} />
            <span className="text-xs">点赞</span>
          </button>
          <button 
            onClick={() => setShowCommentInput(true)}
            className="flex flex-col items-center gap-1 text-gray-600"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">评论</span>
          </button>
          <button
            onClick={handleBookmark}
            className={`flex flex-col items-center gap-1 ${
              bookmarked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <Bookmark className={`w-6 h-6 ${bookmarked ? 'fill-red-500' : ''}`} />
            <span className="text-xs">收藏</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex flex-col items-center gap-1 text-gray-600"
          >
            <Share2 className="w-6 h-6" />
            <span className="text-xs">分享</span>
          </button>
        </div>

        {/* Comments Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">评论 ({comments.length})</h3>
          </div>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{comment.author}</span>
                    <span className="text-xs text-gray-400">{comment.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    {comment.content}
                  </p>
                  <button
                    onClick={() => handleCommentLike(comment.id)}
                    className={`flex items-center gap-1 text-xs ${
                      comment.liked ? 'text-red-500' : 'text-gray-500'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${comment.liked ? 'fill-red-500' : ''}`} />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment Input */}
          {showCommentInput ? (
            <div className="mt-4 bg-gray-50 rounded-xl p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=100"
                    alt="影迷小王"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="写下你的评论..."
                    rows={3}
                    autoFocus
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none text-sm"
                  />
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => {
                        setShowCommentInput(false);
                        setCommentText('');
                      }}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleAddComment}
                      disabled={!commentText.trim()}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        commentText.trim()
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      发布评论
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowCommentInput(true)}
              className="w-full py-3 bg-gray-50 text-gray-600 rounded-lg text-sm mt-4 hover:bg-gray-100 transition-colors"
            >
              添加评论
            </button>
          )}
        </div>
      </div>
    </div>
  );
}