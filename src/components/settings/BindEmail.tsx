import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface BindEmailProps {
  onBack: () => void;
}

export function BindEmail({ onBack }: BindEmailProps) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = () => {
    if (!email || !email.includes('@')) {
      alert('请输入正确的邮箱地址');
      return;
    }
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    alert('验证码已发送到您的邮箱');
  };

  const handleSubmit = () => {
    if (!email || !code) {
      alert('请填写完整信息');
      return;
    }
    alert('邮箱绑定成功！');
    onBack();
  };

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">绑定邮箱</h1>
      </div>

      <div className="px-4 py-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">邮箱地址</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="请输入邮箱地址"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">验证码</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="请输入验证码"
              maxLength={6}
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={handleSendCode}
              disabled={countdown > 0}
              className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {countdown > 0 ? `${countdown}秒` : '发送验证码'}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-6"
        >
          确认绑定
        </button>
      </div>
    </div>
  );
}
