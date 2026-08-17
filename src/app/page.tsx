export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
        Distribuidora Idara
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
        Distribuidor Oficial OSRAM & NEOLUX en Warnes 729, CABA.
      </p>
      <div style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-dim)' }}>
        Estructura base inicializada y lista para iterar.
      </div>
    </main>
  );
}
