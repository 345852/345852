import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Settings, 
  Heart, 
  Clock, 
  Star, 
  Bookmark, 
  Users, 
  MessageSquare,
  ChevronRight,
  Crown,
  Ticket,
  User,
  Calendar
} from 'lucide-react';

interface ProfileProps {
  onNavigate: (page: string) => void;
}

export function Profile({ onNavigate }: ProfileProps) {
  const userStats = [
    { label: '关注', value: 128, icon: Heart, page: 'following' },
    { label: '粉丝', value: 256, icon: Users, page: 'followers' },
    { label: '收藏', value: 89, icon: Bookmark, page: 'collections' },
    { label: '评论', value: 234, icon: MessageSquare, page: 'comments' }
  ];

  const menuItems = [
    {
      title: '我的观影',
      items: [
        { icon: Clock, label: '观看历史', color: 'text-blue-500', page: 'history' },
        { icon: Star, label: '我的评分', color: 'text-yellow-500', page: 'ratings' },
        { icon: Bookmark, label: '我的收藏', color: 'text-red-500', page: 'collections' },
        { icon: Ticket, label: '我的票券', color: 'text-green-500', page: 'tickets' }
      ]
    },
    {
      title: '社交互动',
      items: [
        { icon: Users, label: '我的关注', color: 'text-purple-500', page: 'following' },
        { icon: MessageSquare, label: '我的评论', color: 'text-pink-500', page: 'comments' },
        { icon: Heart, label: '点赞记录', color: 'text-red-400', page: 'likes' }
      ]
    },
    {
      title: '设置',
      items: [
        { icon: Settings, label: '账号设置', color: 'text-gray-500', page: 'settings' },
        { icon: Crown, label: '会员中心', color: 'text-yellow-600', page: 'vip' }
      ]
    }
  ];

  return (
    <div className="pb-4 pt-4">
      {/* Profile Card */}
      <div className="px-4 py-4 bg-gradient-to-r from-red-50 to-pink-50 mx-4 rounded-xl mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div 
            onClick={() => onNavigate('myProfile')}
            className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="用户头像"
              className="w-full h-full object-cover"
            />
            <button
              onClick={(e) => { e.stopPropagation(); onNavigate('settings'); }}
              className="absolute -top-0.5 -right-0.5 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl mb-1">电影爱好者</h2>
            <p className="text-sm text-gray-600 mb-2">ID: movie_lover_2024</p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" />
                VIP会员
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {userStats.map((stat, index) => (
            <button
              key={index}
              onClick={() => onNavigate(stat.page)}
              className="flex flex-col items-center gap-1 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-5 h-5 text-gray-600" />
              <span className="text-lg">{stat.value}</span>
              <span className="text-xs text-gray-600">{stat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Check-In Banner */}
      <div 
        onClick={() => onNavigate('checkIn')}
        className="mx-4 mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium mb-1">每日签到</h3>
              <p className="text-xs opacity-90">连续签到6天 · 已获得320积分</p>
            </div>
          </div>
          <div className="text-right">
            <div className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              去签到
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4 space-y-6">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm text-gray-500 mb-3 px-2">{section.title}</h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => onNavigate(item.page)}
                  className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                >
                  <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1 text-left">{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 py-4">
        <button 
          onClick={() => onNavigate('logout')}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200"
        >
          退出登录
        </button>
      </div>
    </div>
  );
}