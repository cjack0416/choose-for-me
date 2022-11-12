import Option from './Option'

export default function OptionsList({ options, subtractOption }) {
    
    return(
        <>
            {options.map((option, index) => 
                <Option optionsLength={options.length} 
                        index={index} 
                        subtractOption={subtractOption} 
                        key={option} />
                )
            }
        </>
    );
}