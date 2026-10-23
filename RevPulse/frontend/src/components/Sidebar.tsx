import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  GitBranch,
  FileCheck2,
  FolderDown,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
  Activity,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Building2
} from 'lucide-react';

interface SidebarProps {
  recordsCount?: number;
  onOpenTour?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ recordsCount, onOpenTour }) => {
  const sections = [
    {
      group: 'Intelligence & Triage',
      items: [
        {
          to: '/',
          label: 'Overview Dashboard',
          icon: LayoutDashboard,
          badge: null,
          badgeColor: ''
        },
        {
          to: '/inbox',
          label: 'Conversation Inbox',
          icon: Inbox,
          badge: recordsCount ? String(recordsCount) : '44',
          badgeColor: 'bg-brand-500/15 text-brand-300 border border-brand-500/25'
        },
        {
          to: '/routing',
          label: 'Routing & Strategy',
          icon: GitBranch,
          badge: null,
          badgeColor: ''
        }
      ]
    },
    {
      group: 'Operational Insights',
      items: [
        {
          to: '/brief',
          label: 'Manager Brief',
          icon: FileCheck2,
          badge: '21 Aug',
          badgeColor: 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
        },
        {
          to: '/exports',
          label: 'Exports & Audit',
          icon: FolderDown,
          badge: null,
          badgeColor: ''
        }
      ]
    },
    {
      group: 'Data Engine & Replay',
      items: [
        {
          to: '/imports',
          label: 'Replay & Batch Sync',
          icon: RefreshCw,
          badge: 'Sync',
          badgeColor: 'bg-pulse-500/10 text-pulse-400 border border-pulse-500/20'
        }
      ]
    }
  ];

  return (
    <aside
      className="w-56 shrink-0 text-slate-300 border-r border-white/[0.06] min-h-[calc(100vh-65px)] flex flex-col justify-between select-none"
      style={{ background: 'rgba(12, 7, 22, 0.95)' }}
    >
      <div className="p-3 space-y-5">
        {/* Organization / Workspace Pill */}
        <div
          className="p-2.5 rounded-xl flex items-center justify-between"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-pulse-500 text-white flex items-center justify-center shadow-glow-sm shrink-0">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-display font-bold text-white truncate flex items-center gap-1.5">
                RevPulse Ops
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 ring-2 ring-accent-500/20" />
              </div>
              <div className="text-[10px] text-slate-500 truncate">Global Sales Hub</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-brand-400 bg-brand-500/10 border border-brand-500/20 px-1.5 py-0.5 rounded">
            LIVE
          </div>
        </div>

        {/* Grouped Navigation */}
        <nav id="tour-sidebar-nav" className="space-y-5">
          {sections.map(section => (
            <div key={section.group}>
              <div className="px-3 mb-1.5 text-[10px] font-display font-bold uppercase tracking-widest text-slate-500">
                {section.group}
              </div>
              <div className="space-y-0.5">
                {section.items.map(item => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all duration-150 ${
                          isActive
                            ? 'text-white font-semibold'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                        }`
                      }
                      style={({ isActive }) => isActive ? {
                        background: 'linear-gradient(90deg, rgba(168,85,247,0.20) 0%, rgba(217,70,239,0.08) 100%)',
                        borderLeft: '2px solid #a855f7',
                        paddingLeft: '10px',
                      } : {}}
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon
                              className={`w-4 h-4 shrink-0 transition-colors ${
                                isActive ? 'text-brand-400' : 'text-slate-500 group-hover:text-slate-300'
                              }`}
                            />
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md font-mono ${
                                item.badgeColor || 'bg-white/[0.06] text-slate-300'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User Guide Interactive Tour Launcher */}
        {onOpenTour && (
          <button
            type="button"
            onClick={onOpenTour}
            className="w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-200 cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, rgba(126,34,206,0.20) 0%, rgba(217,70,239,0.12) 100%)',
              border: '1px solid rgba(168,85,247,0.25)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-600 to-pulse-500 text-white flex items-center justify-center shrink-0 shadow-glow-sm">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-display font-bold text-white group-hover:text-brand-300 transition-colors">
                  Interactive Guide
                </div>
                <div className="text-[10px] text-brand-400/80">
                  Launch Platform Tour
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-brand-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Data Governance Integrity Callout */}
        <div id="tour-sidebar-rules" className="p-3 rounded-xl space-y-2"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
            <ShieldCheck className="w-4 h-4 text-accent-400" />
            <span>Data Governance Guard</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Composite Identity: <code className="text-brand-300 bg-brand-500/10 px-1 py-0.5 rounded font-mono text-[10px]">(source_type, source_id)</code>. In-place revisions update source payloads while manager route overrides remain strictly persistent.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="p-3 border-t border-white/[0.06]" style={{ background: 'rgba(0,0,0,0.20)' }}>
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            <div className="font-display font-bold text-slate-200 flex items-center gap-1.5">
              RevPulse AI
              <span className="text-[9px] bg-brand-500/15 text-brand-400 px-1.5 py-0.5 rounded font-mono border border-brand-500/20">v3.4</span>
            </div>
            <div className="text-[10px] text-slate-500">Enterprise Revenue Engine</div>
          </div>
          <div className="w-2 h-2 rounded-full bg-accent-400 animate-ping" />
        </div>
      </div>
    </aside>
  );
};
