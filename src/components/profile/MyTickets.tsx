import { ArrowLeft, Ticket, QrCode, Calendar, MapPin, Clock } from 'lucide-react';

interface MyTicketsProps {
  onBack: () => void;
}

export function MyTickets({ onBack }: MyTicketsProps) {
  const tickets = [
    {
      id: '1',
      movieTitle: '速度与激情9',
      cinema: '万达影城(国贸店)',
      hall: '3号厅',
      seat: '6排8座',
      date: '2024-01-20',
      time: '19:30',
      price: 45,
      status: 'valid', // valid, used, expired
      qrCode: '202401200001'
    },
    {
      id: '2',
      movieTitle: '星际穿越',
      cinema: '橙天嘉禾影城(朝阳大悦城店)',
      hall: '5号厅 IMAX',
      seat: '10排12座',
      date: '2024-01-15',
      time: '14:00',
      price: 68,
      status: 'used',
      qrCode: '202401150002'
    },
    {
      id: '3',
      movieTitle: '泰坦尼克号',
      cinema: '耀莱成龙影城(五棵松店)',
      hall: '2号厅',
      seat: '8排15座',
      date: '2024-01-10',
      time: '20:30',
      price: 40,
      status: 'expired',
      qrCode: '202401100003'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'valid':
        return <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs">待使用</span>;
      case 'used':
        return <span className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-xs">已使用</span>;
      case 'expired':
        return <span className="text-red-600 bg-red-50 px-2 py-1 rounded text-xs">已过期</span>;
      default:
        return null;
    }
  };

  return (
    <div className="pb-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 bg-white border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl">我的票券</h1>
      </div>

      {/* Tickets List */}
      <div className="px-4 py-4 space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            {/* Ticket Header */}
            <div className="p-4 border-b border-gray-100 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-2">{ticket.movieTitle}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{ticket.cinema}</span>
                </div>
              </div>
              {getStatusBadge(ticket.status)}
            </div>

            {/* Ticket Details */}
            <div className="p-4 bg-gray-50 border-b border-dashed border-gray-200">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{ticket.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{ticket.time}</span>
                </div>
                <div className="col-span-2 flex items-center gap-2 text-gray-700">
                  <Ticket className="w-4 h-4 text-gray-400" />
                  <span>{ticket.hall} · {ticket.seat}</span>
                </div>
              </div>
            </div>

            {/* Ticket Footer */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">票价：</span>
                <span className="text-red-500 text-lg">¥{ticket.price}</span>
              </div>
              
              {ticket.status === 'valid' && (
                <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                  <QrCode className="w-4 h-4" />
                  <span>取票码</span>
                </button>
              )}
              
              {ticket.status === 'used' && (
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">
                  再看一次
                </button>
              )}
              
              {ticket.status === 'expired' && (
                <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm cursor-not-allowed">
                  已过期
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no tickets) */}
      {tickets.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Ticket className="w-12 h-12 text-gray-400" />
          </div>
          <p className="text-gray-500 mb-6">暂无票券记录</p>
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
            去购票
          </button>
        </div>
      )}
    </div>
  );
}
