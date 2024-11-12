import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      {/* Motto */}
      <div className="flex justify-center h-[120vh] mt-28">
        <div className="text-center">
          <p className="text-5xl font-bold">
            Turning{" "}
            <span className="bg-gradient-to-r text-foreground from-teal-600 to-teal-800">
              curiosity
            </span>{" "}
            into{" "}
            <span className="bg-gradient-to-r text-transparent from-teal-200 to-teal-400 bg-clip-text">
              clarity.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
