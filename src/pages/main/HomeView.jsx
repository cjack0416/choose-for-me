import './index.css'

export default function HomeView() {
    return(
        <div className='main-container'>
            <h1>Choose For Me</h1>
            <div className='pg-routes-grid'>
                <h2 className='pg-grid-item'>set the options that you can’t decide from and we’ll pick for you </h2>
                <btn className='pg-grid-item'>test</btn>
                <h2 className='pg-grid-item'>choose a category and location and we’ll find options for you and decide for you</h2>
                <btn className='pg-grid-item'>test</btn>
            </div>
        </div>
    );
}