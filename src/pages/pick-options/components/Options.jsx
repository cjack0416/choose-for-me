

export default function Options({ options, subtractOption }) {

    return(
        <>
            {options.map((option, index) => 
                <div key={option.divId}>
                    <input placeholder={`option ${index + 1}`} type="text" key={option.inputId}/>
                    { index > 1 &&
                    <span key={option.spanId}>
                        <button onClick={subtractOption} key={option.buttonId}>x</button>
                    </span> }
                    { index !== options.length - 1 &&
                    <hr key={option.hrId}/> }
                </div>
                )

            }
        </>
    );
}