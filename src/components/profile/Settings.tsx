import { ArrowLeft, ChevronRight } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export function Settings({ onBack, onNavigate }: SettingsProps) {
  const settingSections = [
    {
      title: '账号设置',
      items: [
        { label: '修改密码', value: '', page: 'changePassword' },
        { label: '绑定手机', value: '138****8888', page: 'bindPhone' },
        { label: '绑定邮箱', value: 'user@example.com', page: 'bindEmail' },
        { label: '实名认证', value: '已认证', page: 'realName' }
      ]
    },
    {
      title: '隐私设置',
      items: [
        { label: '隐私设置', value: '', page: 'privacy' }
      ]
    },
    {
      title: '通知设置',
      items: [
        { label: '通知设置', value: '', page: 'notification' }
      ]
    },
    {
      title: '其他',
      items: [
        { label: '清除缓存', value: '2.3 GB', page: 'clearCache' },
        { label: '关于我们', value: '', page: 'about' },
        { label: '用户协议', value: '', page: 'terms' },
        { label: '隐私政策', value: '', page: 'policy' }
      ]
    }
  ];

  const handleItemClick = (page: string) => {
    if (page === 'clearCache') {
      if (confirm('确认清除缓存吗？')) {
        alert('缓存已清除');
      }
      return;
    }
    onNavigate(page);
  };

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">账号设置</h1>
      </div>

      {/* Settings Sections */}
      <div className="py-4 space-y-6">
        {settingSections.map((section, index) => (
          <div key={index}>
            <h3 className="px-4 text-sm text-gray-500 mb-3">{section.title}</h3>
            <div className="bg-white">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => handleItemClick(item.page)}
                  className="w-full flex items-center justify-between px-4 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  <span>{item.label}</span>
                  <div className="flex items-center gap-2">
                    {item.value && (
                      <span className="text-sm text-gray-500">{item.value}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}