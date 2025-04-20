"use client";

import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import { useState } from "react";
import { BookCall } from "../book-call";
import Link from "next/link";
import { Brain } from "lucide-react";

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        {/* <Logo />
         */}
        <Link
          href={"/"}
          className="flex items-center gap-2 text-xl font-bold text-primary dark:text-primaryDark"
        >
          <Brain className="h-8 w-8" />
          Aarklabs
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button> */}
          <Button
            className="hidden xs:inline-flex"
            onClick={() => setDialogOpen(true)}
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
          <BookCall open={dialogOpen} onOpenChange={setDialogOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
