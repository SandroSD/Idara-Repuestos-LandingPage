'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Car, 
  Truck, 
  Bike, 
  MessageCircle, 
  Award, 
  LayoutGrid, 
  List, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Zap,
  RotateCcw
} from 'lucide-react';
import { productsData } from '@/data/products';

const ITEMS_PER_PAGE = 6;

export default function ProductShowcase() {
  const [selectedSegment, setSelectedSegment] = useState<'Todos' | 'Auto' | 'Camión' | 'Moto' | 'Neolux'>('Auto');
  const [selectedSection, setSelectedSection] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sectionRef = useRef<HTMLElement>(null);

  const segments = [
    { id: 'Auto', label: 'Autos 12V', icon: Car, count: productsData.filter(p => p.segmento === 'Auto').length },
    { id: 'Camión', label: 'Camiones 24V', icon: Truck, count: productsData.filter(p => p.segmento === 'Camión').length },
    { id: 'Moto', label: 'Motos 12V', icon: Bike, count: productsData.filter(p => p.segmento === 'Moto').length },
    { id: 'Neolux', label: 'Línea NEOLUX', icon: Zap, count: productsData.filter(p => p.segmento === 'Neolux').length },
    { id: 'Todos', label: 'Ver Todo', icon: LayoutGrid, count: productsData.length },
  ];

  // Available sections based on selected segment
  const availableSections = useMemo(() => {
    const relevant = selectedSegment === 'Todos' 
      ? productsData 
      : productsData.filter(p => p.segmento === selectedSegment);
    
    const secSet = new Set<string>();
    relevant.forEach(p => {
      if (p.seccion) secSet.add(p.seccion);
    });
    return Array.from(secSet);
  }, [selectedSegment]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      // Segment filter
      if (selectedSegment !== 'Todos' && p.segmento !== selectedSegment) {
        return false;
      }
      // Section filter
      if (selectedSection !== 'Todas' && p.seccion !== selectedSection) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchCode = p.codigo.toLowerCase().includes(q);
        const matchDesc = p.descripcion.toLowerCase().includes(q);
        const matchType = p.tipo ? p.tipo.toLowerCase().includes(q) : false;
        const matchEq = p.codigoEquivalenteOsram ? p.codigoEquivalenteOsram.toLowerCase().includes(q) : false;
        const matchSec = p.seccion.toLowerCase().includes(q);

        if (!matchCode && !matchDesc && !matchType && !matchEq && !matchSec) {
          return false;
        }
      }
      return true;
    });
  }, [selectedSegment, selectedSection, searchQuery]);

  // Total pages
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  // Auto adjust page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSegment, selectedSection, searchQuery]);

  // Paginated items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length);
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (sectionRef.current) {
        const offset = 80;
        const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  // Generate page numbers with ellipsis (1, 2, ... n)
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  // Format price helper in Argentine Pesos (ARS)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const handleResetFilters = () => {
    setSelectedSegment('Todos');
    setSelectedSection('Todas');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <section ref={sectionRef} id="productos" className="relative py-20 px-4 sm:px-6 bg-slate-100/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            Catálogo & Buscador Oficial • 225 Artículos Reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Buscador y Catálogo de Productos Oficiales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Buscá por código de parte, tipo de zócalo (H4, H7, D1S, W5W) o descripción. Precios de lista actualizados de toda nuestra línea oficial OSRAM y NEOLUX.
          </p>
        </div>

        {/* Segment Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {segments.map((seg) => {
            const Icon = seg.icon;
            const isSelected = selectedSegment === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => {
                  setSelectedSegment(seg.id as any);
                  setSelectedSection('Todas');
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  isSelected
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{seg.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-orange-600/60 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {seg.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filters & Search Control Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-md mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por código (ej: 64193, N 472, LED 106), tipo (H4, H7, D1S) o descripción..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Section Filter Dropdown */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <div className="w-full sm:w-auto">
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full sm:w-64 px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold focus:outline-none focus:border-orange-500 focus:bg-white transition-all truncate"
                >
                  <option value="Todas">Todas las secciones ({availableSections.length})</option>
                  {availableSections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  title="Vista en tarjetas"
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  title="Vista en tabla de precios"
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium">
            <div>
              {filteredProducts.length > 0 ? (
                <>
                  Mostrando del <strong className="text-slate-900">{startIndex + 1}</strong> al{' '}
                  <strong className="text-slate-900">{endIndex}</strong> de{' '}
                  <strong className="text-slate-900">{filteredProducts.length}</strong> productos • Página{' '}
                  <strong className="text-slate-900">{currentPage}</strong> de{' '}
                  <strong className="text-slate-900">{totalPages}</strong>
                </>
              ) : (
                <span>0 productos encontrados</span>
              )}
              {selectedSection !== 'Todas' && (
                <span className="ml-1 text-orange-600 font-semibold">• Sección: &ldquo;{selectedSection}&rdquo;</span>
              )}
            </div>

            {(selectedSection !== 'Todas' || searchQuery !== '' || selectedSegment !== 'Todos') && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Restablecer todos los filtros
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No se encontraron productos con ese criterio</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Probá ajustando el término de búsqueda o seleccioná otra categoría o sección.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-all"
            >
              Ver todos los productos
            </button>
          </div>
        )}

        {/* GRID VIEW (6 ITEMS PER PAGE) */}
        {viewMode === 'grid' && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#0F172A] text-white border border-slate-800 hover:border-orange-500/50 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all group"
                >
                  <div>
                    {/* Top Meta Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-md uppercase ${
                          product.marca === 'OSRAM'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {product.marca}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-800/80">
                          {product.segmento}
                        </span>
                      </div>

                      {product.volts && (
                        <span className="text-[11px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 font-mono">
                          {product.volts}
                        </span>
                      )}
                    </div>

                    {/* Product Code SKU */}
                    <div className="flex items-baseline justify-between gap-2 mt-1">
                      <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors font-mono tracking-tight">
                        {product.codigo}
                      </h3>
                      {product.tipo && (
                        <span className="text-xs font-bold text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-800/60">
                          Tipo {product.tipo}
                        </span>
                      )}
                    </div>

                    {/* Section Tag */}
                    <p className="text-[11px] font-semibold text-slate-400 mt-1 line-clamp-1">
                      {product.seccion}
                    </p>

                    {/* Description */}
                    <div className="my-4 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-xs">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block mb-1">
                        Descripción Oficial:
                      </span>
                      <p className="font-semibold text-slate-200 leading-snug">
                        {product.descripcion}
                      </p>
                    </div>

                    {/* Extra Specs Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.watts && (
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          Potencia: <strong>{product.watts}</strong>
                        </span>
                      )}
                      {product.codigoEquivalenteOsram && (
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-amber-950/60 text-amber-300 border border-amber-800/60">
                          Equiv. OSRAM: <strong>{product.codigoEquivalenteOsram}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom / Price & CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Precio Lista Oficial:
                      </span>
                      <span className="text-base sm:text-lg font-black text-orange-400 font-mono">
                        {formatPrice(product.precio)}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Quiero%20consultar%20stock%20y%20pedido%20para%20el%20producto%20${encodeURIComponent(
                        product.marca + ' ' + product.codigo + ' (' + product.descripcion + ')'
                      )}%20-%20Precio%20de%20lista:%20${encodeURIComponent(formatPrice(product.precio))}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/40 font-bold text-xs transition-all shadow-sm shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Pedir
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* TABLE VIEW */}
        {viewMode === 'table' && filteredProducts.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Marca</th>
                    <th className="py-3.5 px-4">Código (SKU)</th>
                    <th className="py-3.5 px-4">Tipo</th>
                    <th className="py-3.5 px-4">Volts</th>
                    <th className="py-3.5 px-4">Watts</th>
                    <th className="py-3.5 px-4 min-w-[240px]">Descripción Oficial</th>
                    <th className="py-3.5 px-4 text-right">Precio Lista</th>
                    <th className="py-3.5 px-4 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                  {displayedProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-3 px-4 font-bold">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                          p.marca === 'OSRAM' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {p.marca}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        {p.codigo}
                        {p.codigoEquivalenteOsram && (
                          <span className="block text-[10px] text-amber-600 font-sans">
                            Eq: {p.codigoEquivalenteOsram}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-orange-600">{p.tipo || '-'}</td>
                      <td className="py-3 px-4 font-mono">{p.volts || '-'}</td>
                      <td className="py-3 px-4 font-mono">{p.watts || '-'}</td>
                      <td className="py-3 px-4 text-slate-700">
                        <div className="font-semibold text-slate-900">{p.descripcion}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{p.seccion}</div>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-slate-900 whitespace-nowrap">
                        {formatPrice(p.precio)}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <a
                          href={`https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Quiero%20consultar%20stock%20para%20el%20código%20${encodeURIComponent(
                            p.marca + ' ' + p.codigo + ' (' + p.descripcion + ')'
                          )}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 text-xs font-bold transition-all shadow-sm"
                        >
                          <MessageCircle className="w-3 h-3" />
                          Consultar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PAGINATION CONTROLS (Atrás - Números (1, 2, ... n) - Adelante) */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Previous Button (Atrás) */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
                currentPage === 1
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-slate-200 shadow-sm hover:shadow active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Atrás</span>
            </button>

            {/* Page Numbers List (1, 2, ... n) */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full py-1">
              {getPageNumbers().map((item, idx) => {
                if (item === '...') {
                  return (
                    <span
                      key={`ellipsis-${idx}`}
                      className="px-2 py-1 text-slate-400 font-bold text-xs select-none"
                    >
                      …
                    </span>
                  );
                }

                const pageNum = item as number;
                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Ir a la página ${pageNum}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-w-[36px] sm:min-w-[40px] h-9 sm:h-10 px-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/20'
                        : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button (Adelante) */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
                currentPage === totalPages
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-slate-200 shadow-sm hover:shadow active:scale-95'
              }`}
            >
              <span>Adelante</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Wholesale B2B Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white border border-slate-700 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Atención Mayorista y Casas de Repuestos
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              ¿Precisás cotización por bulto cerrado o lista completa en Excel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Hacemos envíos diarios a todo el país y despachos inmediatos en la zona de Warnes y Gran Buenos Aires con descuentos por volumen.
            </p>
          </div>

          <a
            href="https://wa.me/5491161977748?text=Hola%20Distribuidora%20Idara!%20Soy%20comerciante/taller%20y%20quiero%20solicitar%20la%20lista%20de%20precios%20mayorista%20completa%20en%20Excel%20y%20condiciones%20por%20bulto%20cerrado."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Solicitar Lista Mayorista Excel
          </a>
        </div>
      </div>
    </section>
  );
}
