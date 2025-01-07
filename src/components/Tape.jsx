import { Sparkle } from 'lucide-react';
import { Fragment } from 'react';
import { cn } from '../lib/utils';

const words = [
  'Performant',
  'Responsive',
  'Dynamic',
  'Scalable',
  'Robust',
  'Secure',
  'Optimized',
  'Accessible',
  'Intuitive',
  'Interactive',
];
function Tape({ className }) {
  return (
    <div className={cn('py:16 md:py-32 overflow-x-clip ', className)}>
      <div className="z-0 blur opacity-85 bg-gradient-to-r from-primary to-secondary rotate-6 -mx-3 translate-y-14 lg:translate-y-20">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <div className="flex flex-none gap-16 pr-16 py-4 md:py-6 animate-move-left ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-16 items-center">
                    <span className="tracking-wider uppercase text-foreground text-xl font-extrabold ">{word}</span>
                    <Sparkle size={24} fill="white" className="animate-spin-slow" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* ///// */}
      <div className="z-20 shadow-[10px_20px_20px_10px_hsl(var(--background)),10px_10px_50px_10px_hsl(var(--background))] bg-gradient-to-r from-secondary to-primary -rotate-3 -mx-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <div className="flex flex-none gap-16 pr-16 py-4 md:py-6 animate-move-right ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-16 items-center">
                    <span className="tracking-wider uppercase text-foreground text-xl font-extrabold ">{word}</span>
                    <Sparkle size={24} fill="white" className="animate-spin-slow" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tape;
