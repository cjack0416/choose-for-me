import HomeView from "./pages/home/HomeView";
import { ReactComponent as BgShape} from './assets/backgroundWaveShape.svg';

export default function App() {
  return (
    <>
      <BgShape className='bg-shape'/>
      <HomeView/>
    </>
  );
}
