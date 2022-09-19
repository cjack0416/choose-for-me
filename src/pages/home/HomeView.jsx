import './index.css'
import Button from '../../components/Button'

export default function HomeView() {
    const btnWidth = '12em', btnHeight = '4em', btnOneText = 'I know my options', btnTwoText = 'find options for me';

    return(
        <div className='main-container'>
            <h1>Choose For Me</h1>
            <div className='pg-routes-grid'>
                <h2 className='pg-grid-item'>set the options that you can’t decide from and we’ll pick for you </h2>
                <Button classname='btn pg-grid-item' text={btnOneText} width={btnWidth} height={btnHeight}/>
                <h2 className='pg-grid-item'>choose a category and location and we’ll find options for you and decide for you</h2>
                <Button classname='btn pg-grid-item' text={btnTwoText} width={btnWidth} height={btnHeight}/>
            </div>
        </div>
    );
}