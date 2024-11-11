import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      {/* Motto */}
      <div className="flex justify-center h-[120vh] mt-28">
        <div className="text-center">
          <p className="text-5xl font-bold">Turning curiosity into clarity.</p>
        </div>
      </div>
    </div>
  );
}
