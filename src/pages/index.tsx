import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Dashboard from "@/pages/dashboard";
import scss from "./Home.module.scss";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
