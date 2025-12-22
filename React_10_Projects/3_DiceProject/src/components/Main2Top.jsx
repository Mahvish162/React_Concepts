import NumberSel from './NumberSel'
import TotalScore from './TotalScore'

const Main2Top = ({selectedNum,setSelectedNum,score,err,setError}) => {

    return (
        <div className='w-full h-2.5'>
            <div className='flex justify-evenly gap-180 text-center'>

               <TotalScore score={score}/>

                <div className="flex flex-col gap-5  justify-center text-center">
                   
                        <NumberSel selectedNum={selectedNum} setSelectedNum={setSelectedNum} err={err} setError={setError}/>
                
                    <div className="text-end">
                        <h1 className='font-bold'>Select Number</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main2Top