import content from "@/data/content.json";

export default function Home() {
  const products = [
    {
      title: "Atmosphere Control Glove Boxes",
      tag: "Flagship Isolators",
      desc: "Hermetically sealed, inert-environment chambers engineered for precise chemical synthesis and lithium-ion battery research.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      title: "Interactive STEM Innovation Hubs",
      tag: "Academic Excellence",
      desc: "Turnkey, IAPT-aligned science laboratories designed to bridge theoretical physics with hands-on university education.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      title: "Special Purpose Machines (SPM)",
      tag: "Bespoke Automation",
      desc: "Application-specific mechanical and automated systems designed from scratch for complex industrial testing challenges.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "Desiccator & PTFE Chambers",
      tag: "Chemical Integrity",
      desc: "High-vacuum storage and extreme-temperature corrosion-proof autoclaves built to exact volume specifications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    }
  ];

  return (
    <div className="bg-[#FCFBF8]">      
      
      {/* --- 1. DEEP HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-950/80 to-slate-950 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FCFBF8] to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide mb-8 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Precision Manufacturing • ISO Compliant • Make In India
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.05] drop-shadow-2xl">
            Engineering the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
              Future of Science.
            </span>
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Bespoke acrylic glove boxes, Special Purpose Machines, and high-precision scientific instruments designed and fabricated directly in our Rajasthan facilities.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="#solutions" className="group relative px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 transition-all shadow-[0_0_40px_rgb(59,130,246,0.3)] hover:shadow-[0_0_60px_rgb(59,130,246,0.5)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Solutions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </a>
            <a href={`https://wa.me/919008009944`} className="px-8 py-4 rounded-full bg-slate-900/50 text-white font-medium border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 backdrop-blur-md transition-all">
              Consult an Engineer
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. TRUST & INSTITUTIONS --- */}
      <section className="py-12 relative z-20 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by Premier Research & Educational Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20 opacity-60 grayscale">
            <span className="text-xl font-black text-slate-800 font-serif">IIT DELHI</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">PharmaTech</span>
            <span className="text-xl font-black text-slate-800">DPS Hubs</span>
            <span className="text-xl font-black text-slate-800 font-serif">IAPT</span>
          </div>
        </div>
      </section>

      {/* --- 3. BENTO BOX CAPABILITIES --- */}
      <section id="expertise" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none"></div>
        
        <div className="mb-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            In-House Mastery.<br />
            <span className="text-slate-400">Zero Outsourcing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-slate-200/80 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom CAD & Blueprinting</h3>
              <p className="text-slate-500 leading-relaxed max-w-md">Every custom chamber and SPM begins as a rigorous 3D model. We validate dimensional tolerances and port configurations virtually before a single cut is made.</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-slate-900 rounded-[2rem] p-10 border border-slate-800 shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-50" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">High-Vacuum Testing</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Rigorous leak detection and structural pressure-drop testing ensure 100% hermetic reliability for critical isolation.</p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-900/30 px-3 py-1.5 rounded-lg border border-blue-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Active Protocol
                  </span>
                </div>
             </div>
          </div>

          <div className="md:col-span-1 bg-gradient-to-br from-white to-slate-50 rounded-[2rem] p-8 border border-slate-200/80 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-500">
            <h3 className="text-lg font-bold text-slate-900 mb-2">CNC Acrylic Milling</h3>
            <p className="text-slate-500 text-sm">Micro-millimeter accuracy for glove ports, flanges, and high-clarity PMMA panels.</p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] p-8 border border-blue-500 shadow-lg text-white flex items-center justify-between overflow-hidden relative group hover:shadow-blue-500/30 transition-all">
            <div className="absolute right-0 top-0 w-64 h-full bg-white/10 skew-x-12 translate-x-10 group-hover:translate-x-0 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Ready to manufacture your design?</h3>
              <p className="text-blue-100 max-w-sm text-sm">Send us your technical requirements and dimensions for a rapid feasibility review.</p>
            </div>
            <a href={`tel:${content.company.contact.phone}`} className="relative z-10 hidden sm:flex px-6 py-3 bg-white text-blue-600 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md">
              Contact Facility &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* --- 4. PREMIUM PRODUCT SHOWCASE --- */}
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3 block">Product Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">Advanced Instrumentation</h2>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed pb-2">
            Engineered to exact dimensional and environmental specifications for universities and industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/40 shadow-lg">
                    {item.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between bg-white relative">
                <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-16">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light mb-8">{item.desc}</p>
                </div>
                <div>
                  <a href={`/products/${item.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50/50 hover:bg-blue-50 px-6 py-3 rounded-xl transition-colors">
                    View Specifications & Quote
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. FACILITY GALLERY --- */}
      <section id="gallery" className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3 block">Inside The Workshop</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">Precision in Action.</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Take a look inside our Jodhpur and Jaipur facilities where raw acrylic and steel are transformed into world-class scientific hardware.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-slate-100 aspect-square group shadow-sm">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="CNC Machining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-sm tracking-wide">5-Axis CNC Milling</span>
              </div>
            </div>
            {[
              { img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80", label: "Vacuum Testing" },
              { img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=400&q=80", label: "Acrylic Polishing" },
              { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", label: "Final Assembly" },
              { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80", label: "STEM Lab Setup" }
            ].map((photo, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-square group shadow-sm">
                <img src={photo.img} alt={photo.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-wide">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CLIENT REVIEWS --- */}
      <section id="reviews" className="py-24 relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
             <div>
               <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Verified Deployments</h2>
             </div>
             <a href={`tel:${content.company.contact.phone}`} className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">Request reference contact &rarr;</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "The custom acrylic glove box exceeded our expectations in both vacuum retention and optical clarity. Exceptional fabrication quality.", author: "Dr. A. Mehta", org: "IIT Delhi Research Facility" },
              { quote: "Prayan Innovation engineered a bespoke SPM that completely solved our automated testing bottleneck. Highly recommended.", author: "R. Sharma", org: "PharmaTech Solutions" },
              { quote: "The IAPT-aligned STEM models have transformed how our students interact with theoretical physics. Brilliant turnkey execution.", author: "Principal", org: "Delhi Public School" }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">"{review.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                  <p className="text-xs text-slate-500">{review.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. TECHNICAL FAQ --- */}
      <section id="faq" className="py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do you manufacture custom dimensions for Glove Boxes?", a: "Yes. All our acrylic and PTFE chambers can be custom-fabricated to exact dimensions, including custom port placements and specific valve integrations." },
              { q: "What is the standard lead time for Special Purpose Machines?", a: "Lead times vary based on complexity. Standard custom chambers take 2-3 weeks, while fully automated SPMs generally require 4-8 weeks from CAD approval to delivery." },
              { q: "Do you supply pan-India?", a: "Absolutely. We securely crate and ship our equipment to universities and industrial facilities across India, directly from our Jodhpur and Jaipur manufacturing bases." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#FCFBF8] rounded-2xl border border-slate-200/80 cursor-pointer overflow-hidden transition-all duration-300 hover:border-blue-200">
                <summary className="font-bold text-slate-900 px-6 py-5 flex justify-between items-center outline-none">
                  {faq.q}
                  <span className="text-blue-600 font-medium group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. RICH CTA --- */}
      <section className="relative overflow-hidden bg-slate-900 py-24 border-t border-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Require custom dimensions?
          </h2>
          <p className="text-lg text-slate-400 mb-10 font-light">
            Our engineering team in Rajasthan provides dedicated consultations, detailed CAD previews, and precise manufacturing estimates for complex requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/919008009944`} className="px-8 py-4 rounded-full bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 shadow-[0_0_30px_rgb(16,185,129,0.3)] transition-all flex items-center justify-center gap-2">
               <span>Chat on WhatsApp</span>
            </a>
            <a href={`mailto:${content.company.contact.email}`} className="px-8 py-4 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all">
              Email Blueprint / Inquiry
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}