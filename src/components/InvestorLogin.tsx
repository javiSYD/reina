import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const InvestorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic placeholder
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="font-serif text-2xl sm:text-3xl text-foreground text-center mb-2">
        Investor Portal
      </h2>
      <p className="text-body text-sm text-center mb-8">
        Access your investment dashboard
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-secondary/50 border-border text-sm"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 bg-secondary/50 border-border text-sm"
          required
        />
        <Button
          type="submit"
          className="w-full h-11 text-sm tracking-wide"
        >
          Sign In
        </Button>
      </form>

      <p className="text-muted-foreground text-xs text-center mt-6">
        For access inquiries, please{' '}
        <button
          type="button"
          className="text-link underline-offset-2 hover:underline"
        >
          contact us
        </button>
      </p>
    </div>
  );
};

export default InvestorLogin;
