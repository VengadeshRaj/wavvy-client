import { useState } from 'react';

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

const mockChats: Chat[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    lastMessage: 'Hey! Are we still meeting tomorrow?',
    time: '2:34 PM',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    lastMessage: 'Thanks for the update 👍',
    time: '1:15 PM',
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: 'Ananya Patel',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    lastMessage: 'I\'ll send you the files by evening',
    time: '11:42 AM',
    unread: 5,
    online: false,
  },
  {
    id: 4,
    name: 'Dev Team',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop',
    lastMessage: 'Vikram: Meeting at 4 PM today',
    time: '10:30 AM',
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    lastMessage: 'Perfect! See you then 😊',
    time: 'Yesterday',
    unread: 0,
    online: false,
  },
  {
    id: 6,
    name: 'Arjun Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    lastMessage: 'Can you review the PR?',
    time: 'Yesterday',
    unread: 1,
    online: false,
  },
  {
    id: 7,
    name: 'Family',
    avatar: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=150&h=150&fit=crop',
    lastMessage: 'Mom: Don\'t forget to call Dad',
    time: 'Monday',
    unread: 0,
    online: false,
  },
  {
    id: 8,
    name: 'Kavya Menon',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    lastMessage: 'That sounds great!',
    time: 'Sunday',
    unread: 0,
    online: true,
  },
];

export default function Chat() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="size-full flex flex-col relative overflow-hidden bg-[#0A0A0A] h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#FF6B00] rounded-full opacity-10 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#FF8533] rounded-full opacity-10 blur-[100px] animate-[float_10s_ease-in-out_infinite_2s]" />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-[#1A1A1A] border-b border-[rgba(255,107,0,0.2)] px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.29 0-2.5-.3-3.57-.82l-.26-.14-2.67.45.45-2.67-.14-.26A7.934 7.934 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h1 className="text-2xl" style={{ fontWeight: 700 }}>Messages</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full hover:bg-[rgba(255,107,0,0.1)] flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-[rgba(255,107,0,0.1)] flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative z-10 bg-[#1A1A1A] px-4 py-4 border-b border-[rgba(255,107,0,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.2)] rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[rgba(255,107,0,0.2)] transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {filteredChats.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`px-4 py-4 border-b border-[rgba(255,107,0,0.1)] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,107,0,0.05)] ${
                selectedChat === chat.id ? 'bg-[rgba(255,107,0,0.08)]' : ''
              }`}
              style={{
                animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[rgba(255,107,0,0.3)]"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FF6B00] rounded-full border-2 border-[#1A1A1A]" />
                  )}
                </div>

                {/* Chat Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white truncate" style={{ fontWeight: 600 }}>
                      {chat.name}
                    </h3>
                    <span className="text-xs text-[#888888] flex-shrink-0 ml-2">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#AAAAAA] truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <div className="flex-shrink-0 ml-2 min-w-[24px] h-6 bg-[#FF6B00] rounded-full flex items-center justify-center px-2">
                        <span className="text-xs text-black" style={{ fontWeight: 700 }}>
                          {chat.unread}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-6 z-20">
        <button className="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(255,107,0,0.4)] hover:shadow-[0_8px_40px_rgba(255,107,0,0.6)] transition-all duration-300 hover:scale-110">
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}