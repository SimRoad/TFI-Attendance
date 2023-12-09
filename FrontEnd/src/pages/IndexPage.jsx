import DrawGraph from "../components/DrawGraph";
import PendingList from "../components/PendingModal";
import {Card,Button} from 'flowbite-react'

const IndexPage = ()=>{
    return(
        <>
        <div className="grid relative grid-cols-2 grid-flow-row-dense gap-1">
            <GraphHours />
            <Sessions/>
            <InfoCard />
            <TotalHours />
        </div>
        </>
    )
}

const GraphHours = () => {
    return(
        <Card className="h-[40vh] w-max absolute bottom-[52%] right-[52%]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                Graph of Total Hours
            </h5>
                <DrawGraph/>
        </Card>
    )
}

const InfoCard = ()=>{
    return(
        <Card className="h-max w-max absolute top-[52%] right-[52%] bg-red-100">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Absents : 12
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Total Lates : 10
        </h5>
        <Button>
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </Button>
        </Card>
    )
}

const Sessions = () => {
    return(
        <Card className="h-max absolute bottom-[52%] left-[52%] w-max bg-green-50">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pending Sessions : 0
            </h5>
            <PendingList />
        </Card>
    )
}

const TotalHours = () => {
    return(
        <Card className="h-min absolute top-[52%] left-[52%] w-max">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Total Hours : 2560
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Overtime Hours : 12
            </h5>
        </Card>
    )
}

export default IndexPage