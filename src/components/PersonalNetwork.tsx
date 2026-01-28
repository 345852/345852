import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, X, ArrowLeft } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface PersonalNetworkProps {
  onClose: () => void;
}

interface Person {
  id: number;
  name: string;
  avatar: string;
}

interface Connection {
  from: number;
  to: number;
  relationship: string;
}

const ALL_PEOPLE: Person[] = [
  { id: 0, name: '张伟', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 1, name: '李明', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 2, name: '王芳', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 3, name: '赵敏', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGV8ZW58MXx8fHwxNzY4NDg3NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 4, name: '王五', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 5, name: '王五', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 6, name: '王五', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400' },
  { id: 7, name: '王五', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ4NzY0OHww&ixlib=rb-4.1.0&q=80&w=400' },
];

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1, relationship: '同事' },
  { from: 0, to: 2, relationship: '朋友' },
  { from: 0, to: 3, relationship: '通讯录好友' },
  { from: 0, to: 4, relationship: '家人' },
  { from: 0, to: 5, relationship: '家人' },
  { from: 0, to: 6, relationship: '朋友' },
  { from: 0, to: 7, relationship: '同学' },
];

function getConnected(centerId: number): { id: number; relationship: string }[] {
  const out: { id: number; relationship: string }[] = [];
  for (const c of CONNECTIONS) {
    if (c.from === centerId) out.push({ id: c.to, relationship: c.relationship });
    else if (c.to === centerId) out.push({ id: c.from, relationship: c.relationship });
  }
  return out;
}

function defaultLayout(centerId: number, connectedIds: number[]) {
  const layout: Record<number, { x: number; y: number }> = {};
  layout[centerId] = { x: 50, y: 45 };
  const n = connectedIds.length;
  const radius = 28;
  connectedIds.forEach((id, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    layout[id] = {
      x: 50 + radius * Math.cos(angle),
      y: 45 + radius * Math.sin(angle),
    };
  });
  return layout;
}

export function PersonalNetwork({ onClose }: PersonalNetworkProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [centerId, setCenterId] = useState(0);
  const [positions, setPositions] = useState<Record<number, { x: number; y: number }>>(() =>
    defaultLayout(0, getConnected(0).map((c) => c.id))
  );
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const didDragRef = useRef(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const connected = getConnected(centerId);
  const visibleIds = [centerId, ...connected.map((c) => c.id)];

  const applyLayout = useCallback((newCenterId: number) => {
    const next = getConnected(newCenterId).map((c) => c.id);
    setPositions(defaultLayout(newCenterId, next));
    setCenterId(newCenterId);
  }, []);

  // 删除搜索内容时恢复默认关系状态（中心为张伟）
  useEffect(() => {
    if (searchQuery.trim() === '') {
      applyLayout(0);
    }
  }, [searchQuery, applyLayout]);

  const handleSearch = useCallback(() => {
    const q = searchQuery.trim();
    if (!q) return;
    const found = ALL_PEOPLE.find((p) => p.name === q);
    if (found) {
      applyLayout(found.id);
    } else {
      alert(`未找到「${q}」`);
    }
  }, [searchQuery, applyLayout]);

  const getPerson = (id: number) => ALL_PEOPLE.find((p) => p.id === id)!;
  const getPos = (id: number) => positions[id] ?? { x: 50, y: 45 };

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    didDragRef.current = false;
    const pos = getPos(id);
    setDraggingId(id);
    dragStart.current = { x: e.clientX, y: e.clientY, posX: pos.x, posY: pos.y };
  };

  const handleTouchStart = (e: React.TouchEvent, id: number) => {
    didDragRef.current = false;
    const t = e.targetTouches[0];
    const pos = getPos(id);
    setDraggingId(id);
    dragStart.current = { x: t.clientX, y: t.clientY, posX: pos.x, posY: pos.y };
  };

  useEffect(() => {
    if (draggingId == null) return;
    const el = canvasRef.current;
    if (!el) return;
    const id = draggingId;

    const onMove = (clientX: number, clientY: number) => {
      didDragRef.current = true;
      const rect = el.getBoundingClientRect();
      const start = dragStart.current;
      const scaleX = 100 / rect.width;
      const scaleY = 100 / rect.height;
      const dx = (clientX - start.x) * scaleX;
      const dy = (clientY - start.y) * scaleY;
      const nx = Math.max(2, Math.min(98, start.posX + dx));
      const ny = Math.max(2, Math.min(98, start.posY + dy));
      setPositions((prev) => ({ ...prev, [id]: { x: nx, y: ny } }));
      dragStart.current = { x: clientX, y: clientY, posX: nx, posY: ny };
    };

    const handleEnd = () => {
      setDraggingId(null);
    };

    const handleMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const handleMouseUp = () => handleEnd();

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.targetTouches[0]) onMove(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    };
    const handleTouchEnd = () => handleEnd();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [draggingId]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-white border-b border-gray-200 px-4 pt-3 pb-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <button onClick={onClose} className="p-1">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-medium">看个人脉</h1>
          <div className="w-6" />
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="搜索人名..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 bg-transparent outline-none text-sm min-w-0"
          />
          {searchQuery.length > 0 && (
            <button type="button" onClick={() => setSearchQuery('')} className="flex-shrink-0">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          )}
          <button
            type="button"
            onClick={handleSearch}
            className="flex-shrink-0 text-red-500 text-sm font-medium"
          >
            搜索
          </button>
        </div>
      </div>

      <div ref={canvasRef} className="relative flex-1 min-h-0 w-full bg-gray-50 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connected.map(({ id }) => {
            const from = getPos(centerId);
            const to = getPos(id);
            return (
              <line
                key={`${centerId}-${id}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#000"
                strokeWidth="0.4"
              />
            );
          })}
        </svg>

        {/* 关系标签：用 HTML 定位，避免 SVG foreignObject 拉伸变形 */}
        {connected.map(({ id, relationship }) => {
          const from = getPos(centerId);
          const to = getPos(id);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          return (
            <div
              key={`label-${centerId}-${id}`}
              className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${midX}%`, top: `${midY}%` }}
            >
              <span className="inline-block bg-red-300 px-2 py-0.5 rounded text-xs text-white whitespace-nowrap">
                {relationship}
              </span>
            </div>
          );
        })}

        {visibleIds.map((id) => {
          const person = getPerson(id);
          const pos = getPos(id);
          const isCenter = id === centerId;
          return (
            <div
              key={id}
              role="button"
              tabIndex={0}
              className="absolute select-none cursor-grab active:cursor-grabbing"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseDown={(e) => handleMouseDown(e, id)}
              onTouchStart={(e) => handleTouchStart(e, id)}
              onDoubleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (visibleIds.includes(id)) applyLayout(id);
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full overflow-hidden border-4 ${
                    isCenter ? 'border-red-400 w-20 h-20' : 'border-gray-300 w-14 h-14'
                  }`}
                >
                  <ImageWithFallback
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
                <p className={`mt-1 text-center ${isCenter ? 'font-medium' : 'text-sm'}`}>
                  {person.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
