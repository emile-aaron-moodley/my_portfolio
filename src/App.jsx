import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Code2, Palette, Globe, Terminal, Cpu, Zap, 
  ArrowRight, Menu, X, ChevronDown, Phone, DollarSign, TrendingUp, 
  Users, ShoppingBag, Send, Plus, Image as ImageIcon, Calendar, Check, Play,
  Server, Database, Lock, Layout, BarChart3, MessageSquare,
  Package, AlertCircle, Search, Filter, MoreVertical, Bell, Settings,
  Hash, Video, Mic, Smile, Paperclip, CreditCard, PieChart, ArrowUpRight, ArrowDownRight,
  Activity, FileText, Clock, User, Shield, Truck, ClipboardList, Flag, Coffee
} from 'lucide-react';

// --- IMPORT YOUR IMAGE HERE ---
// This tells React to look for the file inside the src folder
import profilePic from './FB_IMG_1762275510940.jpg'; 

/**
 * ANIMATION VARIANTS
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

/**
 * DEMO 1: INVENTORY OS (High Fidelity Mock)
 */
const InventoryOSDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const inventoryData = [
    { id: 'SKU-001', name: 'Wireless Headphones', stock: 45, price: 129.99, status: 'In Stock', category: 'Electronics' },
    { id: 'SKU-002', name: 'Ergonomic Chair', stock: 8, price: 299.00, status: 'Low Stock', category: 'Furniture' },
    { id: 'SKU-003', name: 'Mechanical Keyboard', stock: 0, price: 159.50, status: 'Out of Stock', category: 'Electronics' },
    { id: 'SKU-004', name: 'USB-C Dock', stock: 120, price: 89.99, status: 'In Stock', category: 'Accessories' },
    { id: 'SKU-005', name: '27" 4K Monitor', stock: 12, price: 449.00, status: 'Low Stock', category: 'Electronics' },
  ];

  const ordersData = [
    { id: '#ORD-7782', customer: 'Alice Freeman', date: 'Oct 24, 2024', total: '$429.00', status: 'Shipped' },
    { id: '#ORD-7783', customer: 'Mark Wilson', date: 'Oct 24, 2024', total: '$89.99', status: 'Processing' },
    { id: '#ORD-7784', customer: 'Elena Rodriguez', date: 'Oct 23, 2024', total: '$1,250.00', status: 'Delivered' },
  ];

  return (
    <div className="bg-gray-50 h-[600px] w-full rounded-xl overflow-hidden flex text-gray-800 font-sans border border-gray-200 shadow-2xl">
      <div className="w-16 md:w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="p-4 md:p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-purple-500 p-2 rounded-lg"><Package size={20} className="text-white" /></div>
          <span className="font-bold text-lg hidden md:block">InvOS</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {['Dashboard', 'Inventory', 'Orders', 'Reports'].map((item) => (
            <button key={item} onClick={() => setActiveTab(item.toLowerCase())} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${activeTab === item.toLowerCase() ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              {item === 'Dashboard' ? <Layout size={18} /> : item === 'Inventory' ? <Package size={18} /> : item === 'Orders' ? <Truck size={18} /> : <ClipboardList size={18} />} 
              <span className="hidden md:block">{item}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        <header className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
          <h2 className="text-xl font-bold text-slate-800 capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"><Bell size={20} /></button>
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4"><div className="p-2 bg-green-100 text-green-600 rounded-lg"><DollarSign size={20}/></div><span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12.5%</span></div>
                  <h3 className="text-2xl font-bold text-slate-800">$24,500</h3>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4"><div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Package size={20}/></div><span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">+5</span></div>
                  <h3 className="text-2xl font-bold text-slate-800">1,240</h3>
                  <p className="text-sm text-gray-500">Products in Stock</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4"><div className="p-2 bg-red-100 text-red-600 rounded-lg"><AlertCircle size={20}/></div><span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Action Needed</span></div>
                  <h3 className="text-2xl font-bold text-slate-800">3</h3>
                  <p className="text-sm text-gray-500">Low Stock Alerts</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center h-64 text-gray-400">
                <div className="text-center">
                  <BarChart3 size={48} className="mx-auto mb-2 opacity-50"/>
                  <p>Real-time Sales Analytics Graph</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center"><h3 className="font-bold text-slate-800">All Products</h3><button className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600"><Filter size={16} /> Filter</button></div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-500"><tr><th className="px-6 py-3 font-medium">Product Name</th><th className="px-6 py-3 font-medium">Category</th><th className="px-6 py-3 font-medium">Price</th><th className="px-6 py-3 font-medium">Status</th></tr></thead>
                  <tbody className="divide-y divide-gray-100">{inventoryData.map((item) => (<tr key={item.id} className="hover:bg-gray-50/50 transition-colors"><td className="px-6 py-4 font-medium text-slate-700">{item.name}</td><td className="px-6 py-4 text-gray-500">{item.category}</td><td className="px-6 py-4 text-slate-700 font-medium">${item.price}</td><td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' : item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>{item.status}</span></td></tr>))}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center"><h3 className="font-bold text-slate-800">Recent Orders</h3></div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-500"><tr><th className="px-6 py-3 font-medium">Order ID</th><th className="px-6 py-3 font-medium">Customer</th><th className="px-6 py-3 font-medium">Date</th><th className="px-6 py-3 font-medium">Total</th><th className="px-6 py-3 font-medium">Status</th></tr></thead>
                  <tbody className="divide-y divide-gray-100">{ordersData.map((order) => (<tr key={order.id} className="hover:bg-gray-50/50 transition-colors"><td className="px-6 py-4 font-medium text-slate-700">{order.id}</td><td className="px-6 py-4 text-gray-500">{order.customer}</td><td className="px-6 py-4 text-gray-500">{order.date}</td><td className="px-6 py-4 font-bold text-slate-700">{order.total}</td><td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span></td></tr>))}</tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 animate-in zoom-in duration-300">
              <ClipboardList size={64} className="mb-4 text-gray-300"/>
              <h3 className="text-lg font-bold text-gray-600">No Reports Generated</h3>
              <p>Select a date range to generate a PDF report.</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">Generate Report</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

/**
 * DEMO 2: DEVSYNC (Discord-like Mock)
 */
const DevSyncDemo = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = ['general', 'frontend', 'backend', 'deployments', 'random'];
  const users = [
    { name: 'Sarah (PM)', status: 'online' },
    { name: 'Mike (Dev)', status: 'idle' },
    { name: 'Alex (Design)', status: 'online' },
    { name: 'Bot_Deploy', status: 'dnd' }
  ];

  const messagesByChannel = {
    general: [
      { user: 'Sarah (PM)', time: '10:30 AM', text: 'Hey team, is the new auth flow ready for review?' },
      { user: 'Mike (Dev)', time: '10:32 AM', text: 'Just finishing up the OAuth integration. Pushing to staging in 5 mins.' },
    ],
    frontend: [
      { user: 'Alex (Design)', time: '09:15 AM', text: 'I updated the Figma file with the new button states.' },
      { user: 'Mike (Dev)', time: '09:20 AM', text: 'Got it. Implementing the hover effects now.' },
      { user: 'Mike (Dev)', time: '09:22 AM', text: 'Check out this CSS trick:', isCode: true, code: 'backdrop-filter: blur(10px);' },
    ],
    backend: [
      { user: 'Mike (Dev)', time: 'Yesterday', text: 'The API endpoint /users/me is throwing a 500 error.' },
      { user: 'Emile.dev', time: 'Yesterday', text: 'Checking logs... Looks like a DB connection timeout.' },
    ],
    deployments: [
      { user: 'Bot_Deploy', time: '10:00 AM', text: 'Build #4520 Failed ❌', isSystem: true },
      { user: 'Mike (Dev)', time: '10:35 AM', text: 'Deploying hotfix...', isCode: true, code: 'git push origin hotfix/login-bug' },
      { user: 'Bot_Deploy', time: '10:36 AM', text: 'Deployment started: build #4521', isSystem: true },
    ],
    random: [
      { user: 'Alex (Design)', time: 'Fri', text: 'Anyone up for Among Us later?' },
    ]
  };

  return (
    <div className="bg-[#313338] h-[600px] w-full rounded-xl overflow-hidden flex text-gray-100 font-sans border border-gray-800 shadow-2xl">
      {/* Server Sidebar */}
      <div className="w-16 bg-[#1E1F22] flex flex-col items-center py-4 gap-4 flex-shrink-0">
        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center transition-all hover:rounded-xl cursor-pointer">
          <Terminal size={24} className="text-white" />
        </div>
        <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
        {[1, 2, 3].map(i => (
          <div key={i} className="w-12 h-12 bg-[#313338] hover:bg-green-600 transition-colors rounded-full flex items-center justify-center cursor-pointer group">
            <span className="text-sm font-bold group-hover:text-white text-gray-400">DS</span>
          </div>
        ))}
      </div>

      {/* Channel Sidebar */}
      <div className="w-60 bg-[#2B2D31] flex flex-col flex-shrink-0">
        <div className="h-12 border-b border-[#1E1F22] flex items-center px-4 font-bold shadow-sm">
          DevSync HQ <ChevronDown size={16} className="ml-auto" />
        </div>
        <div className="p-3 flex-1 overflow-y-auto">
          <div className="mb-4">
            <div className="text-xs font-bold text-gray-400 uppercase mb-2 px-2 hover:text-gray-300 cursor-pointer flex items-center gap-1"><ChevronDown size={10} /> Text Channels</div>
            {channels.map(channel => (
              <div 
                key={channel} 
                onClick={() => setActiveChannel(channel)}
                className={`px-2 py-1.5 rounded-md flex items-center gap-2 cursor-pointer mb-[2px] ${activeChannel === channel ? 'bg-[#404249] text-white' : 'text-gray-400 hover:bg-[#35373C] hover:text-gray-200'}`}
              >
                <Hash size={18} className="text-gray-500" /> {channel}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#232428] p-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-500 relative">
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#232428] rounded-full"></div>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-bold truncate">Emile.dev</div>
            <div className="text-xs text-gray-400">#8842</div>
          </div>
          <div className="flex gap-1">
             <Mic size={16} className="text-gray-400 hover:text-white cursor-pointer" />
             <Settings size={16} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#313338] min-w-0">
        <div className="h-12 border-b border-[#26272D] flex items-center px-4 shadow-sm">
          <Hash size={24} className="text-gray-400 mr-2" />
          <span className="font-bold text-white mr-4">{activeChannel}</span>
          <span className="text-gray-400 text-xs hidden md:block border-l border-gray-600 pl-4">Topic: Project updates</span>
          <div className="ml-auto flex gap-4 text-gray-400">
             <Phone size={20} className="hover:text-white cursor-pointer" />
             <Video size={20} className="hover:text-white cursor-pointer" />
             <Users size={20} className="md:hidden hover:text-white cursor-pointer" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-transparent">
          {(messagesByChannel[activeChannel] || []).map((msg, i) => (
            <div key={i} className={`flex gap-3 group ${msg.isSystem ? 'opacity-70' : ''}`}>
               {!msg.isSystem && (
                 <div className={`w-10 h-10 rounded-full flex-shrink-0 mt-1 ${msg.user.includes('Alex') ? 'bg-purple-500' : msg.user.includes('Mike') ? 'bg-indigo-500' : 'bg-green-600'}`}></div>
               )}
               <div className="flex-1 min-w-0">
                 {!msg.isSystem && (
                   <div className="flex items-center gap-2">
                     <span className={`font-bold text-sm ${msg.user.includes('Bot') ? 'text-blue-400' : 'text-white'}`}>{msg.user}</span>
                     {msg.user.includes('Bot') && <span className="bg-blue-600 text-[10px] px-1 rounded text-white uppercase font-bold">Bot</span>}
                     <span className="text-xs text-gray-400">{msg.time}</span>
                   </div>
                 )}
                 <div className={`text-sm text-gray-300 break-words ${msg.isSystem ? 'text-xs font-mono text-green-400 ml-12' : ''}`}>
                    {msg.text}
                    {msg.isCode && (
                      <div className="mt-2 bg-[#2B2D31] p-3 rounded-md font-mono text-xs border-l-4 border-blue-500 overflow-x-auto">
                        <span className="text-pink-400">{msg.code.split(' ')[0]}</span> <span className="text-yellow-400">{msg.code.split(' ').slice(1).join(' ')}</span>
                      </div>
                    )}
                 </div>
               </div>
            </div>
          ))}
          {(messagesByChannel[activeChannel] || []).length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              <Hash size={48} className="mx-auto mb-2 opacity-20" />
              <p>Welcome to the beginning of the #{activeChannel} channel.</p>
            </div>
          )}
        </div>

        <div className="p-4 bg-[#313338]">
          <div className="bg-[#383A40] rounded-lg px-4 py-2.5 flex items-center gap-3">
             <div className="bg-gray-400 rounded-full p-0.5 cursor-pointer hover:text-white text-[#313338]"><Plus size={16} /></div>
             <input 
              type="text" 
              placeholder={`Message #${activeChannel}`} 
              className="bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 flex-1 min-w-0"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
             />
             <div className="flex gap-3 text-gray-400 flex-shrink-0">
                <GiftIcon />
                <Paperclip size={20} className="cursor-pointer hover:text-white" />
                <Smile size={20} className="cursor-pointer hover:text-white" />
             </div>
          </div>
        </div>
      </div>

      {/* User Sidebar (Hidden on mobile) */}
      <div className="w-60 bg-[#2B2D31] hidden md:flex flex-col p-4 flex-shrink-0">
        <div className="text-xs font-bold text-gray-400 uppercase mb-4">Online — 3</div>
        {users.filter(u => u.status !== 'offline').map((user, i) => (
           <div key={i} className="flex items-center gap-3 mb-3 cursor-pointer opacity-90 hover:opacity-100 hover:bg-[#35373C] p-1.5 rounded">
             <div className="relative">
               <div className={`w-8 h-8 rounded-full ${user.name.includes('Bot') ? 'bg-blue-600' : 'bg-gray-500'}`}></div>
               <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[3px] border-[#2B2D31] ${user.status === 'online' ? 'bg-green-500' : user.status === 'idle' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
             </div>
             <div>
               <div className="text-sm font-medium text-gray-200">{user.name}</div>
               {user.name.includes('Dev') && <div className="text-[10px] text-gray-400">Visual Studio Code</div>}
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};
const GiftIcon = () => ( // Simple SVG helper for DevSync
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:text-white">
    <rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
  </svg>
)

/**
 * DEMO 3: FINTRACK PRO (Financial Dashboard Mock)
 */
const FinTrackDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-100 h-[600px] w-full rounded-xl overflow-hidden flex text-gray-800 font-sans border border-gray-200 shadow-2xl">
      <div className="w-16 md:w-56 bg-white border-r border-gray-200 flex flex-col py-6 flex-shrink-0">
        <div className="px-6 mb-8 flex items-center gap-2 text-green-600 font-bold text-xl">
           <div className="bg-green-100 p-1.5 rounded"><Activity size={20} /></div>
           <span className="hidden md:block">FinTrack</span>
        </div>
        <nav className="space-y-1 px-3">
          {['Overview', 'Transactions', 'Budget', 'Goals', 'Cards'].map((item, i) => (
             <button 
                key={item} 
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`flex w-full items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === item.toLowerCase() ? 'bg-green-50 text-green-700' : 'text-gray-500 hover:bg-gray-50'}`}
             >
                {i === 0 ? <Layout size={18} /> : i === 1 ? <FileText size={18} /> : i === 4 ? <CreditCard size={18} /> : <PieChart size={18} />}
                <span className="hidden md:block font-medium">{item}</span>
             </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
         <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
            <h2 className="text-xl font-bold capitalize">{activeTab}</h2>
            <div className="flex items-center gap-3">
               <span className="text-sm text-gray-500 hidden md:block">Welcome back, Emile</span>
               <div className="w-9 h-9 bg-gray-200 rounded-full border border-gray-300"></div>
            </div>
         </header>

         <main className="flex-1 overflow-auto p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                      <div className="text-slate-400 text-sm mb-1">Total Balance</div>
                      <div className="text-3xl font-bold mb-6">$42,593.00</div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors">Transfer</button>
                        <button className="flex-1 bg-green-500 hover:bg-green-400 py-2 rounded-lg text-sm font-medium text-slate-900 transition-colors">Add Money</button>
                      </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                            <div className="text-gray-500 text-sm">Income (Oct)</div>
                            <div className="text-2xl font-bold text-gray-900">$8,250.00</div>
                        </div>
                        <div className="bg-green-100 p-2 rounded-full text-green-600"><ArrowUpRight size={20}/></div>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
                        <div className="bg-green-500 h-full w-[75%] rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">12% more than last month</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                            <div className="text-gray-500 text-sm">Expenses (Oct)</div>
                            <div className="text-2xl font-bold text-gray-900">$3,405.00</div>
                        </div>
                        <div className="bg-red-100 p-2 rounded-full text-red-600"><ArrowDownRight size={20}/></div>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
                        <div className="bg-red-500 h-full w-[45%] rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">On track with budget</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Visual Chart Mockup */}
                  <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800">Spending Analysis</h3>
                        <select className="bg-gray-50 border-none text-sm text-gray-500 rounded-lg p-2 outline-none"><option>This Week</option></select>
                      </div>
                      <div className="h-48 flex items-end justify-between gap-2 px-2">
                        {[45, 70, 30, 85, 50, 65, 40].map((h, i) => (
                            <div key={i} className="w-full bg-gray-100 rounded-t-lg relative group hover:bg-green-50 transition-colors">
                              <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-slate-900 rounded-t-lg transition-all group-hover:bg-green-500"></div>
                              <div className="absolute -bottom-6 w-full text-center text-xs text-gray-400 font-medium">{['M','T','W','T','F','S','S'][i]}</div>
                            </div>
                        ))}
                      </div>
                  </div>

                  {/* Transactions */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="font-bold text-gray-800 mb-4">Recent Transactions</h3>
                      <div className="space-y-4">
                        {[
                            {name: "Apple Store", cat: "Electronics", price: "-$1,299.00", icon: <ShoppingBag size={16}/>},
                            {name: "Uber", cat: "Transport", price: "-$24.50", icon: <CreditCard size={16}/>},
                            {name: "Upwork", cat: "Freelance", price: "+$850.00", color: "text-green-600", icon: <DollarSign size={16}/>},
                            {name: "Whole Foods", cat: "Groceries", price: "-$142.20", icon: <ShoppingBag size={16}/>}
                        ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">{t.icon}</div>
                                  <div>
                                    <div className="text-sm font-bold text-gray-900">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.cat}</div>
                                  </div>
                              </div>
                              <div className={`text-sm font-bold ${t.color || 'text-gray-900'}`}>{t.price}</div>
                            </div>
                        ))}
                      </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="font-bold text-gray-800 mb-6">All Transactions</h3>
                  <div className="space-y-4">
                     {[1,2,3,4,5,6].map((_, i) => (
                        <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-50 last:border-0">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><ShoppingBag size={18} className="text-gray-600"/></div>
                              <div>
                                 <div className="font-bold text-gray-800">Payment #{1023 + i}</div>
                                 <div className="text-xs text-gray-500">Oct {24 - i}, 2024</div>
                              </div>
                           </div>
                           <div className="font-bold text-gray-900">-${(Math.random() * 100).toFixed(2)}</div>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {(activeTab === 'budget' || activeTab === 'goals' || activeTab === 'cards') && (
               <div className="flex flex-col items-center justify-center h-full text-gray-400 animate-in zoom-in duration-300">
                  <Lock size={64} className="mb-4 text-gray-300"/>
                  <h3 className="text-lg font-bold text-gray-600">Secure Area</h3>
                  <p>Authentication required to view {activeTab}.</p>
               </div>
            )}
         </main>
      </div>
    </div>
  );
};

/**
 * DEMO 4: MEDICARE PORTAL (Healthcare Mock)
 */
const MediCareDemo = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="bg-cyan-50 h-[600px] w-full rounded-xl overflow-hidden flex text-gray-800 font-sans border border-gray-200 shadow-2xl">
       {/* Sidebar */}
       <div className="w-16 md:w-60 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
          <div className="h-16 flex items-center px-6 border-b border-gray-100 gap-2">
             <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white"><Activity size={20} /></div>
             <span className="font-bold text-lg text-cyan-900 hidden md:block">MediCare</span>
          </div>
          <div className="p-4 space-y-2 flex-1">
             {['Dashboard', 'Appointments', 'Patients', 'Messages', 'Lab Results'].map((item, i) => (
                <button 
                  key={item} 
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`flex w-full items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === item.toLowerCase() ? 'bg-cyan-50 text-cyan-700 font-medium' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                   {item === 'Dashboard' ? <Layout size={18}/> : item === 'Appointments' ? <Calendar size={18}/> : item === 'Patients' ? <Users size={18}/> : item === 'Messages' ? <MessageSquare size={18}/> : <FileText size={18}/>}
                   <span className="hidden md:block">{item}</span>
                </button>
             ))}
          </div>
          <div className="p-4 border-t border-gray-100">
             <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-xs">DS</div>
                <div className="hidden md:block">
                   <div className="text-sm font-bold text-gray-700">Dr. Smith</div>
                   <div className="text-xs text-gray-400">Cardiology</div>
                </div>
             </div>
          </div>
       </div>

       {/* Main */}
       <div className="flex-1 flex flex-col bg-white">
          <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm">
             <h2 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h2>
             <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                <Plus size={16} /> New Action
             </button>
          </header>

          <main className="flex-1 overflow-auto p-8 bg-gray-50/50">
             {activeTab === 'appointments' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                      {[
                        {label: "Pending", val: "12", color: "orange"},
                        {label: "Today", val: "8", color: "cyan"},
                        {label: "Canceled", val: "2", color: "red"},
                        {label: "Total Patients", val: "1,405", color: "blue"}
                      ].map((s, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-gray-800">{s.val}</div>
                              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{s.label}</div>
                            </div>
                            <div className={`w-2 h-8 rounded-full bg-${s.color}-500`}></div>
                        </div>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Calendar List */}
                      <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">Upcoming Schedule</h3>
                            <div className="flex gap-2">
                              <button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><ChevronDown className="rotate-90" size={16}/></button>
                              <span className="text-sm font-medium text-gray-600">Oct 24, 2024</span>
                              <button className="p-1.5 hover:bg-gray-50 rounded text-gray-400"><ChevronDown className="-rotate-90" size={16}/></button>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                              {time: "09:00 AM", name: "Sarah Johnson", type: "Check-up", status: "Confirmed", img: "SJ"},
                              {time: "10:30 AM", name: "Michael Chen", type: "Follow-up", status: "In Progress", img: "MC"},
                              {time: "02:00 PM", name: "Emma Wilson", type: "New Patient", status: "Pending", img: "EW"},
                              {time: "04:15 PM", name: "James Rod", type: "Lab Review", status: "Confirmed", img: "JR"},
                            ].map((appt, i) => (
                              <div key={i} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                  <div className="text-sm font-bold text-gray-400 w-16 text-right">{appt.time}</div>
                                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-xs">{appt.img}</div>
                                  <div className="flex-1">
                                    <div className="font-bold text-gray-800">{appt.name}</div>
                                    <div className="text-xs text-gray-500">{appt.type}</div>
                                  </div>
                                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                    appt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                                    appt.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                                  }`}>{appt.status}</span>
                                  <button className="text-gray-300 hover:text-cyan-600"><MoreVertical size={16}/></button>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Patient Vitals Card */}
                      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">MC</div>
                            <div>
                              <div className="font-bold text-gray-800">Michael Chen</div>
                              <div className="text-xs text-green-600 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> In Consultation</div>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1"><Activity size={16}/> Heart Rate</div>
                              <div className="text-2xl font-bold text-gray-800">72 <span className="text-sm text-gray-500 font-normal">bpm</span></div>
                            </div>
                            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1"><Shield size={16}/> Blood Pressure</div>
                              <div className="text-2xl font-bold text-gray-800">120/80 <span className="text-sm text-gray-500 font-normal">mmHg</span></div>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <button className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm">View Full Record</button>
                        </div>
                      </div>
                  </div>
                </div>
             )}

             {activeTab === 'patients' && (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <div className="p-6 border-b border-gray-100">
                      <h3 className="font-bold text-gray-800">Patient Directory</h3>
                   </div>
                   <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Sarah Johnson', 'Michael Chen', 'Emma Wilson', 'James Rod', 'Linda Davis', 'Robert Miller'].map((p, i) => (
                         <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-cyan-200 hover:bg-cyan-50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center font-bold text-gray-600">{p.charAt(0)}</div>
                            <div>
                               <div className="font-bold text-gray-800">{p}</div>
                               <div className="text-xs text-gray-500">ID: #{8823 + i}</div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             )}

             {(activeTab === 'dashboard' || activeTab === 'messages' || activeTab === 'lab results') && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 animate-in zoom-in duration-300">
                   <Lock size={64} className="mb-4 text-gray-300"/>
                   <h3 className="text-lg font-bold text-gray-600">Restricted Access</h3>
                   <p>Authorized personnel only. Please verify credentials.</p>
                </div>
             )}
          </main>
       </div>
    </div>
  );
};

/**
 * CORE COMPONENTS
 */

const StarfieldBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = Array(200).fill().map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1
    }));
    
    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas id="starfield" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50" />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          EMILE.DEV
        </a>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block p-4 text-gray-300 hover:text-white border-t border-white/5">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 cursor-pointer flex flex-col ${project.size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1"}`}
    >
      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${project.color}`}></div>
      
      {/* Icon Header */}
      <div className="p-8 pb-0 relative z-10 flex justify-between items-start">
        <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
          {project.icon}
        </div>
        <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
          View Details <ArrowRight size={12} />
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-6 relative z-10 flex-1 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-3">{project.shortDesc}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [view, setView] = useState('details'); // 'details' or 'preview'
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-zinc-900 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900 z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            
            {/* View Switcher (Only if demo exists) */}
            {project.Demo && (
              <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                <button 
                  onClick={() => setView('details')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${view === 'details' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  Details
                </button>
                <button 
                  onClick={() => setView('preview')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${view === 'preview' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Play size={10} fill="currentColor" /> Live Preview
                </button>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8">
          {view === 'details' ? (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Layout size={20} className="text-blue-400"/> Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400"/> Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                        <Check size={18} className="text-green-500 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                 {/* Technical Deep Dive */}
                <div className="border-t border-white/5 pt-8 mt-4">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Server size={20} className="text-purple-400"/> Technical Challenges
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.technical}
                  </p>
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <div className="bg-black/40 rounded-xl p-5 border border-white/5">
                  <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-black/40 rounded-xl p-5 border border-white/5">
                   <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Links</h4>
                   <div className="space-y-3">
                     <button onClick={() => setView('preview')} className="flex items-center gap-3 w-full p-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors text-center justify-center">
                       <Globe size={18} /> View Live Demo
                     </button>
                     <a href="#" className="flex items-center gap-3 w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-colors text-center justify-center">
                       <Github size={18} /> View Code
                     </a>
                   </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] flex flex-col">
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Live Environment Running
              </div>
              <div className="flex-1 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Render the specific demo component */}
                {project.Demo && <project.Demo />}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

/**
 * MAIN APP
 */
export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const projects = [
    { 
      id: 1, 
      title: "InventoryOS", 
      category: "SaaS Platform",
      shortDesc: "A multi-tenant inventory management system designed for high-volume retail businesses with real-time stock tracking.",
      fullDesc: "InventoryOS is a comprehensive SaaS solution that helps retailers manage complex inventory across multiple locations. It solves the problem of stock desynchronization by using an event-driven architecture to ensure real-time updates across all connected storefronts (Shopify, WooCommerce, and physical POS).",
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Redis'], 
      color: "bg-purple-500", 
      icon: <Database size={24} className="text-purple-400" />,
      size: "large",
      features: [
        "Real-time websocket updates for stock levels",
        "Automated reordering system based on sales velocity",
        "Role-based access control (RBAC) for staff",
        "Multi-currency support and tax calculation"
      ],
      technical: "Implemented an Optimistic Concurrency Control system to handle simultaneous stock updates from multiple POS terminals. Used Redis for caching frequently accessed product data, reducing database load by 40% during peak traffic.",
      Demo: InventoryOSDemo // Attached the Demo Component
    },
    { 
      id: 2, 
      title: "DevSync", 
      category: "Collaboration Tool",
      shortDesc: "Real-time communication platform for developer teams featuring code snippets, markdown support, and video calls.",
      fullDesc: "DevSync is built to replace fragmented communication tools. It combines persistent chat channels with a real-time collaborative whiteboard and integrated video calling. It's designed specifically for engineering teams, with first-class support for syntax highlighting and GitHub issue linking.",
      tags: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'], 
      color: "bg-blue-500", 
      icon: <MessageSquare size={24} className="text-blue-400" />,
      features: [
        "End-to-end encrypted direct messages",
        "Live code sharing with syntax highlighting",
        "Video and voice channels using WebRTC",
        "Slack-like channel organization and threading"
      ],
      technical: "The biggest challenge was managing websocket state consistency across unstable network connections. I implemented a custom 'heartbeat' and message queue system that ensures no messages are lost during temporary disconnects, syncing the state automatically upon reconnection.",
      Demo: DevSyncDemo
    },
    { 
      id: 3, 
      title: "FinTrack Pro", 
      category: "Fintech Dashboard",
      shortDesc: "Advanced personal finance visualizer that aggregates data from multiple banking APIs into a single dashboard.",
      fullDesc: "FinTrack Pro gives users a 360-degree view of their financial health. Unlike standard banking apps, it offers predictive analytics to forecast future spending habits based on historical data. It connects securely to over 2,000 financial institutions via Plaid.",
      tags: ['TypeScript', 'D3.js', 'Python (FastAPI)', 'AWS Lambda'], 
      color: "bg-green-500", 
      icon: <BarChart3 size={24} className="text-green-400" />,
      features: [
        "Interactive spending breakdown charts using D3.js",
        "AI-powered subscription cancellation suggestions",
        "Custom budgeting goals with email alerts",
        "Secure OAuth2 banking integration"
      ],
      technical: "Privacy and security were paramount. I architected a serverless backend using AWS Lambda to process financial data without ever storing sensitive banking credentials in our database, relying entirely on ephemeral tokens.",
      Demo: FinTrackDemo
    },
    { 
      id: 4, 
      title: "MediCare Portal", 
      category: "Healthcare App",
      shortDesc: "HIPAA-compliant patient management portal allowing secure appointment booking and medical record access.",
      fullDesc: "MediCare Portal digitizes the patient intake process. It allows patients to fill out medical history forms digitally before their visit, book appointments, and view their lab results securely. It dramatically reduces administrative overhead for small clinics.",
      tags: ['Vue.js', 'Docker', 'PostgreSQL', 'Go'], 
      color: "bg-pink-500", 
      icon: <Lock size={24} className="text-pink-400" />,
      features: [
        "Secure document upload and PDF generation",
        "Doctor availability calendar management",
        "Automated SMS and Email appointment reminders",
        "Two-factor authentication for all user access"
      ],
      technical: "Ensuring HIPAA compliance required strict data encryption at rest and in transit. I utilized Go's crypto libraries to encrypt sensitive patient fields in the database and set up a comprehensive audit logging system for every data access event.",
      Demo: MediCareDemo
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-0 z-[100]" style={{ scaleX }} />
      <StarfieldBackground />
      <Navbar />

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Hi, I'm Emile. <br />
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            >
              I build digital experiences
            </motion.span>
             {' '}that matter.
          </h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Full-stack developer specializing in creating fluid, high-performance web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto">View Work</a>
            <a href="#contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-colors w-full sm:w-auto">Contact Me</a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-zinc-900">
                {/* Make sure your image is in the public folder */}
                <img 
                  src="/FB_IMG_1762275510940.jpg" 
                  alt="Emile Moodley" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-xl">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Focus</div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <Coffee size={16} className="text-yellow-500"/> Java Spring Boot
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Code</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm a developer who bridges the gap between robust engineering and intuitive design. My technical philosophy is built on the reliability of <strong className="text-white">Java</strong> for mission-critical backends and the dynamic versatility of <strong className="text-white">JavaScript</strong> for creating fluid, engaging frontends.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-4">
                  When I'm not optimizing algorithms or debugging API endpoints, you can find me watching <strong className="text-white">F1</strong> races (hoping for a great strategy call) or exploring new tech trends. I approach coding with the same precision as an F1 engineer—focusing on speed, efficiency, and pushing the limits of performance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Coffee size={20}/></div>
                    <span className="font-bold text-white">Java Expert</span>
                  </div>
                  <p className="text-sm text-gray-500">Building scalable, secure enterprise-grade backends.</p>
                </div>
                <div className="p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Code2 size={20}/></div>
                    <span className="font-bold text-white">JS/React Pro</span>
                  </div>
                  <p className="text-sm text-gray-500">Crafting interactive, responsive user interfaces.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">2+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1 flex items-center gap-2">
                    <Flag size={24} className="text-red-500" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">F1 Enthusiast</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400">Select a project to view details and technical implementation.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setActiveProject} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">I'm currently available for freelance work and full-time positions.</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a href="mailto:moodleyemile@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                <Mail size={20} /> moodleyemile@gmail.com
              </a>
              <a href="tel:+27846638888" className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors">
                <Phone size={20} /> +27 84 663 8888
              </a>
            </div>
            
            <div className="flex justify-center gap-6 text-gray-500">
              <a href="https://github.com/emile-aaron-moodley" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/emile-moodley-1a5207384" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-black text-center text-gray-500 text-sm">
        <p>© 2026 Emile Moodley. All rights reserved.</p>
      </footer>
    </div>
  );
}