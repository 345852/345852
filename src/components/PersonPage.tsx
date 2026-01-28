import { ArrowLeft, ChevronRight, Star, UserPlus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface PersonPageProps {
  personId: string;
  name: string;
  title: string;
  avatar: string;
  onBack: () => void;
  onMovieClick?: (movieId: string) => void;
}

// 示例：杨磊人物页的简介、影视、相册（布局与左侧人物页一致，色调与原生 UI 一致）
const SAMPLE_BIO = '导演杨磊，北京电影学院导演系毕业。曾凭借短片《黄昏中的男孩》《地铁乞丐的一天》获多个国际电影节奖项。';
const SAMPLE_MOVIES = [
  { id: 'santi', title: '三体', rating: 8.7, poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400' },
  { id: 'red', title: '红色', rating: 9.1, poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400' },
  { id: 'jiaozhu', title: '鲛珠传', rating: 4.2, poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400' },
  { id: 'jiuzhou', title: '九州天空城', rating: 6.6, poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
  { id: 'taiping', title: '太平', rating: undefined, poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400' },
];
const SAMPLE_PHOTOS = [
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300',
  'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300',
];

export function PersonPage({
  personId,
  name,
  title,
  avatar,
  onBack,
  onMovieClick,
}: PersonPageProps) {
  const [followed, setFollowed] = useState(false);
  const followers = '1501人关注';
  const nameEn = name === '杨磊' ? 'Lei Yang' : (title || '');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航 - 与原生一致：白底、黑字、红色仅作强调 */}
      <div className="sticky top-0 z-20 flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="flex-1 text-center text-base font-medium text-gray-800">人物</h1>
        <div className="w-10" />
      </div>

      <div className="px-4 pt-4 pb-6">
        {/* 头像 + 姓名 + 关注数 + 关注按钮 - 与左侧人物页布局一致 */}
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
            <ImageWithFallback
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{nameEn}</p>
            <p className="text-sm text-gray-500 mt-1">{followers}</p>
            <button
              onClick={() => setFollowed(!followed)}
              className={`mt-3 flex items-center justify-center gap-1 px-5 py-2 rounded-lg text-sm font-medium ${
                followed
                  ? 'bg-gray-200 text-gray-600'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              {followed ? '已关注' : '+ 关注'}
            </button>
          </div>
        </div>

        {/* 简介 - 标题 + 内容 + 右侧箭头 */}
        <div className="mt-6">
          <h3 className="text-base font-medium text-gray-900 mb-2">简介</h3>
          <div
            className="flex items-start gap-2 bg-white rounded-xl border border-gray-100 p-4 cursor-pointer hover:bg-gray-50/80"
            onClick={() => {}}
          >
            <p className="flex-1 text-sm text-gray-600 leading-relaxed line-clamp-3">{SAMPLE_BIO}</p>
            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          </div>
        </div>

        {/* 豆瓣读书活动卡片 - 蓝紫渐变 */}
        <div
          className="mt-4 rounded-xl overflow-hidden border border-gray-100"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
          }}
        >
          <div className="p-4 text-white">
            <p className="text-xs opacity-90">豆瓣读书</p>
            <h4 className="text-base font-medium mt-1">从细节游入文学的愉悦之海</h4>
            <p className="text-xs opacity-90 mt-0.5">《小说榫卯》的阅读关键词</p>
            <p className="text-xs opacity-80 mt-2">01/29 19:30-21:30</p>
            <p className="text-xs opacity-80">主办方:豆瓣读书 世纪文景</p>
            <p className="text-xs opacity-80">嘉宾 张秋子 杨宁 杨沁</p>
          </div>
        </div>

        {/* 影视 - 标题 + 全部影视(红) + 横向列表，3:4 竖图，一横屏 2 个 */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-medium text-gray-900">影视</h3>
            <button className="text-sm text-red-500 flex items-center gap-0.5">
              全部影视 36
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {SAMPLE_MOVIES.map((m) => (
              <div
                key={m.id}
                onClick={() => onMovieClick?.(m.id)}
                className="flex-shrink-0 w-[calc((100vw-2.5rem)/2)] max-w-44 cursor-pointer"
              >
                <div className="rounded-lg overflow-hidden bg-white border border-gray-100 aspect-[3/4]">
                  <ImageWithFallback
                    src={m.poster}
                    alt={m.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mt-1.5 truncate">{m.title}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {m.rating != null ? (
                    <>
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-xs text-gray-600">{m.rating}</span>
                    </>
                  ) : (
                    <span className="text-xs text-gray-400">暂无评</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 相册 - 标题 + 全部照片(红) + 横向列表 */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-medium text-gray-900">相册</h3>
            <button className="text-sm text-red-500 flex items-center gap-0.5">
              全部照片 12
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {SAMPLE_PHOTOS.map((src, i) => (
              <div key={i} className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
                <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
