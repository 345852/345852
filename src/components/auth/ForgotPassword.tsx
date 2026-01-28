import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [step, setStep] = useState(1); // 1: 验证手机号, 2: 重置密码

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // 只允许数字
    if (value.length <= 11) {
      setPhone(value);
    }
  };

  const handleSendCode = () => {
    if (phone.length !== 11) {
      alert('请输入正确的11位手机号');
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
    alert('验证码已发送至您的手机');
  };

  const handleVerifyCode = () => {
    if (!code) {
      alert('请输入验证码');
      return;
    }
    // 模拟验证成功
    setStep(2);
  };

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      alert('请填写完整信息');
      return;
    }
    if (newPassword.length < 6 || newPassword.length > 20) {
      alert('密码长度应为6-20位');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    alert('密码重置成功！请使用新密码登录');
    onBack();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">忘记密码</h1>
      </div>

      <div className="px-6 py-8">
        {step === 1 ? (
          // Step 1: 验证手机号
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-6">请输入您的注册手机号，我们将发送验证码到您的手机</p>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">手机号</label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
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
                  disabled={countdown > 0 || phone.length !== 11}
                  className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {countdown > 0 ? `${countdown}秒` : '发送验证码'}
                </button>
              </div>
            </div>

            <button
              onClick={handleVerifyCode}
              className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              下一步
            </button>
          </div>
        ) : (
          // Step 2: 重置密码
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-6">请设置新密码</p>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">新密码</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => {
                  if (e.target.value.length <= 20) {
                    setNewPassword(e.target.value);
                  }
                }}
                placeholder="请输入新密码（6-20位）"
                maxLength={20}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">确认密码</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  if (e.target.value.length <= 20) {
                    setConfirmPassword(e.target.value);
                  }
                }}
                placeholder="请再次输入新密码"
                maxLength={20}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              onClick={handleResetPassword}
              className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              完成
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
