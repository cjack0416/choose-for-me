

export default function Options({ optionCount, subtractOptionCount }) {

    return(
        <>
            {Array.from({ length: optionCount}).map((option, index) => 
                <div>
                    <input placeholder={`option ${index + 1}`} type="text"/>
                    { index > 1 &&
                    <span>
                        <button onClick={subtractOptionCount}>x</button>
                    </span> }
                    { index !== optionCount - 1 &&
                    <hr/> }
                </div>
                )

            }
        </>
    );
}