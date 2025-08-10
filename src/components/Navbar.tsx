import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    // { name: "General Information", path: "/general-info" },
    // { name: "Registration", path: "/registration" },
    { name: "Programme", path: "/programme" },
    { name: "Presentations", path: "/presentations" },
    { name: "Venue", path: "/venue" },
    // { name: "Accommodation", path: "/accommodation" },
    { name: "Travel", path: "/travel" },
    { name: "Visa", path: "/visa" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-center py-2">
            <div className="flex items-center space-x-4 mb-1">
              <img
                src="/lovable-uploads/icdra19th_logo.png"
                alt="ICDRA 2026 Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-center">
              <div className="text-emerald-700 font-bold text-sm leading-tight">ICDRA 2026 Saudi Arabia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                  ? "bg-emerald-700 text-white shadow-lg"
                  : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-emerald-200 hover:bg-emerald-50">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="pb-4 border-b border-gray-200">
                  <div className="text-emerald-700 font-bold text-lg">ICDRA 2026</div>
                  <div className="text-gray-600 text-sm">Saudi Arabia</div>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(item.path)
                      ? "bg-emerald-700 text-white shadow-lg"
                      : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;