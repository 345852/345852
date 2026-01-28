import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, UserPlus, UserMinus } from 'lucide-react';

interface FollowListProps {
  type: 'following' | 'followers';
  onBack: () => void;
}

export function FollowList({ type, onBack }: FollowListProps) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: '电影达人小李',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '热爱电影，分享生活',
      isFollowing: true
    },
    {
      id: 2,
      name: '影评人张三',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '专业影评，客观中立',
      isFollowing: type === 'following'
    },
    {
      id: 3,
      name: '电影收藏家',
      avatar: 'https://images.unsplash.com/photo-1735424080613-5a4f2c8b569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NTUzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '收藏经典，品味人生',
      isFollowing: true
    }
  ]);

  const handleFollowToggle = (id: number) => {
    if (type !== 'following') return;
    const u = users.find((x) => x.id === id);
    if (!u || !u.isFollowing) return;
    setUsers((prev) => prev.filter((x) => x.id !== id));
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">{type === 'following' ? '我的关注' : '我的粉丝'}</h1>
      </div>

      {/* Users List */}
      <div className="divide-y divide-gray-100">
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-3 px-4 py-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <ImageWithFallback
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="mb-1">{user.name}</h3>
              <p className="text-sm text-gray-500 truncate">{user.bio}</p>
            </div>
            <button
              onClick={() => handleFollowToggle(user.id)}
              className={`px-4 py-2 rounded-full text-sm ${
                user.isFollowing
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {user.isFollowing ? (
                <span className="flex items-center gap-1">
                  <UserMinus className="w-4 h-4" />
                  已关注
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <UserPlus className="w-4 h-4" />
                  关注
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
