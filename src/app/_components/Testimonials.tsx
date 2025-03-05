'use client';

import { useEffect, useRef } from 'react';
import { twitterContent } from './TestimonialContent';
import { TestimonialHeader, TestimonialBody } from './TestimonialContent';
import { testimonialContent } from './TestimonialContent';

export default function Testimonials() {
  return (
    <main className="overflow-hidden py-12">
      <TestimonialCarousel />
    </main>
  );
}

function TestimonialCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let lastTimestamp = 0;

    // Auto-scroll animation
    const autoScroll = (timestamp: number) => {
      if (!scrollContainer) return;

      // Control scroll speed
      if (timestamp - lastTimestamp > 20) {
        scrollContainer.scrollLeft += 1;

        // Reset scroll position when reaching the end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }

        lastTimestamp = timestamp;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling after a delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    // Prevent user scrolling
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    // Add event listeners to prevent scrolling
    scrollContainer.addEventListener('wheel', preventScroll, {
      passive: false,
    });
    scrollContainer.addEventListener('touchmove', preventScroll, {
      passive: false,
    });

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('wheel', preventScroll);
      scrollContainer.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  // Group testimonials into columns based on content length
  const columns = [];
  for (let i = 0; i < testimonialContent.length; i++) {
    const testimonial = testimonialContent[i];

    // If content is short, group two testimonials together
    if (
      testimonial.content.length < 200 &&
      i + 1 < testimonialContent.length &&
      testimonialContent[i + 1].content.length < 200
    ) {
      columns.push({
        type: 'double',
        items: [testimonial, testimonialContent[i + 1]],
      });
      i++; // Skip the next item since we've used it
    } else {
      // For longer content, use a single testimonial per column
      columns.push({
        type: 'single',
        items: [testimonial],
      });
    }
  }

  return (
    <div
      ref={scrollContainerRef}
      className="scrollbar-hide flex overflow-x-hidden"
      style={{
        scrollBehavior: 'smooth',
        userSelect: 'none',
        height: '500px', // Fixed height for the carousel
      }}
    >
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="w-[350px] flex-shrink-0">
          {column.type === 'single' ? (
            <TestimonialItem testimonial={column.items[0]} variant="big" />
          ) : (
            <div className="flex h-full flex-col">
              {column.items.map((testimonial) => (
                <TestimonialItem
                  key={testimonial.twitter_username}
                  testimonial={testimonial}
                  variant="small"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

interface TestimonialItemProps {
  testimonial: twitterContent;
  variant: 'big' | 'small';
}

function TestimonialItem({ testimonial, variant }: TestimonialItemProps) {
  return (
    <div
      className={`m-2 overflow-y-auto rounded-xl border border-gray-300 p-4 ${
        variant === 'big' ? 'h-[480px]' : 'flex-1'
      }`}
    >
      <div className="flex flex-col">
        <TestimonialHeader {...testimonial} />
        <TestimonialBody {...testimonial} />
        {/* <TestimonialContent /> */}
      </div>
    </div>
  );
}
