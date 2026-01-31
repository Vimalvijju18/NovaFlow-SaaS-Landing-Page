
import React from 'react';
import { View } from '../App';
import Footer from './Footer';
import { Button } from './ui/Button';

interface GenericPageProps {
  pageType: View;
  onNavigate: (view: View) => void;
}

export const GenericPage: React.FC<GenericPageProps> = ({ pageType, onNavigate }) => {
  
  // Specific Renderers for different page types
  const renderPricing = () => (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        { name: "Starter", price: "$49", features: ["Up to 5 reps", "Basic AI Roleplay", "Email support"] },
        { name: "Professional", price: "$129", features: ["Up to 20 reps", "Real-time Live Assist", "Advanced Analytics", "Priority Support"], popular: true },
        { name: "Enterprise", price: "Custom", features: ["Unlimited reps", "Custom Integrations", "Dedicated Success Manager", "SLA guarantees"] }
      ].map((plan, i) => (
        <div key={i} className={`glass-card p-8 rounded-3xl border ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-white/10'} flex flex-col`}>
          {plan.popular && <span className="bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">Most Popular</span>}
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <div className="text-4xl font-extrabold mb-6">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
          <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-2 text-slate-400 text-sm">
                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full rounded-full">Choose {plan.name}</Button>
        </div>
      ))}
    </div>
  );

  const renderDashboardVisual = () => (
    <div className="mt-16 relative">
      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-slate-900/50">
        <div className="flex border-b border-white/5 bg-slate-900/80 px-4 py-2 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="p-6 grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-4">
            <div className="h-4 w-full bg-white/5 rounded"></div>
            <div className="h-4 w-3/4 bg-white/5 rounded"></div>
            <div className="h-4 w-1/2 bg-white/5 rounded"></div>
            <div className="h-32 w-full bg-indigo-500/10 rounded-xl border border-indigo-500/20 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
            </div>
          </div>
          <div className="col-span-9 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-white/5 rounded-xl p-4">
                <div className="text-[10px] text-slate-500 uppercase">Win Rate</div>
                <div className="text-xl font-bold text-indigo-400">64.2%</div>
              </div>
              <div className="h-20 bg-white/5 rounded-xl p-4">
                <div className="text-[10px] text-slate-500 uppercase">Avg Deal</div>
                <div className="text-xl font-bold text-emerald-400">$12.4k</div>
              </div>
              <div className="h-20 bg-white/5 rounded-xl p-4">
                <div className="text-[10px] text-slate-500 uppercase">Active Reps</div>
                <div className="text-xl font-bold text-purple-400">142</div>
              </div>
            </div>
            <div className="h-64 bg-slate-800/50 rounded-xl flex items-end justify-between p-6 gap-2">
               {[40, 70, 45, 90, 65, 80, 50, 95, 100].map((h, i) => (
                 <div key={i} className="bg-indigo-500/40 w-full rounded-t-lg transition-all hover:bg-indigo-500" style={{ height: `${h}%` }}></div>
               ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-xl animate-float border-indigo-500/30">
        <div className="text-xs font-bold text-indigo-400 mb-1">AI Recommendation</div>
        <div className="text-[10px] text-slate-400">Increase discovery questions by 15%</div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
      {[
        { title: "Scaling to $10M ARR", tag: "Guide", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" },
        { title: "Objection Handling 101", tag: "Webinar", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" },
        { title: "AI in Sales: 2024 Report", tag: "E-book", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" },
      ].map((item, i) => (
        <div key={i} className="group cursor-pointer overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-indigo-500/50 transition-all">
          <div className="h-48 overflow-hidden">
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <span className="text-[10px] font-bold uppercase text-indigo-400 mb-2 block">{item.tag}</span>
            <h3 className="font-bold text-lg group-hover:text-indigo-400 transition-colors">{item.title}</h3>
            <p className="text-slate-500 text-sm mt-2">Learn the secrets of industry leaders in our latest release.</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAuthForm = () => (
    <div className="max-w-md mx-auto mt-12 glass-card p-10 rounded-3xl border border-white/10 shadow-2xl relative">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/20 blur-3xl -z-10 rounded-full"></div>
      <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
          <input type="email" placeholder="name@company.com" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Password</label>
          <input type="password" placeholder="••••••••" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
        </div>
        {pageType === 'signup' && (
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-indigo-500" />
            <label htmlFor="terms" className="text-xs text-slate-400">I agree to the <a href="#" onClick={() => onNavigate('terms')} className="text-indigo-400 hover:underline">Terms of Service</a></label>
          </div>
        )}
        <Button className="w-full py-4 text-lg font-bold">
          {pageType === 'login' ? 'Sign In' : 'Create Account'}
        </Button>
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            {pageType === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => onNavigate(pageType === 'login' ? 'signup' : 'login')} 
              className="text-indigo-400 font-bold hover:underline"
            >
              {pageType === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </form>
    </div>
  );

  const contentMap: Record<string, { title: string; subtitle: string; description: string; emoji: string }> = {
    platform: { title: "Next-Gen Sales Intelligence", subtitle: "Built for speed and performance", description: "NovaFlow is more than a dashboard. It's an end-to-end OS for your revenue organization.", emoji: "⚡" },
    solutions: { title: "Scale Your Revenue", subtitle: "Solutions for every stage of growth", description: "From seed-stage startups to global enterprises, we provide the infrastructure for elite performance.", emoji: "🧩" },
    pricing: { title: "Simple, Predictable Pricing", subtitle: "No hidden fees, no surprises", description: "Start small and scale as your team grows. Every plan includes our core AI engine.", emoji: "💰" },
    resources: { title: "The Revenue Library", subtitle: "Expert insights for modern sellers", description: "Level up your skills with our curated collection of guides, webinars, and research.", emoji: "📚" },
    login: { title: "Welcome Back", subtitle: "Access your dashboard", description: "Log in to view your team's performance and training progress.", emoji: "🔑" },
    signup: { title: "Get Started Free", subtitle: "Start your 14-day trial", description: "No credit card required. Join 5,000+ reps using NovaFlow.", emoji: "🚀" },
    demo: { title: "Book a Demo", subtitle: "See NovaFlow in action", description: "Get a personalized tour of our platform from one of our specialists.", emoji: "🗓️" },
    roleplay: { title: "AI Roleplay Arena", subtitle: "Safe practice for high-stakes calls", description: "Face dynamic AI personas that adapt to your tone, speed, and objection handling.", emoji: "🎭" },
    'live-assist': { title: "Live Call Assistance", subtitle: "Real-time AI battlecards", description: "Never fumble an objection again. Instant prompts delivered right when you need them.", emoji: "🎧" },
    analysis: { title: "Deep Call Insights", subtitle: "Automated coaching at scale", description: "Every call is analyzed for sentiment, talk-ratio, and key phrases automatically.", emoji: "📈" },
    integrations: { title: "Unified Ecosystem", subtitle: "Works with your existing stack", description: "Native integrations with Salesforce, HubSpot, Zoom, and 200+ other tools.", emoji: "🔗" },
  };

  const content = contentMap[pageType] || {
    title: "NovaFlow Feature",
    subtitle: "Innovation in Sales Coaching",
    description: "This feature is being optimized for your performance. Check back shortly.",
    emoji: "💎"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <section className="pt-24 pb-32 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            <div className="text-6xl mb-8">{content.emoji}</div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tighter">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-400 font-medium mb-8">
              {content.subtitle}
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              {content.description}
            </p>
            
            {/* Context-aware Content Area */}
            {pageType === 'pricing' && renderPricing()}
            {pageType === 'resources' && renderResources()}
            {(pageType === 'login' || pageType === 'signup') && renderAuthForm()}
            {(pageType === 'platform' || pageType === 'roleplay' || pageType === 'analysis' || pageType === 'live-assist') && renderDashboardVisual()}
            
            {/* Generic Call to Action if not on Auth pages */}
            {pageType !== 'login' && pageType !== 'signup' && pageType !== 'pricing' && pageType !== 'resources' && (
              <div className="mt-20 flex flex-wrap justify-center gap-4">
                <Button onClick={() => onNavigate('trial')} size="lg" className="rounded-full px-12">Start Now</Button>
                <Button onClick={() => onNavigate('home')} variant="outline" size="lg" className="rounded-full px-12">Back Home</Button>
              </div>
            )}
            
            {/* Decorative Grid background for pages */}
            <div className="fixed inset-0 pointer-events-none -z-20 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>
          </div>
        </section>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
