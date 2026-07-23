export const metadata = {
  title: 'About - Research Flow',
}

export default function About() {
  return (
    <main className="page-header">
      <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Mission</h1>
      <div className="page-content">
        <p>
          At Research Flow, we believe that data drives discovery. We built this platform from the ground up to empower researchers, scientists, and data analysts globally. By removing the friction in data collection and providing real-time insights, we help you focus on what truly matters: making breakthroughs.
        </p>
        <p style={{ marginTop: '2rem' }}>
          This is a sample sub-page designed to test Next.js routing and the dashboard's translation routing functionalities, including sub-directory and ccTLD handling.
        </p>
      </div>
    </main>
  );
}
