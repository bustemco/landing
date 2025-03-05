'use client';

import { Globe, Target, PenLine } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: <Globe />,
    title: 'Scan the Internet',
    description: 'Scan 4+ billion sites in seconds',
  },
  {
    icon: <Target />,
    title: 'Run Similarity Reports',
    description: "Identify who's copying your work",
  },
  {
    icon: <PenLine />,
    title: 'Take Them Down',
    description: 'DMCA notices, send Cease & Desist letters...',
  },
];

const keywords = ['Infringers', 'Copycats', 'Imitators'];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div
          className="inline-flex rounded-xl px-3 py-1"
          style={{
            background:
              'linear-gradient(180deg, rgba(230, 233, 245, 0) 0%, rgba(230, 233, 245, 0.4) 100%), #E6E9F5',
            boxShadow:
              '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px rgba(42, 51, 70, 0.05), 0px 2px 3px rgba(42, 51, 70, 0.03), 0px 2px 8px rgba(34, 42, 53, 0.04), 0px 12px 12px -6px rgba(42, 51, 70, 0.03)',
          }}
        >
          <p className="font-inter text-base font-semibold text-[#333E5A]">
            ✨ Instant Scanning, Detection & DMCA Takedown Service
          </p>
        </div>
        <div className="flex flex-col text-center text-3xl font-extrabold">
          <div className="flex">
            <h1>We Find And Takedown</h1>
            <KeywordRotator currentIndex={currentIndex} keywords={keywords} />
          </div>
          <h1>With One Click</h1>
        </div>
      </div>
      <div className=""></div>
      <div className="flex justify-between gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </main>
  );
}

function KeywordRotator({
  currentIndex,
  keywords,
}: {
  currentIndex: number;
  keywords: string[];
}) {
  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-xl font-bold"
        >
          <h1 className="text-xl font-bold">{keywords[currentIndex]}</h1>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
