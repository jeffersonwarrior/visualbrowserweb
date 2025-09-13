import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Visual Browser Pricing</h1>
        <p className="text-xl text-gray-600">AI-powered web testing with latest CUA models</p>
      </div>
      <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
        <PricingCard
          name="Visual Browser"
          price={3}
          originalPrice={5}
          interval="hour"
          features={[
            'Latest CUA AI models for web testing',
            'Video recording and screenshots',
            'Audio analysis capabilities', 
            'AI-powered test insights',
            'Browser automation suite',
            'Real-time monitoring'
          ]}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  originalPrice,
  interval,
  features,
}: {
  name: string;
  price: number;
  originalPrice?: number;
  interval: string;
  features: string[];
}) {
  return (
    <div className="pt-6 border border-orange-200 rounded-lg p-8 bg-white shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{name}</h2>
      <div className="mb-6">
        <p className="text-5xl font-bold text-gray-900 mb-2">
          ${price}
          <span className="text-xl font-normal text-gray-600">/{interval}</span>
        </p>
        {originalPrice && (
          <p className="text-lg text-gray-500">
            <span className="line-through">${originalPrice}/{interval}</span>
            <span className="ml-2 text-orange-500 font-semibold">Launch Special!</span>
          </p>
        )}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors block text-center"
      >
        Get Started
      </a>
    </div>
  );
}
