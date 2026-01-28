import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface BindPhoneProps {
  onBack: () => void;
}

export function BindPhone({ onBack }: BindPhoneProps) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = () => {
    if (!phone || phone.length !== 11) {
      alert('请输入正确的手机号');
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
    alert('验证码已发送');
  };

  const handleSubmit = () => {
    if (!phone || !code) {
      alert('请填写完整信息');
      return;
    }
    alert('手机绑定成功！');
    onBack();
  };

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">绑定手机</h1>
      </div>

      <div className="px-4 py-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-2">手机号</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="请输入手机号"
            maxLength={11}
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
