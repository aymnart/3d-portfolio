import { Star } from 'lucide-react';
import { Fragment } from 'react';

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
function Tape() {
  return (
    <div className="py:16 md:py-32 overflow-x-clip">
      <div className="bg-gradient-to-r from-primary to-secondary -rotate-3 -mx-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <div className="flex flex-none gap-8 pr-8 py-4 md:py-6 animate-move-left ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-8 items-center">
                    <span className="uppercase text-foreground text-xl font-extrabold ">{word}</span>
                    <Star size={24} fill="white" className="animate-spin-slow" />
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
