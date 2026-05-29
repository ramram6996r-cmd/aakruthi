import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../data';
import { Calculator, MessageSquare, FlameKindling, Info, Sparkles, Building2, CheckCircle, PackageOpen } from 'lucide-react';

export default function InteractiveCostEstimator() {
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'interior'>('residential');
  const [qualityClass, setQualityClass] = useState<'silver' | 'gold' | 'platinum'>('gold');
  const [plotPreset, setPlotPreset] = useState<string>('30x40');
  const [customArea, setCustomArea] = useState<number>(1200);
  const [floors, setFloors] = useState<number>(2);

  // States for computed values
  const [estCost, setEstCost] = useState({ min: 0, max: 0 });
  const [cementBags, setCementBags] = useState<number>(0);
  const [steelTons, setSteelTons] = useState<number>(0);
  const [sandCft, setSandCft] = useState<number>(0);

  // Plot preset configuration helper
  const handlePresetChange = (preset: string) => {
    setPlotPreset(preset);
    if (preset === '30x40') {
      setCustomArea(1200);
    } else if (preset === '40x60') {
      setCustomArea(2400);
    } else if (preset === '50x80') {
      setCustomArea(4000);
    }
  };

  useEffect(() => {
    // Calibration parameters based on real Indian Civil Construction data
    // rates per sq.ft
    let baseRate = 1600;
    
    if (projectType === 'commercial') {
      baseRate = 1450;
    } else if (projectType === 'interior') {
      baseRate = 650; // solely interior furnishings
    }

    // multiply rate factor by quality class
    let multiplier = 1.0;
    if (qualityClass === 'silver') {
      multiplier = 0.9;
    } else if (qualityClass === 'platinum') {
      multiplier = 1.35;
    }

    // Interior specific adjustments
    if (projectType === 'interior') {
      if (qualityClass === 'silver') multiplier = 0.8;
      if (qualityClass === 'platinum') multiplier = 1.5;
    }

    const totalBuildArea = customArea * (projectType === 'interior' ? 1 : floors);
    const finalRate = baseRate * multiplier;
    
    const costMin = Math.round(totalBuildArea * finalRate * 0.95);
    const costMax = Math.round(totalBuildArea * finalRate * 1.05);

    setEstCost({ min: costMin, max: costMax });

    // Quantities estimations (only relevant for core civil constructions)
    if (projectType !== 'interior') {
      // average 0.4 cement bags per sq.ft of built area
      setCementBags(Math.round(totalBuildArea * 0.42));
      // average 3.8 kg (0.0038 tons) steel per sq.ft
      setSteelTons(parseFloat((totalBuildArea * 0.0041).toFixed(2)));
      // average 1.5 cft of sand per sq ft
      setSandCft(Math.round(totalBuildArea * 1.6));
    } else {
      setCementBags(0);
      setSteelTons(0);
      setSandCft(0);
    }
  }, [projectType, qualityClass, customArea, floors]);

  // Format currency helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Specific materials list mapped to selection
  const getMaterialSpecs = () => {
    if (projectType === 'interior') {
      switch (qualityClass) {
        case 'silver':
          return [
            'Commercial MR Grade Plywood structure',
            '0.8mm interior laminates with standard slides',
            'Basic false ceiling with regular LED spotlights',
            'Standard kitchen cabinets with semi-modular basket racks'
          ];
        case 'gold':
          return [
            '100% Genuine BWP Marine Ply (Waterproof)',
            '1.0mm high-gloss exterior laminate sheet with soft-close hinges',
            'Full False ceiling with premium profile lights (Philips/Wipro)',
            'Acrylic finished custom modular drawers, separate wet pantry area'
          ];
        case 'platinum':
          return [
            'High-quality Action Tesa HDMR or fully-seasoned Teak panels',
            'Anti-fingerprint super matte or metallic acrylic, heavy-hardware fittings (Hettich/Hafele)',
            'Custom CNC wooden designer partitions and geometric false profiles',
            'Full smart-sensing modular drawers, quartz stone counter treatments'
          ];
      }
    }

    // Civil constructions material specs list
    switch (qualityClass) {
      case 'silver':
        return [
          'Cement: Birla Super, ACC, or equivalent brand (OPC/PPC Grade)',
          'Steel Fe 550: Prime Gold, Indus, or equivalent locally sourced TMT bars',
          'Flooring: 2x2 double-charge vitrified tiles (under ₹55/sq.ft budget)',
          'Plumbing: Astral/Ashirvad pipes, basic Jaguar/Cera bathroom fittings',
          'Doors: Premium solid Flush doors with engineered hardwood frames'
        ];
      case 'gold':
        return [
          'Cement: UltraTech Premium, ACC F2R, or Penna Premium Grade',
          'Steel TMT Fe 550: Tata Tiscon, JSW Neo Steel, or Sail high-strength bars',
          'Flooring: 2x4 Kajaria premium ceramic/vitrified tiles or locally tailored polished granite',
          'Plumbing & Sanita: Astral plumbing, Jaguar chrome-finished mixer taps & Parryware bathroom closets',
          'Doors & Window: Teak wood frame for Main entrance Door, remaining with hone-wood structures, sliding aluminum balcony tracks'
        ];
      case 'platinum':
        return [
          'Cement: UltraTech Super, ACC Concrete Plus, premium high-setting brands',
          'Steel TMT Fe 550D/550: Tata Tiscon SD (Super Ductile) or JSW Neo first-class bars only',
          'Flooring: Italian high-polished marble or absolute premium large Kajaria nano-coated slabs',
          'Plumbing & Sanita: Astral flow-guard CPVC lines, fully concealed Grohe or Kohler thermostatic controls',
          'Doors & Window: Whole Teak Wood frame and decorative hand-carved Teak shutters, heavy UPVC windows with soundproofing mesh'
        ];
    }
  };

  const handlesendWhatsApp = () => {
    const formattedPreset = plotPreset === 'custom' ? `Custom Area (${customArea} Sq.Ft)` : `${plotPreset} Plotpreset (${customArea} Sq.Ft)`;
    const floorsBlock = projectType !== 'interior' ? `Floors: ${floors}\n` : '';
    const costText = `${formatCurrency(estCost.min)} - ${formatCurrency(estCost.max)}`;
    
    const message = `Hello Aakruthi Constructions! I calculated a construction cost estimate on your website calculator. Below are my requirements:\n\n` +
      `▪️ Project Class: ${projectType.toUpperCase()}\n` +
      `▪️ Site/Plot Size: ${formattedPreset}\n` +
      floorsBlock +
      `▪️ Material Tier: ${qualityClass.toUpperCase()}-Class\n` +
      `▪️ Indicated Estimate: ${costText}\n\n` +
      `Please let me know if we can schedule a site visit of my plot in Davangere or a face-to-face consultation. Thanks!`;

    const encoded = encodeURIComponent(message);
    window.open(`${COMPANY_CONTACT.whatsappUrl}?text=${encoded}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-700/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Interactive Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
            Civil Construction & <span className="text-amber-400">Interior Cost Estimator</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Get instant near-accurate evaluations for cement bags, steel tonnage, and total pricing based on actual Davangere market construction standards:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="estimator-tool">
          {/* Inputs Section (Left 7-columns) */}
          <div className="lg:col-span-7 bg-slate-850/85 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Project Type selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">1. Select Project Scope</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'Residential Villa', desc: 'Home building' },
                    { id: 'commercial', label: 'Commercial Office', desc: 'Shopping complex' },
                    { id: 'interior', label: 'Interiors', desc: 'Sleek modular carpentry' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id as any)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        projectType === type.id
                          ? 'border-cyan-500 bg-cyan-500/10 text-white shadow-xs'
                          : 'border-slate-850 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {type.id === 'interior' ? <PackageOpen className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                      <span className="text-xs sm:text-sm font-bold block leading-none">{type.label}</span>
                      <span className="text-[10px] opacity-75 hidden sm:block">{type.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Quality/Cost Class Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">2. Material Quality Tier</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'silver', label: 'Silver Class', desc: 'Solid, Standard build' },
                    { id: 'gold', label: 'Gold Class', desc: 'Branded, Premium choice' },
                    { id: 'platinum', label: 'Platinum Class', desc: 'Ultra-Luxury finishes' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setQualityClass(tier.id as any)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                        qualityClass === tier.id
                          ? 'border-amber-400 bg-amber-400/10 text-white'
                          : 'border-slate-850 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <Sparkles className={`w-5 h-5 ${qualityClass === tier.id ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span className="text-xs sm:text-sm font-bold block leading-none">{tier.label}</span>
                      <span className="text-[10px] opacity-75 hidden sm:block font-medium">{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Yard Plot Preset & Sizing */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">3. Plot Plot presets & Sizing</label>
                  
                  <div className="flex gap-1.5">
                    {[
                      { val: '30x40', label: '30 x 40 Ft (1200 SqFt)' },
                      { val: '40x60', label: '40 x 60 Ft (2400 SqFt)' },
                      { val: '50x80', label: '50 x 80 Ft (4000 SqFt)' },
                      { val: 'custom', label: 'Custom Slider' }
                    ].map((p) => (
                      <button
                        key={p.val}
                        onClick={() => handlePresetChange(p.val)}
                        className={`px-2 py-1 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                          plotPreset === p.val
                            ? 'bg-cyan-500 text-white border-cyan-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {p.label.split(' (')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Plot Area size slider */}
                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400">Total Plot Area:</span>
                    <span className="text-base font-extrabold text-cyan-400 font-mono">
                      {customArea} <span className="text-xs font-normal text-slate-300">Sq.Ft</span>
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="500"
                    max="8000"
                    step="50"
                    value={customArea}
                    onChange={(e) => {
                      setCustomArea(parseInt(e.target.value));
                      setPlotPreset('custom');
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                    <span>500 Sq.Ft</span>
                    <span>30x40 standard (1200)</span>
                    <span>40x60 Standard (2400)</span>
                    <span>8000 Sq.Ft</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Floor Count Selection (Only for constructions) */}
              {projectType !== 'interior' && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">4. Built Floors Count</label>
                    <span className="text-sm font-extrabold text-amber-400 font-mono">
                      {floors} Floor{floors > 1 ? 's' : ''} <span className="text-xs font-normal text-slate-300">({floors === 1 ? 'Ground Floor Only' : `G + ${floors - 1} Floors`})</span>
                    </span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-4 items-center">
                    <input
                      type="range"
                      min="1"
                      max="4"
                      step="1"
                      value={floors}
                      onChange={(e) => setFloors(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex gap-2 shrink-0">
                      {[1, 2, 3, 4].map((f) => (
                        <button
                          key={f}
                          onClick={() => setFloors(f)}
                          className={`w-8 h-8 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                            floors === f
                              ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                              : 'bg-slate-850 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Note on calculation accuracy */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
              <Info className="w-4.5 h-4.5 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                *Excluding municipal licensing fees and structural excavation adjustments. Calculations are estimated using 2026 raw material pricing of cement bags and Tata steel rods at Davangere.
              </span>
            </div>
          </div>

          {/* Computed Output Cards (Right 5-columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Pricing Estimate Card */}
            <div className="bg-gradient-to-br from-slate-850 to-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex-1 flex flex-col justify-between shadow-2xl">
              {/* Aesthetic subtle badge */}
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Calculator className="w-36 h-36" />
              </div>

              <div>
                <p className="text-[10px] font-bold text-amber-400 tracking-widest uppercase font-mono">Estimated Turnkey Cost</p>
                
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono tracking-tight text-white">
                    {formatCurrency(estCost.min)}
                  </span>
                  <span className="text-slate-400 mx-2 text-lg font-bold">to</span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mt-1">
                    {formatCurrency(estCost.max)}
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-300">
                  Total Built Area: <span className="font-bold text-white font-mono">{customArea * (projectType === 'interior' ? 1 : floors)} Sq.Ft</span>
                </div>

                {/* Turnkey Material Specs List section */}
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Included Material Standard :</span>
                  </p>
                  
                  <ul className="space-y-3.5">
                    {getMaterialSpecs().map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0" />
                        <span className="leading-tight font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Civil Materials Quantities Box */}
              {projectType !== 'interior' && (
                <div className="mt-8 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 grid grid-cols-3 gap-2">
                  <div className="text-center border-r border-slate-800">
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold block">Cement Bags</span>
                    <span className="text-sm font-extrabold text-white font-mono block mt-1">~{cementBags}</span>
                    <span className="text-[9px] text-slate-500 mt-0.5 block">ACC/Ultratech</span>
                  </div>
                  <div className="text-center border-r border-slate-800">
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold block">Steel Rods</span>
                    <span className="text-sm font-extrabold text-white font-mono block mt-1">~{steelTons} Tons</span>
                    <span className="text-[9px] text-slate-500 mt-0.5 block">Tata/JSW Fe550</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold block">Fine Sand</span>
                    <span className="text-sm font-extrabold text-white font-mono block mt-1">~{sandCft} CFT</span>
                    <span className="text-[9px] text-slate-500 mt-0.5 block">A-Grade M-Sand</span>
                  </div>
                </div>
              )}

              {/* Submit / Forward CTA Button */}
              <div className="mt-8">
                <button
                  onClick={handlesendWhatsApp}
                  className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/10 cursor-pointer hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-205"
                  id="estimator-whatsapp-cta"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950 stroke-none" />
                  <span>Send Estimate to WhatsApp Owner</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-3 font-mono">
                  Generates WhatsApp draft. Forward to Aakruthi Constructions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
