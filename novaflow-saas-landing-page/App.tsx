
import React, { useState, useEffect } from 'react';
import Home from './routes/index';
import { GenericPage } from './components/GenericPage';

export type View = 'home' | 'platform' | 'solutions' | 'pricing' | 'resources' | 'login' | 'signup' | 'demo' | 'video' | 'trial' | 'sales' | 'about' | 'customers' | 'careers' | 'contact' | 'playbook' | 'guide' | 'privacy' | 'terms' | 'roleplay' | 'live-assist' | 'analysis' | 'integrations';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigate = (newView: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    setView(newView);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            onClick={() => setView('home')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">NovaFlow</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" onClick={navigate('platform')} className={`hover:text-white transition-colors ${view === 'platform' ? 'text-white' : ''}`}>Platform</a>
            <a href="#" onClick={navigate('solutions')} className={`hover:text-white transition-colors ${view === 'solutions' ? 'text-white' : ''}`}>Solutions</a>
            <a href="#" onClick={navigate('pricing')} className={`hover:text-white transition-colors ${view === 'pricing' ? 'text-white' : ''}`}>Pricing</a>
            <a href="#" onClick={navigate('resources')} className={`hover:text-white transition-colors ${view === 'resources' ? 'text-white' : ''}`}>Resources</a>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={navigate('login')}
              className="hidden sm:block text-sm font-medium hover:text-white text-slate-400 transition-colors px-4 py-2"
            >
              Log in
            </button>
            <button 
              onClick={navigate('signup')}
              className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-200 transition-all active:scale-95 shadow-lg shadow-white/5"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        {view === 'home' ? (
          <Home onNavigate={setView} />
        ) : (
          <GenericPage pageType={view} onNavigate={setView} />
        )}
      </main>
    </div>
  );
};

export default App;
