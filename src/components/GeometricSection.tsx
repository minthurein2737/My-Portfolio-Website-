import React, { useState, useEffect, useRef } from 'react';

interface GeometricSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  showGeometricGuides?: boolean;
}

export const GeometricSection: React.FC<GeometricSectionProps> = ({
  id,
  className = '',
  children,
  showGeometricGuides = true,
}) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {/* Animated Subtle Geometric Boundary Guide Line */}
      {showGeometricGuides && (
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden pointer-events-none">
          <div
            className={`w-full h-full bg-gradient-to-r from-transparent via-[#C8FF00]/45 to-transparent transition-transform duration-1000 ease-out origin-left motion-reduce:transition-none ${
              isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          />
        </div>
      )}

      {/* Cybernetic Accent Corner Ticks on In-View */}
      {showGeometricGuides && (
        <>
          <div
            className={`absolute top-0 left-4 w-2 h-2 border-t border-l border-[#C8FF00] pointer-events-none hidden md:block transition-all duration-500 delay-300 ${
              isInView ? 'opacity-70 scale-100' : 'opacity-0 scale-75'
            }`}
          />
          <div
            className={`absolute top-0 right-4 w-2 h-2 border-t border-r border-[#C8FF00] pointer-events-none hidden md:block transition-all duration-500 delay-300 ${
              isInView ? 'opacity-70 scale-100' : 'opacity-0 scale-75'
            }`}
          />
        </>
      )}

      {children}
    </section>
  );
};
