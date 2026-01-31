
import React from 'react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div 
              onClick={handleLink('home')} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">NovaFlow</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering sales teams with AI-driven roleplay and coaching. The new standard for modern revenue growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12.06h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.06h2.773l-.443 2.89h-2.33v6.988C18.343 21.189 22 17.052 22 12.061z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={handleLink('roleplay')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Roleplay Training</a></li>
              <li><a href="#" onClick={handleLink('live-assist')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Live Assist</a></li>
              <li><a href="#" onClick={handleLink('analysis')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Call Analysis</a></li>
              <li><a href="#" onClick={handleLink('integrations')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={handleLink('about')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">About NovaFlow</a></li>
              <li><a href="#" onClick={handleLink('customers')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Customer Stories</a></li>
              <li><a href="#" onClick={handleLink('careers')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" onClick={handleLink('contact')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={handleLink('playbook')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Sales Playbook</a></li>
              <li><a href="#" onClick={handleLink('guide')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">AI Coaching Guide</a></li>
              <li><a href="#" onClick={handleLink('privacy')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={handleLink('terms')} className="text-slate-400 text-sm hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} NovaFlow Systems Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Cookie Settings</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
