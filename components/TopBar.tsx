import { FC } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const TopBar: FC = () => {
  return (
    <div className="flex items-center justify-between sticky top-4 text-foreground z-50">
      {/* Logo */}
      <div className="bg-white/15 backdrop-blur-xl h-10 px-4 font-bold flex items-center gap-2 uppercase">
        Blocks
      </div>
      {/* Login button */}
      <div>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "size-8 rounded-none",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton
            forceRedirectUrl="/user/dashboard"
            signUpForceRedirectUrl="/user/dashboard"
            mode="modal"
          >
            <Button size="lg">Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default TopBar;
