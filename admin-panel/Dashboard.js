export default function AdminDashboard() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">NetworkNinjas Command Center</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
          <h4>Active Attacks Blocked</h4>
          <p className="text-4xl font-mono">1,245</p>
        </div>
        <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
          <h4>Server Load</h4>
          <p className="text-4xl font-mono">14%</p>
        </div>
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
          <h4>Active Domains</h4>
          <p className="text-4xl font-mono">5</p>
        </div>
      </div>
    </div>
  );
}
