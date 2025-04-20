import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog"; // ✅ Add this line

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* ✅ Correct usage of DialogTitle wrapped in VisuallyHidden */}
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
        </VisuallyHidden>

        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          {/* <Button variant="outline" className="w-full sm:hidden">
            Sign In
          </Button> */}
          <Button className="w-full xs:hidden">Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
