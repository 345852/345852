import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface MessagesProps {
  onConversationClick: (id: string, name: string, avatar: string) => void;
  readConversations?: Set<string>;
}

export function Messages({ onConversationClick, readConversations = new Set() }: MessagesProps) {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: '电影爱好者群',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: '大家觉得最近上映的电影怎么样？',
      time: '15:32',
      unread: 3,
      isGroup: true,
      type: 'group'
    },
    {
      id: 2,
      name: '张三',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: '周末一起看电影吗？',
      time: '14:20',
      unread: 0,
      isGroup: false,
      type: 'friend'
    },
    {
      id: 3,
      name: '系统消息',
      avatar: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: '您关注的《星际穿越》今晚8点上映',
      time: '13:45',
      unread: 1,
      isGroup: false,
      type: 'system'
    },
    {
      id: 4,
      name: '李四',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: '分享了一个影评给你',
      time: '昨天',
      unread: 0,
      isGroup: false,
      type: 'friend'
    },
    {
      id: 5,
      name: '科幻电影讨论组',
      avatar: 'https://images.unsplash.com/photo-1653045474061-075ba29db54f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHNjZW5lfGVufDF8fHx8MTc2ODU1Mzc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      lastMessage: '王五: 推荐大家看《银翼杀手2049》',
      time: '昨天',
      unread: 5,
      isGroup: true,
      type: 'group'
    }
  ]);

  const handleConversationClick = (id: string, name: string, avatar: string) => {
    // Clear unread count for this conversation
    setConversations(conversations.map(conv => 
      conv.id.toString() === id ? { ...conv, unread: 0 } : conv
    ));
    // Navigate to chat room
    onConversationClick(id, name, avatar);
  };

  const tabs = [
    { name: '全部', count: 0 },
    { name: '好友', count: 0 },
    { name: '群组', count: 0 },
    { name: '系统', count: 1 }
  ];

  const filteredConversations = conversations.filter(conv => {
    if (activeFilter === '全部') return true;
    if (activeFilter === '好友') return conv.type === 'friend';
    if (activeFilter === '群组') return conv.type === 'group';
    if (activeFilter === '系统') return conv.type === 'system';
    return true;
  });

  return (
    <div className="pb-4">
      {/* Header: 搜索框 */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索对话..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 py-3 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm ${
              activeFilter === tab.name
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <span>{tab.name}</span>
            {tab.count > 0 && (
              <span className="bg-white text-red-500 text-xs px-1.5 rounded-full min-w-[18px] text-center">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Conversations List */}
      <div className="divide-y divide-gray-100">
        {filteredConversations.map((conv) => {
          // Check if this conversation has been read
          const isRead = readConversations.has(conv.id.toString());
          const displayUnread = isRead ? 0 : conv.unread;
          
          return (
            <div
              key={conv.id}
              onClick={() => handleConversationClick(conv.id.toString(), conv.name, conv.avatar)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {displayUnread > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {displayUnread}
                  </div>
                )}
              </div>

              {/* Message Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="truncate">
                    {conv.name}
                    {conv.isGroup && (
                      <span className="ml-1 text-xs text-gray-500">({conv.isGroup ? '群聊' : ''})</span>
                    )}
                  </h3>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {conv.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {conv.lastMessage}
                </p>
              </div>

              {/* More Options */}
              <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}