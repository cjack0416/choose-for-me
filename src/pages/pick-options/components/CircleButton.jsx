

export default function CircleButton({ classname, symbol, onclick }) {
    return(
        <button className={`circle-btn ${classname}`} onClick={onclick}>{ symbol }</button>
    );
}