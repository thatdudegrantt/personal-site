import Navbar from '@/components/Navbar';

export default function Home() {
  return (
      <div>
        <Navbar />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-base-content">Welcome to My Website</h1>
              <p className="py-6 text-base-content">
                This is a simple homepage built with Tailwind CSS and DaisyUI.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
  );
}