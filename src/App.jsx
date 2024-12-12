import { Banner } from "./components/Banner/banner";
import { Brends } from "./components/Brends/brends";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { MainCatalog } from "./components/MainCatalog/mainCatalog";
import { MainSlider } from "./components/MainSlider/mainSlider";


export const App = () => (
  <>
    <Header/>
    <Banner/>
    <MainCatalog />
    <MainSlider />
    <Brends />
    <Footer/>
  </>
)


