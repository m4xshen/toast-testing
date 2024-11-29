'use client';

import { toast } from 'sonner';

export default function Home() {
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col gap-5">
      <button
        onClick={() => toast(<img src="/vercel.svg" />)}
        className="bg-zinc-900 p-3 border border-zinc-800 rounded-lg text-white"
      >
        Render toast with image
      </button>
    </div>
  );
}
