
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Visualization from "./pages/Visualization";
import DeafAccessibility from "./pages/DeafAccessibility";
import SpeechOutput from "./pages/SpeechOutput";
import LearningHub from "./pages/LearningHub";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-background">
            <AppSidebar />
            <main className="flex-1 p-4 md:p-6">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/visualization" element={<Visualization />} />
                <Route path="/deaf-accessibility" element={<DeafAccessibility />} />
                <Route path="/speech-output" element={<SpeechOutput />} />
                <Route path="/learning" element={<LearningHub />} />
                <Route path="/community" element={<Community />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
