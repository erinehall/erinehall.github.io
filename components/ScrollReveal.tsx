
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
  staggerChildren?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  baseDelay = 0,
  staggerChildren = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const renderedChildren = staggerChildren 
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<any>;
          return React.cloneElement(element, {
            style: { 
              transitionDelay: `${baseDelay + (index * 100)}ms`,
              ...(element.props.style || {})
            },
            className: `${element.props.className || ""} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-[opacity,transform] duration-700 ease-out`
          });
        }
        return child;
      })
    : children;

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${baseDelay}ms` }}
      className={`${className} ${
        !staggerChildren 
          ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10') 
          : ''
      } transition-[opacity,transform] duration-1000 ease-out`}
    >
      {renderedChildren}
    </div>
  );
};

export default ScrollReveal;
