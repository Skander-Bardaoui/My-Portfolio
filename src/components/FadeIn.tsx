import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ElementType } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export function FadeIn({
  as: Tag = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  className,
  ...rest
}: FadeInProps) {
  const MotionTag = motion(Tag as any);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
