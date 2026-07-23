export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title gradient-text">Accelerate Your Discovery</h1>
        <p className="hero-subtitle">
          Research Flow provides an integrated environment to monitor, manage, and scale your global research initiatives with unparalleled ease.
        </p>
        
        {/* We use standard img to ensure dynamic image loads smoothly in dev */}
        <img 
          src="/images/hero.jpg" 
          alt="Research Flow Hero" 
          className="hero-image"
        />
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-title">Real-time Analytics</h3>
            <p>Track metrics as they happen and never miss a data point.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Secure & Compliant</h3>
            <p>Built with enterprise-grade security to keep your research safe.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Global Collaboration</h3>
            <p>Work effortlessly with peers across the globe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
