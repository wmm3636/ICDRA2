import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GeneralInfo from "./pages/GeneralInfo";
import Registration from "./pages/Registration";
import Programme from "./pages/Programme";
import Presentations from "./pages/Presentations";
import Venue from "./pages/Venue";
import Accommodation from "./pages/Accommodation";
import Travel from "./pages/Travel";
import Visa from "./pages/Visa";
import Tours from "./pages/Tours";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Portal from "./pages/Portal";
import Dashboard from "./pages/portal/Dashboard";
import Users from "./pages/portal/Users";
import Enquiries from "./pages/portal/Enquiries";
import PortalRegistration from "./pages/portal/PortalRegistration";
import Account from "./pages/portal/Account";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/general-info" element={<GeneralInfo />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/programme" element={<Programme />} />
              <Route path="/presentations" element={<Presentations />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/portal" element={<Portal />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="enquiries" element={<Enquiries />} />
                <Route path="registrations" element={<PortalRegistration />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;