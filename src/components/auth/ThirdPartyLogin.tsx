import { ArrowLeft } from 'lucide-react';

interface ThirdPartyLoginProps {
  type: 'wechat' | 'qq' | 'apple';
  onBack: () => void;
  onSuccess: () => void;
}

export function ThirdPartyLogin({ type, onBack, onSuccess }: ThirdPartyLoginProps) {
  const config = {
    wechat: {
      name: '微信',
      color: 'bg-green-500',
      icon: '微信',
      description: '使用微信扫码登录'
    },
    qq: {
      name: 'QQ',
      color: 'bg-blue-500',
      icon: 'QQ',
      description: '使用QQ扫码登录'
    },
    apple: {
      name: 'Apple',
      color: 'bg-gray-800',
      icon: 'Apple',
      description: '使用Apple ID登录'
    }
  };

  const currentConfig = config[type];

  const handleAuthorize = () => {
    // 模拟授权过程
    setTimeout(() => {
      alert(`${currentConfig.name}登录成功！`);
      onSuccess();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">{currentConfig.name}登录</h1>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-16">
        {/* Icon */}
        <div className={`w-24 h-24 ${currentConfig.color} rounded-3xl flex items-center justify-center text-white text-3xl mb-8`}>
          {currentConfig.icon}
        </div>

        {/* QR Code Placeholder */}
        <div className="w-64 h-64 bg-gray-100 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-6">
          <div className="text-center text-gray-500">
            <div className="w-48 h-48 bg-white border border-gray-300 mx-auto mb-3 flex items-center justify-center">
              <span className="text-xs">二维码区域</span>
            </div>
            <p className="text-sm">{currentConfig.description}</p>
          </div>
        </div>

        {/* Tips */}
        <div className="w-full max-w-sm space-y-3 text-sm text-gray-600">
          <p className="flex items-start gap-2">
            <span className="text-red-500 flex-shrink-0">1.</span>
            <span>打开{currentConfig.name}客户端，扫描二维码</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-500 flex-shrink-0">2.</span>
            <span>在{currentConfig.name}中确认登录</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-red-500 flex-shrink-0">3.</span>
            <span>登录成功后自动跳转</span>
          </p>
        </div>

        {/* Mock Login Button (for demo) */}
        <button
          onClick={handleAuthorize}
          className={`mt-8 px-8 py-3 ${currentConfig.color} text-white rounded-lg hover:opacity-90`}
        >
          模拟{currentConfig.name}授权登录
        </button>
        
        <p className="mt-4 text-xs text-gray-400">（演示用按钮，实际使用时会通过扫码授权）</p>
      </div>
    </div>
  );
}
