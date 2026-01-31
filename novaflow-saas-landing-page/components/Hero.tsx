
import React from 'react';
import { Button } from './ui/Button';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Now trusted by 500+ revenue teams
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Turn Every Rep into a <span className="gradient-text">Master Closer</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
              NovaFlow uses AI-driven roleplay and real-time coaching to bridge the gap between training and performance. No more trial and error on live calls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg" 
                className="w-full sm:w-auto text-lg rounded-full"
              >
                Book a Demo
              </Button>
              <Button 
                onClick={() => onNavigate('video')}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg rounded-full group"
              >
                Watch Video 
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center opacity-40 grayscale">
              <span className="font-bold text-lg tracking-widest uppercase">STRIPE</span>
              <span className="font-bold text-lg tracking-widest uppercase">AIRBNB</span>
              <span className="font-bold text-lg tracking-widest uppercase">HUBSPOT</span>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 glass-card rounded-2xl p-4 md:p-8 shadow-2xl animate-float">
              <div className="bg-slate-900 rounded-xl aspect-video overflow-hidden border border-white/5 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="NovaFlow Platform Dashboard" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Call Analysis: 98% Confidence
                </div>
                <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 text-indigo-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                  Performance: +24% YoY
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
