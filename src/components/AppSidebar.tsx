
import { Home, Handshake, Ear, Volume2, Book, Users, Calendar, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import HandWave from "@/assets/HandWave";

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useSidebar();
  
  const menuItems = [
    {
      title: "Home",
      icon: Home,
      path: "/"
    },
    {
      title: "Visualization",
      icon: Handshake,
      path: "/visualization"
    },
    {
      title: "Deaf Accessibility",
      icon: Ear,
      path: "/deaf-accessibility"
    },
    {
      title: "Speech Output",
      icon: Volume2,
      path: "/speech-output"
    },
    {
      title: "Learning Hub",
      icon: Book,
      path: "/learning"
    },
    {
      title: "Community",
      icon: Users,
      path: "/community"
    },
    {
      title: "Resources & Events",
      icon: Calendar,
      path: "/resources"
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-center p-4">
        <div className="flex items-center gap-2">
          <HandWave className="w-8 h-8 text-signspeak-blue animate-wave" />
          <h1 className={`text-xl font-bold ${state === "collapsed" ? "hidden" : ""}`}>SignSpeak</h1>
        </div>
        <p className={`text-xs text-muted-foreground mt-2 text-center ${state === "collapsed" ? "hidden" : ""}`}>
          Breaking barriers through AI
        </p>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={location.pathname === item.path}
                    tooltip={item.title}
                    onClick={() => navigate(item.path)}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarSeparator />
        <div className="p-2">
          <SidebarMenuButton onClick={() => navigate("/settings")}>
            <Settings className="mr-2" />
            <span>Settings</span>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
