

export default function CircleButton({ classname, symbol, onclick }) {
    return(
        <button className={classname} onClick={onclick}>{ symbol }</button>
    );
}