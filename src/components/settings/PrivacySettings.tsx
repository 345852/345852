import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface PrivacySettingsProps {
  onBack: () => void;
}

export function PrivacySettings({ onBack }: PrivacySettingsProps) {
  const [collectionPrivacy, setCollectionPrivacy] = useState('all');
  const [historyPrivacy, setHistoryPrivacy] = useState('self');
  const [messagePrivacy, setMessagePrivacy] = useState('all');

  const privacyOptions = [
    { value: 'all', label: '所有人' },
    { value: 'friends', label: '仅好友' },
    { value: 'self', label: '仅自己' }
  ];

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">隐私设置</h1>
      </div>

      <div className="py-4 space-y-6">
        {/* 收藏隐私 */}
        <div>
          <h3 className="px-4 mb-3">谁可以看我的收藏</h3>
          <div className="bg-white">
            {privacyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setCollectionPrivacy(option.value)}
                className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <span>{option.label}</span>
                {collectionPrivacy === option.value && (
                  <Check className="w-5 h-5 text-red-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 观影记录隐私 */}
        <div>
          <h3 className="px-4 mb-3">谁可以看我的观影记录</h3>
          <div className="bg-white">
            {privacyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setHistoryPrivacy(option.value)}
                className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <span>{option.label}</span>
                {historyPrivacy === option.value && (
                  <Check className="w-5 h-5 text-red-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 消息隐私 */}
        <div>
          <h3 className="px-4 mb-3">谁可以给我发消息</h3>
          <div className="bg-white">
            {privacyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMessagePrivacy(option.value)}
                className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <span>{option.label}</span>
                {messagePrivacy === option.value && (
                  <Check className="w-5 h-5 text-red-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
