import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import { ModeThemeProps } from "../models/ModeThemeProps.interface";

const Home = ({ mode, setMode }: ModeThemeProps) => {
  return (
    <>
      <Hero mode={mode} setMode={setMode}></Hero>
      <Popular />
      <Blog />
    </>
  );
};

export default Home;
