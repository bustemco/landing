'use client';

import { Button } from '@/components/ui/button';
import { Globe, Target, PenLine, CalendarDays } from 'lucide-react';
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
    <main className="pt-12">
      <div className="flex flex-col items-center justify-center gap-8">
        <GlossyDescription />
        <HeroTitle currentIndex={currentIndex} />
        <div className="flex max-w-[600px] items-center justify-center">
          <HeroButton />
        </div>
        <div className="flex justify-between gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </main>
  );
}

function HeroTitle({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="flex flex-col text-center text-3xl font-extrabold">
      <div className="flex">
        <h1>We Find And Takedown</h1>
        <KeywordRotator currentIndex={currentIndex} keywords={keywords} />
      </div>
      <h1>With One Click</h1>
    </div>
  );
}

function GlossyDescription() {
  return (
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
  );
}

function HeroButton() {
  return (
    <Button
      className="flex w-[600px] flex-row items-center justify-center gap-2 rounded-md bg-gradient-to-b from-[#2A315D] to-[#111A4A] p-6 shadow-[0px_0px_0px_1px_rgba(23,23,51,0.9),0px_1px_0px_rgba(23,23,51,0.9),0px_10px_6px_rgba(23,23,51,0.04),0px_1px_2px_rgba(23,23,51,0.06),0px_2px_6px_rgba(23,23,51,0.05),0px_12px_12px_-6px_rgba(23,23,51,0.05),inset_0px_1px_0px_rgba(255,255,255,0.2),inset_0px_0px_0px_1px_rgba(255,255,255,0.2)]"
      variant="default"
    >
      <CalendarDays className="h-5 w-5 text-white" />
      <span className="font-inter text-base font-semibold leading-5 text-white">
        Book a 30-Min Call
      </span>
    </Button>
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
    <div className="flex flex-row items-center gap-3">
      <div className="flex items-center rounded-[20.5px] bg-[#F0F0FA] p-[3px]">
        <div className="flex items-center justify-center gap-1 rounded-full border border-[#DCDCF0] bg-[#E6EAF5] p-1">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="bg-gradient-to-b from-[#2A315D] to-[#111A4A] bg-clip-text text-[20px] font-bold leading-7 text-transparent">
          {title}
        </h2>
        <p className="text-sm leading-5 text-[#585866]">{description}</p>
      </div>
    </div>
  );
}
