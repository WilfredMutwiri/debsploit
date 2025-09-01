import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MoreAbout from "./components/MoreAbout";
import Header from "./components/Header";
import MoreServices from "./components/MoreServices";
import MoreProjects from "./components/MoreProjects";
import MorePosts from "./components/MorePosts";
import Team from "./components/Team"
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Market from "./components/Market";
import Footer from "@/components/Footer";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Home" element={<Index/>}/>
          <Route path="/MoreAbout" element={<MoreAbout/>}/>
          <Route path="/MoreServices" element={<MoreServices/>}/>
          <Route path="/MoreProjects" element={<MoreProjects/>}/>
          <Route path="/MorePosts" element={<MorePosts/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Market" element={<Market/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
