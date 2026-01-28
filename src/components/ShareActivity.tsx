import { ArrowLeft, Gift, Users, Copy, Share2, Check, Trophy, Star, Crown, Award } from 'lucide-react';
import { useState } from 'react';
import { useShare } from '../contexts/ShareContext';

interface ShareActivityProps {
  onBack: () => void;
}

export function ShareActivity({ onBack }: ShareActivityProps) {
  const { openShare } = useShare();
  const [copied, setCopied] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const inviteCode = 'FILM2026';
  const invitedCount = 8; // 已邀请人数

  const rewardLevels = [
    { level: 1, invites: 3, reward: '7天VIP会员', icon: Star, unlocked: true },
    { level: 2, invites: 10, reward: '30天VIP会员', icon: Trophy, unlocked: false },
    { level: 3, invites: 20, reward: '90天VIP会员', icon: Award, unlocked: false },
    { level: 4, invites: 50, reward: '年度VIP会员', icon: Crown, unlocked: false },
  ];

  const invitedFriends = [
    { id: 1, name: '张小明', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', date: '2026-01-18', reward: '+7天VIP' },
    { id: 2, name: '李华', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', date: '2026-01-17', reward: '+7天VIP' },
    { id: 3, name: '王芳', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', date: '2026-01-16', reward: '+7天VIP' },
    { id: 4, name: '刘强', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', date: '2026-01-15', reward: '+7天VIP' },
    { id: 5, name: '陈静', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', date: '2026-01-14', reward: '+7天VIP' },
    { id: 6, name: '赵伟', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', date: '2026-01-13', reward: '+7天VIP' },
    { id: 7, name: '周敏', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100', date: '2026-01-12', reward: '+7天VIP' },
    { id: 8, name: '吴磊', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', date: '2026-01-11', reward: '+7天VIP' },
  ];

  const handleCopyCode = () => {
    try {
      // Try using the Clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(inviteCode).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }).catch(() => {
          // Fallback method
          fallbackCopyTextToClipboard(inviteCode);
        });
      } else {
        // Fallback method for older browsers
        fallbackCopyTextToClipboard(inviteCode);
      }
    } catch (err) {
      fallbackCopyTextToClipboard(inviteCode);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  };

  const handleShare = () => {
    const inviteUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}?invite=${inviteCode}`
      : '';
    openShare({
      title: '邀你一起看电影',
      url: inviteUrl,
    });
  };

  const nextReward = rewardLevels.find(level => !level.unlocked);
  const progress = nextReward ? (invitedCount / nextReward.invites) * 100 : 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 px-4 pt-12 pb-20">
        <button onClick={onBack} className="mb-4 text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">邀请好友 赢VIP会员</h1>
          <p className="text-white/90 text-sm">分享越多，奖励越多</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-12">
        {/* Invite Code Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm mb-2">我的专属邀请码</p>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-xl border-2 border-dashed border-red-200">
                <span className="text-2xl font-bold text-red-600 tracking-wider">{inviteCode}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className={`p-3 rounded-xl transition-all ${
                  copied ? 'bg-green-500' : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-green-500 text-xs mt-2">复制成功！</p>
            )}
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-600">已邀请好友</span>
              </div>
              <span className="text-sm font-medium">
                <span className="text-red-600 text-lg">{invitedCount}</span>
                {nextReward && <span className="text-gray-400"> / {nextReward.invites}人</span>}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            {nextReward && (
              <p className="text-xs text-gray-500 mt-2 text-center">
                还差 {nextReward.invites - invitedCount} 人解锁「{nextReward.reward}」
              </p>
            )}
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95"
          >
            <Share2 className="w-5 h-5" />
            立即分享邀请好友
          </button>
        </div>

        {/* Reward Levels */}
        <div className="bg-white rounded-2xl p-6 mb-4">
          <h2 className="font-medium mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-red-500" />
            奖励等级
          </h2>
          <div className="space-y-3">
            {rewardLevels.map((level) => {
              const Icon = level.icon;
              const isActive = invitedCount >= level.invites;
              return (
                <div
                  key={level.level}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive
                          ? 'bg-gradient-to-br from-red-500 to-orange-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${isActive ? 'text-red-600' : 'text-gray-600'}`}>
                        {level.reward}
                      </p>
                      <p className="text-xs text-gray-500">邀请 {level.invites} 人</p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      已解锁
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Invited Friends */}
        <div className="bg-white rounded-2xl p-6 mb-4">
          <h2 className="font-medium mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-red-500" />
            已邀请的好友 ({invitedFriends.length})
          </h2>
          <div className="space-y-3">
            {invitedFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{friend.name}</p>
                  <p className="text-xs text-gray-500">{friend.date}</p>
                </div>
                <div className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full font-medium">
                  {friend.reward}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div className="bg-white rounded-2xl p-6 mb-4">
          <h2 className="font-medium mb-4">活动规则</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex gap-2">
              <span className="text-red-500 font-medium">1.</span>
              <p>分享你的专属邀请码给好友，好友注册时填写即可绑定</p>
            </div>
            <div className="flex gap-2">
              <span className="text-red-500 font-medium">2.</span>
              <p>每成功邀请1位好友注册，你和好友都将获得7天VIP会员</p>
            </div>
            <div className="flex gap-2">
              <span className="text-red-500 font-medium">3.</span>
              <p>达到不同邀请人数，可解锁更高等级的VIP会员奖励</p>
            </div>
            <div className="flex gap-2">
              <span className="text-red-500 font-medium">4.</span>
              <p>邀请奖励会自动发放到账户，可在个人中心查看</p>
            </div>
            <div className="flex gap-2">
              <span className="text-red-500 font-medium">5.</span>
              <p>活动最终解释权归平台所有</p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 border border-red-100">
          <p className="text-sm text-gray-700 text-center">
            💡 <span className="font-medium">小贴士：</span>分享到微信群、朋友圈，邀请效果更佳！
          </p>
        </div>
      </div>
    </div>
  );
}