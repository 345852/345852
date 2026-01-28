import { ArrowLeft } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

export function AboutUs({ onBack }: AboutUsProps) {
  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">关于我们</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Logo and Name */}
        <div className="text-center">
          <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-white">影</span>
          </div>
          <h2 className="text-2xl mb-2">影视社区</h2>
          <p className="text-sm text-gray-500">版本 1.0.0</p>
        </div>

        {/* Description */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            影视社区是一款专注于电影和电视剧的社交平台，致力于为影视爱好者提供一个发现、分享和讨论优质影视内容的空间。
          </p>
          
          <p>
            在这里，你可以：
          </p>
          
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>发现热门和精选的影视作品</li>
            <li>查看专业的影视排行榜</li>
            <li>获取个性化的影视推荐</li>
            <li>与其他影迷交流观影体验</li>
            <li>收藏喜欢的影片并记录观影历史</li>
            <li>为影片评分并发表评论</li>
          </ul>

          <p>
            我们的使命是让每个人都能轻松找到自己喜欢的影视作品，并与志同道合的朋友分享观影的快乐。
          </p>
        </div>

        {/* Contact */}
        <div className="pt-6 border-t border-gray-200 space-y-3">
          <h3 className="mb-3">联系我们</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>官方网站：www.movieclub.com</p>
            <p>客服邮箱：support@movieclub.com</p>
            <p>商务合作：business@movieclub.com</p>
            <p>客服热线：400-888-8888</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>© 2024 影视社区 All Rights Reserved</p>
          <p className="mt-2">由影视科技有限公司开发运营</p>
        </div>
      </div>
    </div>
  );
}
