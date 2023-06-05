


export default function DisplayEHower({ taskList }) {
    
    function PlotMarks({ list, boxSize }) {


        // marks will keep a list of the position of the marks
        const marks = [];

        list.forEach(task => {
            if (task.hasEHower) {
                const markX = ((100-task.eHower[0])*boxSize)/100;
                const markY = ((100-task.eHower[1])*boxSize)/100;

                marks.push([markX, markY]);
            }
        })

        
        
        

        return (
            marks.map((value, index) => (
                <svg display="block" style={{transform: `translateY(-${index*100}%)`}} className="e-hower-plot"  height="100%" width="100%">
                    <circle cx={value[0]} cy={value[1]} r="2" stroke="black" stroke-width="2" fill="black" />
                </svg>
            ))
        )
    }

    

    return (
        <>      
        <div className = "clickable e-hower-div" >
            <PlotMarks list={taskList} boxSize={0.2*window.innerWidth}/>
        </div>
        <br />
        </>
    )
}