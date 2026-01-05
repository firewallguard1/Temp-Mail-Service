import ThreeTower from '../components/ThreeTower';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans">
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
           <span className="font-bold text-xl">NN</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tighter">NetworkNinjas</h1>
      </header>

      <main className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">
        <ThreeTower />
        <div className="text-center mt-6">
          <p className="text-gray-400 mb-2">Your Temporary Email Address</p>
          <div className="bg-black/50 p-4 rounded-xl border border-cyan-500/30 text-xl font-mono text-cyan-400">
            user123@networkninjas.com
          </div>
        </div>
        {/* ওটিপি ইনবক্স সেকশন */}
        <div className="mt-10 bg-white/5 rounded-2xl p-4 border border-white/10">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Inbox</h3>
          <p className="text-center text-gray-600">Waiting for incoming OTPs...</p>
        </div>
      </main>
    </div>
  );
}
