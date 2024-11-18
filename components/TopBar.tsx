import { FC } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const TopBar: FC = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between sticky top-4 text-foreground z-50">
      {/* Logo */}
      <Link href={user ? `/user/dashboard` : `/`}>
        <div className="bg-white/15 backdrop-blur-xl h-10 px-4 font-bold flex items-center gap-2 uppercase">
          Blocks
        </div>
      </Link>
      {/* Login button */}
      <div>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                rootBox: "flex",
                userButtonAvatarBox: "rounded-none size-10",
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
