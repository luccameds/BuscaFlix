import Image from 'next/image';
import { Header, Hero } from '@/components';

export default function Home() {
  return (
    <div className="bg-[#121829] px-40 text-white">
      <Header />
      <div className="gradient-02" />
      <div className="gradient-03" />
      <Hero />
    </div>
  );
}
