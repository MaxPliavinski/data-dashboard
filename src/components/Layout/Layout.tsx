import { useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SidebarMenu from "@/components/SidebarMenu";
import scss from "./Layout.module.scss";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={scss.wrapper}>
        <Header ColorModeContext={props.ColorModeContext} />
        <main
          className={scss.layout}
          style={{ padding: session ? "0 24px 0 80px" : 0 }}
        >
          {session && <SidebarMenu />}
          <div className={scss["main-content"]}>{props.children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
