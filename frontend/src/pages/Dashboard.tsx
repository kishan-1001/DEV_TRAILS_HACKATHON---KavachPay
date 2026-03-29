import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check if token exists in localStorage
    const token = localStorage.getItem('kavachpay_token');
    if (!token) {
      // Not authenticated, redirect to signup or home
      navigate('/signup');
      return;
    }

    // 2. Load user info
    const storedUser = localStorage.getItem('kavachpay_user');
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setUserName(userObj.fullName);
    }
  }, [navigate]);

  if (!userName) return <div className="p-10 text-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-[#eef2f6] text-slate-900 p-6 sm:p-10 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300 opacity-20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 opacity-20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-blue-900">KavachPay</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('kavachpay_token');
              localStorage.removeItem('kavachpay_user');
              navigate('/');
            }}
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            Log Out
          </button>
        </header>

        {/* Welcome Card */}
        <section className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 sm:p-8 mb-6 transition-all hover:shadow-2xl hover:scale-[1.01] duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Welcome, {userName}! 👋
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">Your KavachPay protection is ready.</p>
        </section>

        {/* Dashboard Grid (Placeholder for Future Features) */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-slate-800">Current Status</h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-semibold text-slate-600">Work-Proof Active</span>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-slate-800">Your Plan</h3>
            <p className="text-sm text-slate-500 mt-2">No active policy yet.</p>
            <button className="mt-4 bg-blue-100 text-blue-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-200 transition">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
