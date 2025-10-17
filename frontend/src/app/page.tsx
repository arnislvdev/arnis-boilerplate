/**
 * Home Page Component
 * 
 * This is the main landing page of the application.
 * Features a clean, professional layout with centered content
 * and call-to-action buttons.
 */

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">


      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-6">
 
          <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance">
            Arnis
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-semibold">
            This is a boilerplate made for Shadcn/UI and Next.js
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">

          <Button variant="default" size="lg" className="font-semibold">
            Hello
          </Button>
          <a href="https://github.com/arnislvdev" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="font-medium">
              GitHub →
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
