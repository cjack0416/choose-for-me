import './index.css'

export default function Option({ optionsLength, index, subtractOption }) {

    return(
        <>
            <ul className='option-flex'>
                <input placeholder={`option ${index + 1}`} type="text"/>
                { index > 1 &&
                <span>
                    <button className="delete-btn" onClick={event => subtractOption(event, index)}>&#10005;</button>
                </span> }
            </ul>
            <>
                { index !== optionsLength - 1 &&
                <hr/> }
            </>
        </>
    );
}