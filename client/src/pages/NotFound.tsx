import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] px-4">
      <Card className="w-full max-w-lg shadow-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-md">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--accent-glow)] rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-[var(--accent-primary)]" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-2 font-['Space_Grotesk'] tracking-tight">
            404
          </h1>

          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-3">
            Page Not Found
          </h2>

          <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed max-w-sm mx-auto">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-[var(--accent-text-on-fill)] font-bold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border-0"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
