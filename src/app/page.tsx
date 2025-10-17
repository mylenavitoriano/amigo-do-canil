import { AboutUsHome } from "../components/common/about-us";
import { BannerHome } from "../components/common/banner";
import { Contribute } from "../components/common/contribute";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { ListAnimals } from "../components/common/list-animals";
import { ListHowToHelp } from "../components/common/list-how-to-help";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <AboutUsHome />
      <ListHowToHelp />
      <ListAnimals />
      <Contribute />
      <Footer />
    </>
  );
}
