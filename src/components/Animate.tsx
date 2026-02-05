import React, { forwardRef, type HTMLAttributes } from 'react';
import { useInView, useStaggeredInView } from '../hooks/useInView';
import './Animate.css';

export type AnimationType = 
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'scale-up'
  | 'blur'
  | 'blur-up'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'flip-up'
  | 'clip-up'
  | 'clip-left'
  | 'rotate-in'
  | 'bounce-in';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  bidirectional?: boolean;
  easing?: string;
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      children,
      animation = 'fade-up',
      delay = 0,
      duration = 0.8,
      threshold = 0.15,
      triggerOnce = false,
      bidirectional = true,
      easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
      className = '',
      style,
      ...props
    },
    forwardedRef
  ) => {
    const { ref, isInView } = useInView({
      threshold,
      triggerOnce,
      bidirectional,
    });

    const combinedRef = (node: HTMLElement | null) => {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    const animationStyle: React.CSSProperties = {
      '--animation-delay': `${delay}s`,
      '--animation-duration': `${duration}s`,
      '--animation-easing': easing,
      ...style,
    } as React.CSSProperties;

    return (
      <div
        ref={combinedRef}
        className={`animate animate--${animation} ${isInView ? 'animate--visible' : ''} ${className}`}
        style={animationStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';

// Staggered list animation component
interface AnimatedListProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  bidirectional?: boolean;
  easing?: string;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({
  children,
  animation = 'fade-up',
  staggerDelay = 0.1,
  baseDelay = 0,
  duration = 0.7,
  threshold = 0.1,
  triggerOnce = false,
  bidirectional = true,
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  className = '',
  style,
  ...props
}) => {
  const { ref, isInView, getDelay } = useStaggeredInView(
    React.Children.count(children),
    { threshold, triggerOnce, bidirectional }
  );

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={style}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`animate animate--${animation} ${isInView ? 'animate--visible' : ''}`}
          style={{
            '--animation-delay': `${baseDelay + getDelay(index)}s`,
            '--animation-duration': `${duration}s`,
            '--animation-easing': easing,
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Text reveal animation (word by word or letter by letter)
interface AnimatedTextProps extends HTMLAttributes<HTMLElement> {
  text: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  splitBy?: 'word' | 'letter';
  animation?: 'fade-up' | 'fade' | 'blur-up';
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  bidirectional?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  as: Component = 'p',
  splitBy = 'word',
  animation = 'fade-up',
  staggerDelay = 0.03,
  duration = 0.5,
  threshold = 0.5,
  triggerOnce = false,
  bidirectional = true,
  className = '',
  ...props
}) => {
  const { ref, isInView } = useInView({
    threshold,
    triggerOnce,
    bidirectional,
  });

  const parts = splitBy === 'word' ? text.split(' ') : text.split('');
  const separator = splitBy === 'word' ? '\u00A0' : '';

  const Element = Component as React.ElementType;

  return (
    <Element 
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={`animated-text ${className}`} 
      {...props}
    >
      {parts.map((part, index) => (
        <span
          key={index}
          className={`animated-text__part animate animate--${animation} ${isInView ? 'animate--visible' : ''}`}
          style={{
            '--animation-delay': `${index * staggerDelay}s`,
            '--animation-duration': `${duration}s`,
          } as React.CSSProperties}
        >
          {part}{index < parts.length - 1 ? separator : ''}
        </span>
      ))}
    </Element>
  );
};

// Parallax scroll component
interface ParallaxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  speed?: number; // -1 to 1, negative = opposite direction
  direction?: 'vertical' | 'horizontal';
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.3,
  direction = 'vertical',
  className = '',
  style,
  ...props
}) => {
  const { ref, isInView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`parallax ${isInView ? 'parallax--active' : ''} ${className}`}
      style={{
        '--parallax-speed': speed,
        '--parallax-direction': direction,
        ...style,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
