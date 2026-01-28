import { ArrowLeft, Calendar, Gift, Flame, Award } from 'lucide-react';
import { useState } from 'react';

interface CheckInProps {
  onBack: () => void;
}

export function CheckIn({ onBack }: CheckInProps) {
  const [checkedInDays, setCheckedInDays] = useState<number[]>([1, 2, 3, 5, 8, 15]); // 已签到的日期
  const [consecutiveDays, setConsecutiveDays] = useState(6);
  const [totalPoints, setTotalPoints] = useState(320);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  // 获取当前月份的天数和第一天是星期几
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  // 签到奖励规则
  const rewards = [
    { day: 1, points: 10, label: '第1天' },
    { day: 3, points: 20, label: '第3天' },
    { day: 7, points: 30, label: '第7天' },
    { day: 15, points: 50, label: '第15天' },
    { day: 30, points: 100, label: '第30天' }
  ];

  const handleCheckIn = () => {
    if (!hasCheckedInToday) {
      setCheckedInDays([...checkedInDays, currentDay]);
      setConsecutiveDays(consecutiveDays + 1);
      setTotalPoints(totalPoints + 10);
      setHasCheckedInToday(true);
      alert('签到成功！获得10积分');
    }
  };

  // 渲染日历
  const renderCalendar = () => {
    const cells = [];
    
    // 空白单元格（月初前的空位）
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<div key={`empty-${i}`} className="aspect-square"></div>);
    }
    
    // 日期单元格
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDay;
      const isChecked = checkedInDays.includes(day);
      
      cells.push(
        <div
          key={day}
          className="aspect-square relative"
        >
          <div
            className={`w-full h-full flex flex-col items-center justify-center rounded-lg ${
              isToday ? 'bg-red-500 text-white font-bold' : ''
            } ${isChecked && !isToday ? 'bg-red-50' : ''}`}
          >
            <span className="text-sm">{day}</span>
            {isChecked && !isToday && (
              <div className="w-1 h-1 bg-red-500 rounded-full mt-0.5"></div>
            )}
          </div>
        </div>
      );
    }
    
    return cells;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b">
        <div className="flex items-center px-4 py-3">
          <button 
            onClick={onBack}
            className="mr-3 p-1 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl">每日签到</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* 签到统计卡片 */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-6 h-6" />
                <span className="text-3xl font-bold">{consecutiveDays}</span>
                <span className="text-sm opacity-90">天</span>
              </div>
              <p className="text-sm opacity-90">连续签到</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-2">
                <Award className="w-5 h-5" />
                <span className="text-2xl font-bold">{totalPoints}</span>
              </div>
              <p className="text-sm opacity-90">累计积分</p>
            </div>
          </div>

          <button
            onClick={handleCheckIn}
            disabled={hasCheckedInToday}
            className={`w-full py-4 rounded-xl font-medium transition-all ${
              hasCheckedInToday
                ? 'bg-white/30 cursor-not-allowed'
                : 'bg-white text-red-500 hover:bg-white/90'
            }`}
          >
            {hasCheckedInToday ? '今日已签到' : '立即签到 +10积分'}
          </button>
        </div>

        {/* 签到日历 */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-red-500" />
            <h2 className="font-medium">{currentYear}年{monthNames[currentMonth]}</h2>
          </div>

          {/* 星期标题 */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="h-8 flex items-center justify-center text-sm text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* 日历网格 */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>

          <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>今天</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-50 rounded"></div>
              <span>已签到</span>
            </div>
          </div>
        </div>

        {/* 签到奖励 */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-red-500" />
            <h2 className="font-medium">签到奖励</h2>
          </div>

          <div className="space-y-3">
            {rewards.map((reward) => {
              const isCompleted = consecutiveDays >= reward.day;
              const isCurrent = consecutiveDays === reward.day - 1;
              
              return (
                <div
                  key={reward.day}
                  className={`relative flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                    isCompleted
                      ? 'border-red-200 bg-red-50'
                      : isCurrent
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-red-500 text-white'
                          : isCurrent
                          ? 'bg-red-100 text-red-500'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Gift className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{reward.label}</p>
                      <p className="text-xs text-gray-500">连续签到{reward.day}天</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-500">+{reward.points}</p>
                      <p className="text-xs text-gray-500">积分</p>
                    </div>
                    {isCompleted && (
                      <div className="text-xs text-red-500 font-medium bg-red-100 px-2 py-1 rounded whitespace-nowrap">
                        已领取
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 签到说明 */}
        <div className="bg-white rounded-2xl p-4">
          <h3 className="font-medium mb-3">签到规则</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• 每日签到可获得10积分</p>
            <p>• 连续签到可获得额外奖励</p>
            <p>• 中断签到后连续天数重新计算</p>
            <p>• 积分可用于兑换会员、优惠券等权益</p>
          </div>
        </div>
      </div>
    </div>
  );
}