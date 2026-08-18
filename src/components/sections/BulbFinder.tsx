'use client';

import { useState, useMemo } from 'react';
import { Search, Car, Bike, Truck, Sparkles, Check, MessageCircle, AlertCircle } from 'lucide-react';
import { vehiclesData } from '@/data/vehicles';
import { VehicleType } from '@/types';

export default function BulbFinder() {
  const [selectedType, setSelectedType] = useState<VehicleType>('auto');
  const [selectedSocket, setSelectedSocket] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(vehiclesData[0].id);

  const vehicleTypes: { type: VehicleType; label: string; icon: any }[] = [
    { type: 'auto', label: 'Autos & Pick-ups', icon: Car },
    { type: 'camion', label: 'Camiones & 24V', icon: Truck },
    { type: 'moto', label: 'Motos', icon: Bike },
  ];

  const socketOptions = ['todos', 'H4', 'H7', 'H1', 'H11', 'H15', 'H8'];

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter((v) => {
      const matchesType = v.type === selectedType;
      const matchesSearch =
        v.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSocket =
        selectedSocket === 'todos' ||
        v.lowBeam === selectedSocket ||
        v.highBeam === selectedSocket ||
        v.fogLight === selectedSocket;

      return matchesType && matchesSearch && matchesSocket;
    });
  }, [selectedType, searchQuery, selectedSocket]);

  // Current active vehicle details
  const activeVehicle = useMemo(() => {
    const found = filteredVehicles.find((v) => v.id === selectedVehicleId);
    return found || filteredVehicles[0] || vehiclesData[0];
  }, [filteredVehicles, selectedVehicleId]);

  return (
    <section id="buscador" className="relative py-20 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Asistente de Compatibilidad Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Encontrá la Lámpara Exacta para tu Vehículo
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Seleccioná tu tipo de vehículo o zócalo para verificar compatibilidad directa, tecnología recomendada y corte de haz sin error en el tablero.
          </p>
        </div>

        {/* Vehicle Type Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {vehicleTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedType === item.type;
            return (
              <button
                key={item.type}
                onClick={() => {
                  setSelectedType(item.type);
                  setSelectedSocket('todos');
                }}
                className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  isSelected
                    ? 'text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/20'
                    : 'text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Finder Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-xl">
          {/* Left Column: Search & Vehicle List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por marca o modelo (ej: Hilux, Cronos, Amarok)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
              />
            </div>

            {/* Socket quick chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 text-[11px] font-bold mr-1 shrink-0">Zócalo:</span>
              {socketOptions.map((socket) => (
                <button
                  key={socket}
                  onClick={() => setSelectedSocket(socket)}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all shrink-0 uppercase ${
                    selectedSocket === socket
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {socket}
                </button>
              ))}
            </div>

            {/* Vehicle Selection List */}
            <div className="flex flex-col gap-2 max-h-[340px] overflow-y-auto pr-1">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((v) => {
                  const isActive = activeVehicle?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`text-left p-3.5 rounded-xl transition-all border ${
                        isActive
                          ? 'bg-orange-50 border-orange-400 shadow-sm'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">
                          {v.brand} {v.model}
                        </span>
                        <span className="text-[11px] text-orange-600 font-bold px-2 py-0.5 rounded bg-orange-100">
                          {v.lowBeam}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Años: {v.years}</p>
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-8 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  <AlertCircle className="w-8 h-8 text-orange-500 mx-auto mb-2 opacity-80" />
                  <p className="text-sm text-slate-800 font-bold">¿No encontrás tu modelo?</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Tenemos compatibilidad para el 99% del parque automotor. Consultanos directo:
                  </p>
                  <a
                    href={`https://wa.me/5491161977748?text=Hola%20Idara!%20No%20encontré%20mi%20vehículo%20en%20el%20buscador%20y%20quiero%20saber%20qué%20lámparas%20lleva.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 mt-3"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar a un técnico por WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Compatibility Card (Cohesive Light Theme) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-md">
            {activeVehicle ? (
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Ficha de Compatibilidad Verificada
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    {activeVehicle.brand} {activeVehicle.model}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Versiones aplicables: {activeVehicle.years}</p>
                </div>

                {/* Sockets Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block">
                      Luz Baja
                    </span>
                    <span className="text-2xl font-black text-orange-600 mt-1 block">
                      {activeVehicle.lowBeam}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Encastre principal</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block">
                      Luz Alta
                    </span>
                    <span className="text-2xl font-black text-orange-600 mt-1 block">
                      {activeVehicle.highBeam}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Larga distancia</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block">
                      Antiniebla
                    </span>
                    <span className="text-2xl font-black text-orange-600 mt-1 block">
                      {activeVehicle.fogLight || 'Opcional / H11'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Auxiliares</span>
                  </div>
                </div>

                {/* Recommendation & Technical Note */}
                <div className="space-y-2 p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Línea Recomendada: {activeVehicle.recommendedProduct}
                      </p>
                      {activeVehicle.notes && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {activeVehicle.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Pre-filled Quote CTA */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Consulté%20el%20buscador%20para%20un%20${encodeURIComponent(
                      activeVehicle.brand + ' ' + activeVehicle.model
                    )}%20y%20quiero%20consultar%20precio%20y%20opciones%20para%20${encodeURIComponent(
                      activeVehicle.recommendedProduct
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    Cotizar {activeVehicle.brand} {activeVehicle.model} por WhatsApp
                  </a>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    Respuesta rápida de un asesor técnico comercial.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
