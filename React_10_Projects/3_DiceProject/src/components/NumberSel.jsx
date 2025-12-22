import styled from 'styled-components';

const NumberSel = ({ selectedNum, setSelectedNum, err, setError }) => {


    const arr = [1, 2, 3, 4, 5, 6];

    console.log(selectedNum)

    const NumberSelectorHandler = (elem) => {
        setSelectedNum(elem)
        setError("")
    }

    return (
        <NumberSelectorContainer>
            <p className='text-red-800 font-bold underline pl-30 '>
                {err}
            </p>
            <div className="flex gap-5 justify-center text-center">
                {arr.map((elem, idx) => {
                    return <Box key={idx} isSelected={elem === selectedNum} onClick={() => {
                        NumberSelectorHandler(elem);
                        console.log(selectedNum)
                    }} className='border-2 border-black p-4 h-13'>{elem}</Box>
                })}

            </div>
        </NumberSelectorContainer>
    )
}

export default NumberSel

const NumberSelectorContainer = styled.div`

`;

const Box = styled.div`
    background-color:${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected) ? "white" : "black"};
`;

