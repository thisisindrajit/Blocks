import { FC } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const TopBar: FC = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-between sticky top-4 lg:top-[1.5rem] text-foreground z-50 h-10">
      {/* Logo */}
      <Link href={user ? `/user/dashboard` : `/`}>
        <div className="bg-foreground/20 backdrop-blur-xl px-4 h-10 font-bold flex items-center gap-2 uppercase">
          Blocks
        </div>
      </Link>
      {/* Login button */}
      <div className="flex gap-2 w-fit">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                rootBox: "flex",
                userButtonPopoverCard: "rounded-none",
                userButtonPopoverMain: "rounded-none",
                userButtonAvatarBox: "size-10 rounded-none",
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
