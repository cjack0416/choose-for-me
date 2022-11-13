import Option from './Option'

export default function OptionsList({ options, subtractOption, indexChoice }) {
    let inputClassName = (index) => {
        return indexChoice === index ? "input-selected-color" : "input-non-selected-color"
    }

    return(
        <>
            {options.map((option, index) => 
                (
                <Option optionsLength={options.length} 
                        index={index} 
                        subtractOption={subtractOption}
                        inputClassName = {inputClassName(index)}
                        key={option} />
                ))
            }
        </>
    );
}