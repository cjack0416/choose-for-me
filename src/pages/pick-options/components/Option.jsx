

export default function Option({ optionsLength, index, subtractOption }) {

    return(
        <div>
            <input placeholder={`option ${index + 1}`} type="text"/>
            { index > 1 &&
            <span>
                <button onClick={event => subtractOption(event, index)}>x</button>
            </span> }
            { index !== optionsLength - 1 &&
            <hr/> }
        </div>
    );
}