import HomeView from "./pages/home/HomeView";
import PickOptionsView from "./pages/pick-options/PickOptionsView"
import { ReactComponent as BgShape} from './assets/backgroundWaveShape.svg';

export default function App() {
  return (
    <>
      <BgShape className='bg-shape'/>
      {/* <HomeView/> */}
      <PickOptionsView/>
    </>
  );
}
