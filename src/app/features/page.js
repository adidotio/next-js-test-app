export const metadata = {
  title: 'Features - Research Flow',
}

export default function Features() {
  return (
    <main>
      <section className="page-header">
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Global Reach</h1>
        <p className="hero-subtitle" style={{ margin: '0 auto 2rem' }}>
          Connect endpoints across the planet with zero latency.
        </p>
        <img 
          src="/images/feature.jpg" 
          alt="Feature Global Reach" 
          className="hero-image"
        />
      </section>

      <section className="features-section" style={{ paddingTop: '2rem' }}>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-title">API Integration</h3>
            <p>Connect seamlessly with your existing REST and GraphQL APIs.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Dynamic Hydration</h3>
            <p>Experience blazingly fast client-side transitions and interactivity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
