

export default function Options({ options, setOption }) {
    return(
        <>
            {options.map((option, index) => (
                <input placeholder={`option ${index}`} value={option}/>
            ))}
        </>
    );
}