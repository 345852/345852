import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Send, Smile, Image as ImageIcon, MoreVertical } from 'lucide-react';

interface ChatRoomProps {
  conversationId: string;
  conversationName: string;
  conversationAvatar: string;
  onBack: () => void;
}

export function ChatRoom({ conversationId, conversationName, conversationAvatar, onBack }: ChatRoomProps) {
  const [messageInput, setMessageInput] = useState('');

  // 模拟聊天记录
  const messages = [
    {
      id: 1,
      type: 'received',
      content: '你好！周末一起看电影吗？',
      time: '14:20',
      avatar: conversationAvatar
    },
    {
      id: 2,
      type: 'sent',
      content: '好啊！想看什么类型的？',
      time: '14:22',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      type: 'received',
      content: '我想看科幻片，最近《星际穿越》重映了，要不要一起去？',
      time: '14:25',
      avatar: conversationAvatar
    },
    {
      id: 4,
      type: 'sent',
      content: '听起来不错！我很喜欢诺兰的电影',
      time: '14:26',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      type: 'received',
      content: '那我们定周六晚上8点的场次？',
      time: '14:28',
      avatar: conversationAvatar
    },
    {
      id: 6,
      type: 'sent',
      content: '完美！到时候见👍',
      time: '14:30',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // 这里可以添加发送消息的逻辑
      console.log('发送消息:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <ImageWithFallback
            src={conversationAvatar}
            alt={conversationName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-medium">{conversationName}</h2>
          <p className="text-xs text-gray-500">在线</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.type === 'sent' ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={message.avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`flex flex-col ${message.type === 'sent' ? 'items-end' : 'items-start'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.type === 'sent'
                    ? 'bg-red-500 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 rounded-tl-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
              <span className="text-xs text-gray-400 mt-1 px-2">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Smile className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ImageIcon className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="输入消息..."
              className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!messageInput.trim()}
            className={`p-2 rounded-full ${
              messageInput.trim()
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
