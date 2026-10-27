"use client";

import { useState, useEffect } from "react";
import content from "@/data/content.json";

export default function InnovationLab() {
  const heroImages = [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllExperiments, setShowAllExperiments] = useState(false);
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Hero Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Scroll & Mouse Tracking Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Custom logic to detect hover on interactive elements to enlarge cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredModels = [
    {
      title: "IH - Air Track",
      desc: "Demonstrates the concept of friction reduction using an air cushion between a V-shaped track and gliders. Enables near-frictionless, one-dimensional motion for exploring principles like elastic collisions and interaction at a distance using magnetic repulsion.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "IH - Black Hole",
      desc: "Science Behind Curved Surface Dynamics: When a two-dimensional surface deforms, it transforms into a curved structure. A stretched rubber membrane model is crucial in astrophysics to explain planetary motion, black holes, and gravitational lensing.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "IH - Multiple Image (Plane Mirrors)",
      desc: "Discover the magic of reflection! When two plane mirrors are placed at an angle, multiple images are formed leading to a dazzling cascade of reflections. The number of images depends on the angle between the mirrors.",
      image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "IH - Vortex Formation",
      desc: "Experience the fascinating science of vortex flow! When two connected bottles are inverted, water transfer slows due to trapped air. A gentle swirl creates a funnel-shaped passage allowing smooth, dynamic liquid transfer in seconds.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const experiments = [
    { title: "Anharmonic Oscillator", concept: "Non-linear motion, energy curves, variable restoring force" },
    { title: "Angular Momentum Conservation", concept: "Gyroscopic effects, torque-free rotation, conservation laws" },
    { title: "Coupled Oscillations", concept: "Normal modes, energy exchange, resonance" },
    { title: "Bohr Orbits Demonstration", concept: "Atomic energy levels, spectral lines, quantization" },
    { title: "Doppler Effect", concept: "Frequency shift, wave motion, relative velocity" },
    { title: "Equilibrium with Magnets", concept: "Magnetic fields, stable equilibrium, vector forces" },
    { title: "Importance of Curved Surface", concept: "Gravitational curvature, spacetime effects, trajectories" },
    { title: "Kundt's Tube", concept: "Sound resonance, standing waves, node-antinode pattern" },
    { title: "Lissajous Figures", concept: "Oscillation phase, waveform symmetry, frequency ratios" },
    { title: "Lorentz Oscillator", concept: "Electron behavior in fields, absorption, dispersion" },
    { title: "Manual Lift with 1/8 Effort", concept: "Mechanical advantage, pulley systems, force distribution" },
    { title: "Maxwell's Top", concept: "Angular velocity, rotational inertia, gyroscopic precession" },
    { title: "Measure Your Weight", concept: "Gravitational force, spring scales, mass vs weight" },
    { title: "Motion on Inclined Plane", concept: "Force components, friction, acceleration on slopes" },
    { title: "Magnetically Coupled Oscillator", concept: "Electromagnetic induction, resonance, field interactions" },
    { title: "Mechanical Transmission Line", concept: "Signal propagation, energy transfer, wave speed" },
    { title: "Plasma State", concept: "Ionization, charged particle dynamics, fourth state of matter" },
    { title: "Plasma Application", concept: "Plasma containment, fusion research, industrial uses" },
    { title: "Rotation Dynamics", concept: "Torque, moment of inertia, angular acceleration" },
    { title: "Reduction of Friction", concept: "Lubrication, surface interaction, energy loss minimization" },
    { title: "Racing Track", concept: "Centripetal force, banking of curves, momentum conservation" },
    { title: "Solar Concentrator", concept: "Optics, thermal energy, focal point amplification" },
    { title: "Series of Pendulum", concept: "Phase synchrony, coupled motion, wave transfer" },
    { title: "Vibration Analysis of a System", concept: "Natural frequency, damping ratio, forced oscillation" },
    { title: "Vortex Formation", concept: "Fluid dynamics, rotational flow, angular velocity" },
    { title: "Air Cannon", concept: "Projectile motion, gas compression, impulse transfer" },
    { title: "Bouncing Laser Beam from Saline Water", concept: "Refraction, surface tension effects, total internal reflection" },
    { title: "Floating Magnetic Dipoles", concept: "Atomic configurations, dipole interaction, magnetic field alignment" },
    { title: "Electroscope", concept: "Electrostatics, charge detection, potential difference" },
    { title: "Electromagnetic Induction", concept: "Faraday's law, induced EMF, magnetic flux change" },
    { title: "Melde's Experiment", concept: "Standing waves in wire, nodes, resonance frequencies" },
    { title: "Eddy Currents Experiment", concept: "Lenz's law, energy dissipation, magnetic damping" },
    { title: "Diffraction of Light using LASER", concept: "Wave-particle duality, interference patterns, slit experiment" },
    { title: "Atwood's Machine", concept: "Newton's laws, tension analysis, acceleration systems" },
    { title: "Balancing Ball", concept: "Equilibrium, feedback systems, gyroscopic control" },
    { title: "Foucault Pendulum", concept: "Earth's rotation, inertial frame, Coriolis effect" },
    { title: "Science of Flame", concept: "Combustion reactions, heat transfer, chemical kinetics" },
    { title: "Analysis of Vibrating System", concept: "Amplitude, frequency response, harmonic motion" },
    { title: "Thermodynamics", concept: "Heat, entropy, energy conservation, state variables" },
    { title: "Waves on Water Surface", concept: "Wave interference, surface tension, stationary wave formation" },
    { title: "Atomic Arrangements and Defects", concept: "Crystallography, point defects, lattice structures" },
    { title: "Magnetic Oscillator", concept: "Field interaction, oscillation amplitude, frequency tuning" },
    { title: "Mechanical Raman Effect Demo", concept: "Scattering of light, molecular vibration, inelastic collision" },
    { title: "Newton's Cradle", concept: "Momentum conservation, elastic collisions, energy transfer" },
    { title: "Non-Crystalline Structure Model", concept: "Amorphous solids, atomic randomness, thermal behavior" },
    { title: "Potential Well", concept: "Quantum mechanics, particle confinement, tunneling phenomena" },
    { title: "Rotation Dynamics on Bicycle Rim", concept: "Angular momentum, Symmetry, Gyroscopic stability" },
    { title: "Vander Wall Potential", concept: "Intermolecular forces, molecular attraction, weak bonding" }
  ];

  const institutions = [
    { name: "Vivekananda Global University", location: "Jaipur, Rajasthan" },
    { name: "Hans Raj Mahila Maha Vidyalaya", location: "Jalandhar, Punjab" },
    { name: "SV Public School", location: "Jaipur, Rajasthan" },
    { name: "Rani Laxmibai Mahila Mahavidyalaya", location: "Parola, Jalgaon, Maharashtra" },
    { name: "Amity University", location: "Noida, Uttar Pradesh" },
    { name: "Government College", location: "Kota, Rajasthan" },
    { name: "Kanya Mahavidyalaya", location: "Jalandhar, Punjab" },
    { name: "Regional Institute of Education", location: "Bhubaneswar, Odisha" },
    { name: "Bajaj Science Centre", location: "Wardha, Maharashtra" },
    { name: "IIS University", location: "Jaipur, Rajasthan" },
    { name: "Anaveshika (IAPT)", location: "Jaipur, Rajasthan" },
    { name: "SS Jain Subodh College", location: "Jaipur, Rajasthan" },
    { name: "Pune University (Science Centre)", location: "Pune, Maharashtra" },
    { name: "Science Park", location: "Chandrapur, Maharashtra" },
    { name: "Regional Institute of Education", location: "Ajmer, Rajasthan" },
    { name: "Bansur PG College", location: "Bansur, Alwar, Rajasthan" },
    { name: "Prayan Innovation", location: "Sanganer, Jaipur, Rajasthan" },
    { name: "DAV College", location: "Bathinda, Punjab" },
    { name: "Amity University", location: "Raipur, Chhattisgarh" },
    { name: "Rawat Public School", location: "Pratap Nagar, Jaipur, Rajasthan" },
    { name: "Ben Hur Public School", location: "Pilibhit, Uttar Pradesh" },
    { name: "Adventure Park", location: "New Kufri, Shimla, Himachal Pradesh" },
    { name: "Midnapore College", location: "Midnapore, West Bengal" },
    { name: "SD College", location: "Barnala, Punjab" },
    { name: "Govt Model Sr. Sec. School", location: "Thana Kalan, Himachal Pradesh" },
    { name: "DPS School", location: "Rudrapur, Uttarakhand" },
    { name: "Dr. H. N. Regional Science Centre", location: "Hosur, Karnataka" },
    { name: "IIS School", location: "Sitapura, Jaipur, Rajasthan" },
    { name: "IISER", location: "Kolkata, West Bengal" },
    { name: "Sri Vaishnav Vidyapeeth University", location: "Indore, Madhya Pradesh" },
    { name: "IPS Academy", location: "Khandwa Road, Indore, Madhya Pradesh" },
    { name: "Mahrawal Govt. Sr. Sec. School", location: "Dungarpur, Rajasthan" },
    { name: "Veer Bala Govt. Girls College", location: "Dungarpur, Rajasthan" },
    { name: "Guru Nanak Public School", location: "Ballarsha, Maharashtra" },
    { name: "Marwadi University", location: "Rajkot, Gujarat" },
    { name: "Maharani College", location: "Jaipur, Rajasthan" },
    { name: "Govt Sr. Sec. School", location: "Charatgarh, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Basderah, Himachal Pradesh" },
    { name: "IIIT Allahabad", location: "Prayagraj, Uttar Pradesh" },
    { name: "Govt Model Sr. Sec. School", location: "Amb, Himachal Pradesh" },
    { name: "Govt Model Sr. Sec. School", location: "Mubarikpur, Himachal Pradesh" },
    { name: "Govt Model Sr. Sec. School", location: "Saloh, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Takoli, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Dhundala, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Kangar, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Pubwal, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Samoor Kalan, Himachal Pradesh" },
    { name: "Govt Sr. Sec. School", location: "Basal, Himachal Pradesh" },
    { name: "Government College", location: "Dharamshala, Himachal Pradesh" },
    { name: "Indian Institute of Engineering Science and Technology", location: "Shibpur, Kolkata, West Bengal" },
    { name: "Inter-University Accelerator Centre", location: "New Delhi" },
    { name: "JDB Government Girls College", location: "Kota, Rajasthan" },
    { name: "Mahatma Gandhi Govt. School NVD Balmandir", location: "C-Scheme, Jaipur, Rajasthan" },
    { name: "Eklavya Model Residential School", location: "Kawant, Gujarat" },
    { name: "PM Shri Navodaya School", location: "JNV Khelri, Dausa, Rajasthan" },
    { name: "PM Shri Navodaya School", location: "JNV Patan, Rajasthan" },
    { name: "Central University of Haryana", location: "Mahendragarh, Haryana" }
  ];

  const displayedExperiments = showAllExperiments ? experiments : experiments.slice(0, 10);
  const displayedInstitutions = showAllInstitutions ? institutions : institutions.slice(0, 8);

  return (
    <div className="bg-[#FCFBF8] min-h-screen pt-24 pb-24 relative overflow-hidden cursor-none">
      
      {/* Custom Animated Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500/50 pointer-events-none z-[100] transition-transform duration-150 ease-out flex items-center justify-center mix-blend-difference"
        style={{ transform: `translate(${mousePos.x - 16}px, ${mousePos.y - 16}px) scale(${isHovering ? 1.5 : 1})` }}
      >
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" /></svg>
      </button>

      {/* Ambient Background Elements for creativity */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 1. HERO SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="relative w-full h-[60vh] sm:h-[75vh] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-950 group border border-slate-200/50">
          
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentIndex
                  ? "opacity-0 -translate-x-[15%] scale-95"
                  : "opacity-0 translate-x-[15%] scale-95"
              }`}
            >
              <img src={img} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover opacity-70 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            </div>
          ))}

          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md w-fit">
              Interactive STEM Solutions
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter max-w-4xl mb-8 leading-[1.1] drop-shadow-2xl">
              Engineering Solution for Science, Research and Education
            </h1>
            <a 
              href={`https://wa.me/${content.company.contact.phone}`} 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold py-4 px-10 rounded-full w-fit transition-all shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_rgba(16,185,129,0.7)] hover:-translate-y-1"
            >
              REQUEST INNOVATION HUB
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.003-3.588c-.608-1.056-.929-2.284-.929-3.533 0-3.86 3.14-7 7-7 3.861 0 7 3.14 7 7s-3.139 7-7 7z"/></svg>
            </a>
          </div>

          <div className="absolute bottom-8 right-10 flex gap-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-white w-10 shadow-[0_0_10px_white]" : "bg-white/30 w-2.5 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-8 font-serif relative inline-block">
          Interactive Science Models
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mt-8 font-light">
          The Innovation Hub features <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{experiments.length}+ hands-on experiments</span> designed to make science interactive, engaging, and easy to understand for school and college students. These models simplify complex concepts and encourage students to explore, question, and learn through real-world applications.
        </p>
      </section>

      {/* 3. FEATURED MODELS (BENTO BOX GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredModels.map((model, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 overflow-hidden group">
              <div className="h-72 w-full bg-slate-100 overflow-hidden relative">
                <img src={model.image} alt={model.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 sm:p-10 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:-translate-y-1/2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIMENTS LIST TABLE WITH SEE ALL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">Innovation Hub Experiment List</h2>
          <p className="mt-3 text-sm text-blue-600 font-bold uppercase tracking-widest">Physics Experiments and Key Concepts</p>
        </div>
        
        <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl overflow-hidden relative transition-all duration-500">
          <div className="overflow-x-auto relative">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">#</th>
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">Experiment Title</th>
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">Concepts Covered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedExperiments.map((exp, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/60 transition-colors group">
                    <td className="py-5 px-8 text-sm text-slate-400 font-mono group-hover:text-blue-600 transition-colors">{idx + 1}</td>
                    <td className="py-5 px-8 text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{exp.title}</td>
                    <td className="py-5 px-8 text-sm text-slate-500 font-light">{exp.concept}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fading overlay to indicate more content when collapsed */}
            {!showAllExperiments && experiments.length > 10 && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col items-center justify-center relative z-10">
            <button 
              onClick={() => setShowAllExperiments(!showAllExperiments)}
              className="px-8 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 text-sm font-bold text-blue-600 transition-all flex items-center gap-2"
            >
              {showAllExperiments ? "Collapse Catalog" : "See All Experiments"}
              <svg className={`w-4 h-4 transition-transform duration-300 ${showAllExperiments ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {!showAllExperiments && (
              <span className="text-xs text-slate-400 mt-3 font-medium">Showing 10 of {experiments.length} experiments</span>
            )}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONS/CLIENT LIST TABLE WITH SEE ALL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">Deployed Across India</h2>
          <p className="mt-3 text-sm text-emerald-600 font-bold uppercase tracking-widest">Trusted by leading educational institutions</p>
        </div>
        
        <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-xl overflow-hidden relative transition-all duration-500">
          <div className="overflow-x-auto relative">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">#</th>
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">Institution</th>
                  <th className="py-5 px-8 font-bold text-sm tracking-wide">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedInstitutions.map((inst, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/60 transition-colors group">
                    <td className="py-5 px-8 text-sm text-slate-400 font-mono group-hover:text-emerald-600 transition-colors">{idx + 1}</td>
                    <td className="py-5 px-8 text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{inst.name}</td>
                    <td className="py-5 px-8 text-sm text-slate-500 flex items-center gap-2 font-light">
                      <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">📍</span> 
                      {inst.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Fading overlay to indicate more content when collapsed */}
            {!showAllInstitutions && institutions.length > 8 && (
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col items-center justify-center relative z-10">
            <button 
              onClick={() => setShowAllInstitutions(!showAllInstitutions)}
              className="px-8 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 text-sm font-bold text-emerald-600 transition-all flex items-center gap-2"
            >
              {showAllInstitutions ? "Show Less" : "See All Deployments"}
              <svg className={`w-4 h-4 transition-transform duration-300 ${showAllInstitutions ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {!showAllInstitutions && (
              <span className="text-xs text-slate-400 mt-3 font-medium">Showing 8 of {institutions.length} clients</span>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}