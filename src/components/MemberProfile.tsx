import { ArrowLeft, MessageCircle, Star, Zap, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface MemberProfileProps {
  userId: string;
  userName: string;
  userAvatar: string;
  onBack: () => void;
  onMessageClick?: () => void;
}

type TabKey = 'dynamic' | 'video' | 'album' | 'record';

export function MemberProfile({ userId, userName, userAvatar, onBack, onMessageClick }: MemberProfileProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('dynamic');
  const [followed, setFollowed] = useState(false);

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'dynamic', label: '动态' },
    { key: 'video', label: '视频' },
    { key: 'album', label: '相册' },
    { key: 'record', label: '记录' },
  ];

  const stats = { following: 21, followers: '13.3万', likes: '49.8万' };
  const badgeLevel = 'Lv3 活力运动员';
  const badgeCount = '51 徽章';
  const bio = '美丽与身材，如逆水行舟不进则退';
  const location = '女 | 广东省 广州市';
  const totalPosts = 319;

  const samplePost = {
    time: '2022/11/23 22:38',
    place: '上海市',
    title: '冬天绝不囤肉',
    body: '不运动就是不运动，说啥都是借口。动起来，这个冬天一起练！',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    ],
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-20 flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="flex-1 text-center text-base font-medium text-gray-800">个人主页</h1>
        <div className="w-10" />
      </div>

      {/* 顶图 Banner - 固定 16:9 横图 */}
      <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
        <ImageWithFallback
          src={userAvatar}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* 头像 + 操作区 */}
      <div className="px-4 -mt-12 relative">
        <div className="flex items-end gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white bg-white flex-shrink-0 shadow-md">
            <ImageWithFallback
              src={userAvatar}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 flex-1 pb-1">
            <button
              onClick={onMessageClick}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50"
            >
              <MessageCircle className="w-4 h-4" />
              消息
            </button>
            <button
              onClick={() => setFollowed(!followed)}
              className={`flex-1 flex items-center justify-center py-2.5 rounded-full text-sm font-medium ${
                followed
                  ? 'bg-gray-200 text-gray-600'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              关注
            </button>
          </div>
        </div>

        {/* 昵称 */}
        <h1 className="text-xl font-semibold text-gray-900 mt-4">{userName}</h1>

        {/* 徽章 */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-50 text-red-600 text-xs font-medium">
            <Star className="w-3.5 h-3.5" />
            {badgeLevel}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-50 text-red-600 text-xs font-medium">
            <Zap className="w-3.5 h-3.5" />
            {badgeCount}
          </span>
        </div>

        {/* 个性签名 */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{bio}</p>

        {/* 性别 | 地区 */}
        <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-500">
          <MapPin className="w-3.5 h-3.5" />
          {location}
        </div>

        {/* 关注/粉丝/获赞 */}
        <div className="flex gap-6 mt-4 py-3 border-b border-gray-100">
          <span className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{stats.following}</span>
            <span className="text-gray-500 ml-1">关注</span>
          </span>
          <span className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{stats.followers}</span>
            <span className="text-gray-500 ml-1">粉丝</span>
          </span>
          <span className="text-sm text-gray-700">
            <span className="font-medium text-gray-900">{stats.likes}</span>
            <span className="text-gray-500 ml-1">获赞</span>
          </span>
        </div>

        {/* Tab 栏 - 动态 / 视频 / 相册 / 记录 */}
        <div className="flex border-b border-gray-100">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'text-red-500 border-b-2 border-red-500 -mb-px'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 动态列表 */}
        {activeTab === 'dynamic' && (
          <div className="py-4">
            <h2 className="text-sm font-medium text-gray-500 mb-4">
              全部动态 ({totalPosts})
            </h2>
            <article className="border-b border-gray-100 pb-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={userAvatar}
                    alt={userName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{userName}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {samplePost.time} · {samplePost.place}
                  </p>
                  <h3 className="text-base font-medium text-gray-900 mt-2">{samplePost.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{samplePost.body}</p>
                  <div className="flex gap-2 mt-3">
                    {samplePost.images.map((img, i) => (
                      <div
                        key={i}
                        className="flex-1 min-w-0 rounded-lg overflow-hidden aspect-[4/3] bg-gray-100"
                      >
                        <ImageWithFallback
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {activeTab === 'video' && (
          <div className="py-8 text-center text-gray-400 text-sm">暂无视频</div>
        )}
        {activeTab === 'album' && (
          <div className="py-8 text-center text-gray-400 text-sm">暂无相册</div>
        )}
        {activeTab === 'record' && (
          <div className="py-8 text-center text-gray-400 text-sm">暂无记录</div>
        )}
      </div>
    </div>
  );
}
