import Hero from "../components/Hero/Hero";
import { ModeThemeProps } from "../models/ModeThemeProps";

const Home = ({ mode, setMode }: ModeThemeProps) => {
  return (
    <>
      <Hero mode={mode} setMode={setMode}></Hero>
    </>
  );
};

export default Home;
