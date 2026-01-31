
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { View } from '../App';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <Hero onNavigate={onNavigate} />

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why High-Growth Teams Choose NovaFlow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Scaling a sales team is hard. Maintaining quality is harder. NovaFlow automates the feedback loop so your leaders can focus on strategy, not micromanagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "AI-Driven Roleplays",
              desc: "Train reps with dynamic, AI-powered scenarios that mimic real customer objections.",
              icon: "🤖",
              view: "roleplay" as View
            },
            {
              title: "Sentiment Analysis",
              desc: "Detect emotional cues and tone shifts in real-time to adjust call strategy instantly.",
              icon: "🧠",
              view: "analysis" as View
            },
            {
              title: "Custom Playbooks",
              desc: "Deploy company-wide strategies that reps can follow step-by-step during live calls.",
              icon: "📚",
              view: "playbook" as View
            }
          ].map((feature, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(feature.view)}
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-white/5 hover:border-indigo-500/30"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] -z-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] -z-10 rounded-full"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
            Ready to build a <br/><span className="gradient-text">winning sales culture?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of forward-thinking companies that use NovaFlow to accelerate ramp time and boost quota attainment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('trial')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-indigo-600/20 active:scale-95 transition-all"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => onNavigate('sales')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-4 px-10 rounded-full text-lg active:scale-95 transition-all"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
