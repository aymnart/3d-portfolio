import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { Sparkles } from '../components/Spakles';
import { cn } from '../lib/utils';

export default function Hero({ className }) {
  return (
    <section
      id="home"
      className={cn(
        'h-screen  mx-auto flex w-full flex-col items-center gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20',
        className,
      )}>
      <Button isBeam containerClass="h-7 text-sm rounded-full px-4">
        Available for work
      </Button>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:leading-[1.1]">
        Build your component library
      </h1>
      <h3 className="max-w-[750px] text-center text-balance text-lg font-light text-foreground">
        Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
        Source.
      </h3>
      <div className="flex w-full items-center justify-center mt-4 space-x-4 py-4 md:pb-10">
        <a href="#contact">
          <button className="cursor-pointer inline-flex h-10 animate-shimmer gap-2 items-center justify-center rounded-full border border-border bg-[linear-gradient(110deg,hsl(var(--background)),47%,hsl(var(--accent)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-base text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-1 focus:ring-offset-border">
            <span> Let&apos;s connect!</span> <ArrowRight className="h-4" />
          </button>
        </a>
      </div>
      <div
        className="
         relative -mt-32 h-96 w-full -z-10 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,hsl(var(--primary)),transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.6] after:w-[200%] after:rounded-[100%] 
      after:border-t-4 after:border-foreground after:bg-background after:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_hsl(var(--foreground))]">
        <Sparkles
          density={window.innerWidth}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,hsl(var(--foreground)),transparent_85%)]"
        />
      </div>
    </section>
  );
}
