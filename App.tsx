import { useEffect, useState } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [spinProgress, setSpinProgress] = useState(0);

  const amazonLinks = [
    'https://amzn.to/4rl4VLq',
    'https://amzn.to/47zYBZs',
    'https://amzn.to/3OVvqtH',
    'https://amzn.to/40n3Jwc',
    'https://amzn.to/4sB2vJQ'
  ];

  useEffect(() => {
    const redirectDelay = Math.floor(Math.random() * 72) / 100 + 0.8;
    setTimeLeft(redirectDelay);

    const selectedLink = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];

    const startTime = Date.now();
    const totalDuration = redirectDelay * 1000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
      setSpinProgress(progressPercent);

      const remaining = Math.max(redirectDelay - (elapsed / 1000), 0);
      setTimeLeft(remaining);

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        window.location.href = selectedLink;
      }
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <span className="text-4xl font-bold text-white">SG</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          smart-buyguide
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Your trusted product finder
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">
          Finding the best deals for you
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We're checking availability and discounts for your selected product...
        </p>

        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#2563eb"
                strokeWidth="8"
                strokeDasharray={`${(spinProgress / 100) * 339.29} 339.29`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 0.1s linear' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">
                  {Math.ceil(timeLeft)}
                </div>
                <div className="text-gray-600 text-sm">
                  seconds remaining
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl mb-6 transition-colors"
          disabled
        >
          Continue to external site
        </button>

        <div className="flex justify-center gap-6 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Secure connection
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Best prices
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Verified deals
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
