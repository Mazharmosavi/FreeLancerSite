import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import AppLayout from "./ui/AppLayout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLAyout from "./features/owner/OwnerLAyout";
import Dashboard from "./features/owner/Dashboard";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./features/freelancer/FreelancerDashboard";
import Proposals from "./features/freelancer/Proposals";
import SubmitedProjects from "./pages/SubmitedProjects";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./features/admin/AdminDashboard";
import Users from "./pages/Users";
import AboutUs from "./ui/About-Us";
const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="About-Us" element={<AboutUs/>}/>
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route  path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoutes>
                <OwnerLAyout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path={`projects/:id`} element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoutes>
                <FreelancerLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmitedProjects />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoutes>
                <AdminLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to={"dashboard"} replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="proposals" element={<Proposals/>}/>
          </Route>
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
