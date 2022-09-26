

export default function Options({ options, setOption, removeOption }) {

    function handleChangeOption(newOption, i) {
        setOption(options.map((option, index) => (
            option[index] === i ? option[index] = newOption : option[index]
        )))
    }

    return(
        <>
            {options.map((option, index) => (
                <div>
                    <input placeholder={`option ${index + 1}`} value={option} onChange={(e) => handleChangeOption(e.target.value, index)}/>
                    { index > 1 &&
                    <span>
                        <button onClick={removeOption}>x</button>
                    </span> }
                    { index !== options.length - 1 &&
                    <hr/>
                    }
                </div>
            ))}
        </>
    );
}