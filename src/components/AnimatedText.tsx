import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.08], [0.2, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'end 0.30'],
  });

  return (
    <p ref={ref} className={className} style={style}>
      {text.split('').map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={text.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
