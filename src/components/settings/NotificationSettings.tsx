import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface NotificationSettingsProps {
  onBack: () => void;
}

export function NotificationSettings({ onBack }: NotificationSettingsProps) {
  const [newMessage, setNewMessage] = useState(true);
  const [followUpdate, setFollowUpdate] = useState(true);
  const [systemMessage, setSystemMessage] = useState(true);
  const [commentReply, setCommentReply] = useState(true);
  const [likeNotification, setLikeNotification] = useState(true);

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative w-12 h-7 rounded-full transition-colors ${
        checked ? 'bg-red-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      ></div>
    </button>
  );

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-3 border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">通知设置</h1>
      </div>

      <div className="py-4">
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <div>
              <h4 className="mb-1">新消息通知</h4>
              <p className="text-xs text-gray-500">接收新消息时通知</p>
            </div>
            <Toggle checked={newMessage} onChange={() => setNewMessage(!newMessage)} />
          </div>

          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <div>
              <h4 className="mb-1">关注更新通知</h4>
              <p className="text-xs text-gray-500">关注的人发布新内容时通知</p>
            </div>
            <Toggle checked={followUpdate} onChange={() => setFollowUpdate(!followUpdate)} />
          </div>

          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <div>
              <h4 className="mb-1">系统消息通知</h4>
              <p className="text-xs text-gray-500">接收系统通知和公告</p>
            </div>
            <Toggle checked={systemMessage} onChange={() => setSystemMessage(!systemMessage)} />
          </div>

          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <div>
              <h4 className="mb-1">评论回复通知</h4>
              <p className="text-xs text-gray-500">有人回复你的评论时通知</p>
            </div>
            <Toggle checked={commentReply} onChange={() => setCommentReply(!commentReply)} />
          </div>

          <div className="flex items-center justify-between px-4 py-4">
            <div>
              <h4 className="mb-1">点赞通知</h4>
              <p className="text-xs text-gray-500">有人点赞你的内容时通知</p>
            </div>
            <Toggle checked={likeNotification} onChange={() => setLikeNotification(!likeNotification)} />
          </div>
        </div>
      </div>
    </div>
  );
}
