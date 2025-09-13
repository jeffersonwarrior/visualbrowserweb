'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Simulate submission for demo
    setTimeout(() => {
      setMessage('Thank you! We\'ll notify you when Visual Browser launches.');
      setIsSuccess(true);
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early access"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        required
        disabled={isLoading}
      />
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full text-lg rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
      >
        {isLoading ? 'Signing up...' : 'Get Early Access'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      {message && (
        <p className={`text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}