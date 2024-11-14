"use client";

import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("react-layout-masonry"), {
  ssr: false, // This ensures the component is not SSR'd
});

const CMasonryHolder = () => {
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1280: 3 }} gap={12}>
      <div className="min-w-full h-96 border-teal-300 bg-teal-200/10 flex p-3 font-medium text-3xl/10 text-teal-300 border-2 border-transparent hover:border-teal-200 transition-all cursor-pointer">
        Meenakshi amman temple
      </div>
      <div className="min-w-full h-[36rem] border-orange-300 bg-orange-200/10 flex p-3 font-medium text-3xl/10 text-orange-300 border-2 border-transparent hover:border-orange-200 transition-all cursor-pointer">
        Photosynthesis
      </div>
      <div className="min-w-full h-72 border-pink-300 bg-pink-200/10 flex p-3 font-medium text-3xl/10 text-pink-300 border-2 border-transparent hover:border-pink-200 transition-all cursor-pointer">
        Elon Musk
      </div>
      <div className="min-w-full h-[32rem] border-cyan-300 bg-cyan-200/10 flex p-3 font-medium text-3xl/10 text-cyan-300 border-2 border-transparent hover:border-cyan-200 transition-all cursor-pointer">
        Java
      </div>
      <div className="min-w-full h-[28rem] border-red-300 bg-red-200/10 flex p-3 font-medium text-3xl/10 text-red-300 border-2 border-transparent hover:border-red-200 transition-all cursor-pointer">
        Deloitte
      </div>
      <div className="min-w-full h-[28rem] border-purple-300 bg-purple-200/10 flex p-3 font-medium text-3xl/10 text-purple-300 border-2 border-transparent hover:border-purple-200 transition-all cursor-pointer">
        Ceramic
      </div>
    </Masonry>
  );
};

export default CMasonryHolder;
