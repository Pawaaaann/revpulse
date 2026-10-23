import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  Database,
  Download,
  RefreshCw,
  Calendar,
  Clock,
  Sparkles,
  Search,
  Zap,
} from 'lucide-react';
import { getExportDownloadUrl, fetchHealth } from '../services/api';

interface NavbarProps {
  onOpenTour?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTour }) => {
  const location = useLocation();
  const [dbStatus, setDbStatus] = useState<{ status: string; unique_records?: number; cluster_type?: string } | null>(null);

  const checkHealth = async () => {
    try {
      const data = await fetchHealth();
      setDbStatus(data);
    } catch {
      setDbStatus({ status: 'offline' });
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] shadow-lg"
      style={{ background: 'rgba(15, 10, 30, 0.88)', backdropFilter: 'blur(20px) saturate(160%)' }}>
      <div className="flex items-center justify-between px-6 py-2.5">

        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-500 to-pulse-500 flex items-center justify-center text-white shadow-glow-brand group-hover:scale-105 group-hover:shadow-glow-pulse transition-all duration-200 animate-glow-pulse">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-brand-300 transition-colors">
                  RevPulse <span className="bg-gradient-to-r from-brand-400 to-pulse-400 bg-clip-text text-transparent">AI</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-brand-500/10 text-brand-300 rounded-md border border-brand-500/25">
                  Revenue Intelligence
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Sales Activity & Conversation Triage Platform</p>
            </div>
          </Link>
        </div>

        {/* Center: Search Quick Trigger */}
        <div className="hidden xl:flex items-center flex-1 max-w-md mx-8">
          <Link
            to="/inbox"
            className="w-full flex items-center justify-between px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] rounded-xl text-xs text-slate-400 transition-all shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400 transition-colors" />
              <span>Search 44 triage conversations, reps, accounts...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/[0.06] border border-white/[0.10] rounded text-slate-500">
              ⌘K
            </kbd>
          </Link>
        </div>

        {/* Right Status Badges & Controls */}
        <div className="flex items-center gap-2.5">
          {/* Active Operational Date */}
          <div id="tour-date-time" className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-xl text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-brand-400" />
            <span className="font-semibold text-slate-200">21 Aug 2026</span>
            <span className="text-white/20">|</span>
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500">Asia/Kolkata</span>
          </div>

          {/* Database Health Status */}
          <div id="tour-db-status" className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-xl text-xs">
            <Database className="w-3.5 h-3.5 text-slate-500" />
            {dbStatus?.status === 'healthy' ? (
              <span className="flex items-center gap-1.5 text-accent-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse ring-2 ring-accent-500/30" />
                {dbStatus.cluster_type === 'MongoDB Atlas' ? 'Atlas' : 'MongoDB'}: {dbStatus.unique_records ?? 44} Records
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                MongoDB: Connecting...
              </span>
            )}
          </div>

          {/* Download Exports Button */}
          <a
            id="tour-export-zip"
            href={getExportDownloadUrl()}
            download="revpulse_revenue_intelligence_exports.zip"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.09] hover:border-brand-500/40 rounded-xl transition-all"
            title="Download full export archive with manifest and markdown reports"
          >
            <Download className="w-3.5 h-3.5 text-brand-400" />
            <span className="hidden sm:inline">Export ZIP</span>
          </a>

          {/* Link to Import Replay Controls */}
          <Link
            id="tour-replay-controls"
            to="/imports"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-pulse-600 hover:from-brand-500 hover:to-pulse-500 rounded-xl shadow-glow-brand transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Replay Engine</span>
          </Link>

          {/* User Guide Interactive Tour Button */}
          <button
            id="tour-guide-button"
            type="button"
            onClick={onOpenTour}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-300 bg-brand-500/10 border border-brand-500/20 hover:bg-brand-500/20 rounded-xl transition-colors cursor-pointer"
            title="Open Interactive Platform Tour"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span className="hidden md:inline">Platform Tour</span>
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/[0.07]">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-700 to-pulse-600 text-white flex items-center justify-center font-display font-bold text-xs shadow-glow-sm">
              PK
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
