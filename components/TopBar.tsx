import { Button } from "./ui/button";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between sticky top-4 text-foreground">
      {/* Logo */}
      <div className="bg-white/15 backdrop-blur-xl h-10 px-4 font-bold flex items-center gap-2 uppercase">
        Blocks
      </div>
      {/* Login button */}
      <Button size="lg">
        Login
      </Button>
    </div>
  );
}
