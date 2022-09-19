import '../pages/home/index.css'

export default function Button({ classname, text, width, height, onClick }) {
    return(
        <button
            onClick={onClick}
            className={classname}
            style={{ width: width, height: height }}
        >
            {text}
        </button>
    )
}