import { ArrowLeft, MoreHorizontal, Play, Pause, Volume2, RotateCcw, Maximize, Smile, Plus, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef, useEffect } from 'react';

interface RoomDetailProps {
  roomId: string;
  onBack: () => void;
  onMemberClick?: (member: { id: string; name: string; avatar: string }) => void;
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  hasUnread?: boolean;
}

interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  time: string;
}

const initialComments: Comment[] = [
  {
    id: '1',
    user: '永远不弃',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
    content: '@高爷妈: 10647412 双讯小可爱类系朋友吗~!',
    time: '刚刚'
  }
];

export function RoomDetail({ roomId, onBack, onMemberClick }: RoomDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const nextIdRef = useRef(2);
  const commentsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments.length]);

  // 模拟房间数据
  const roomData = {
    title: '看-买极地是系列一番剧/律式经典(国产片)',
    currentMembers: 4,
    maxMembers: 50,
    isPublic: true,
    videoThumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvcnJpZG9yfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=800',
    currentTime: '02:10',
    totalTime: '01:56:14',
    createdDate: '2025.9.9 10:03',
    description: '欢迎来到我们18届岁少以下未成年人禁止东埕消费，请在妈妈或监护人陪伴下观看或使用时如何提供适宜流行推荐色/橙橙色/橙黄产等违规投稿幸福!默默承敬禁区文字或化代化/或形成承等等三方交明知小明尽人要求添加Q/微信等请填换通内治展点。',
  };

  const members: Member[] = [
    { id: '1', name: 'User1', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', hasUnread: true },
    { id: '2', name: 'User2', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', hasUnread: true },
    { id: '3', name: 'User3', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100', hasUnread: true },
    { id: '4', name: 'User4', avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100', hasUnread: true },
    { id: '5', name: 'User5', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  ];

  const handleSendMessage = () => {
    const text = message.trim();
    if (!text) return;
    const id = String(nextIdRef.current++);
    const newComment: Comment = {
      id,
      user: '我',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
      content: text,
      time: '刚刚'
    };
    setComments(prev => [...prev, newComment]);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gray-900 text-white z-50">
      {/* Header（底图不动） */}
      <div className="flex-shrink-0 bg-gray-800/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-3">
          <h1 className="text-sm font-medium truncate">{roomData.title}</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {roomData.currentMembers}/{roomData.maxMembers}人 {roomData.isPublic ? '公开' : '私密'}
          </p>
        </div>
        <button className="p-1">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* 绿色区域：仅此区域上下滑动，底图不动 */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {/* Video Player */}
        <div className="relative bg-black">
          <ImageWithFallback
            src={roomData.videoThumbnail}
            alt="Video"
            className="w-full aspect-video object-cover"
          />
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Time Display */}
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {roomData.currentTime} / {roomData.totalTime}
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <button className="p-2">
                <Play className="w-5 h-5" />
              </button>
              <button className="p-2">
                <Volume2 className="w-5 h-5" />
              </button>
              <button className="p-2">
                <RotateCcw className="w-5 h-5" />
              </button>
              <button className="p-2">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Room Info */}
        <div className="px-4 py-3 space-y-3">
          {/* Created Date */}
          <p className="text-xs text-gray-400">{roomData.createdDate}</p>

          {/* Description */}
          <div className="text-sm text-gray-300 leading-relaxed">
            {roomData.description}
          </div>

          {/* Comments Section（红框区域：底部输入的消息在此显示） */}
          <div className="space-y-3 mt-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-orange-500 text-sm font-medium">{comment.user}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{comment.content}</p>
                </div>
              </div>
            ))}
            <div ref={commentsEndRef} />
          </div>
        </div>
      </div>

      {/* Members Bar（底图不动） */}
      <div className="flex-shrink-0 bg-gray-800 px-4 py-3 border-t border-gray-700">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {/* Add Button */}
          <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
            <Plus className="w-6 h-6 text-white" />
          </button>

          {/* Member Avatars - 点击进入个人主页 */}
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => onMemberClick?.(member)}
              className="relative flex-shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600">
                <ImageWithFallback
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {member.hasUnread && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-white text-xs">2</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar（底图不动） */}
      <div className="flex-shrink-0 bg-gray-800 px-4 py-3 border-t border-gray-700">
        <div className="flex items-center gap-3">
          {/* Input Field */}
          <div className="flex-1 bg-gray-700 rounded-full px-4 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="输入新消息"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
            />
          </div>

          {/* Action Buttons */}
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Smile className="w-5 h-5 text-gray-400" />
          </button>
          <button
            onClick={handleSendMessage}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <Send className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
