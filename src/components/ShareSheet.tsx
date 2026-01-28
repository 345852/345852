import { MessageCircle, Copy, X } from 'lucide-react';

export interface SharePayload {
  title?: string;
  url?: string;
}

interface ShareSheetProps {
  open: boolean;
  onClose: () => void;
  payload?: SharePayload;
}

const OPTIONS = [
  { key: 'qq', label: 'QQ好友', icon: MessageCircle },
  { key: 'wechat', label: '微信好友', icon: MessageCircle },
  { key: 'moments', label: '微信朋友圈', icon: MessageCircle },
  { key: 'link', label: '生成链接', icon: Copy },
] as const;

export function ShareSheet({ open, onClose, payload }: ShareSheetProps) {
  if (!open) return null;

  const shareUrl = payload?.url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = payload?.title || '精彩内容';

  const handleChoice = (key: (typeof OPTIONS)[number]['key']) => {
    if (key === 'link') {
      navigator.clipboard?.writeText(shareUrl).then(
        () => alert('链接已复制到剪贴板'),
        () => alert('复制失败，请手动复制')
      );
    } else {
      alert(`分享到${OPTIONS.find((o) => o.key === key)?.label}（演示)`);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative w-full max-w-md bg-white rounded-t-2xl px-6 pt-4 pb-8 safe-area-pb"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">分享到</h3>
          <button
            onClick={onClose}
            className="p-2 -mr-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {OPTIONS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => handleChoice(key)}
              className="flex flex-col items-center gap-2 py-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-xs text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
