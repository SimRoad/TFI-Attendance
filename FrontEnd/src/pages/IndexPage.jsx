import DrawGraph from "../components/DrawGraph";
import PendingList from "../components/PendingModal";
import {Card,Button} from 'flowbite-react'

const IndexPage = ()=>{
    return(
        <>
            <GraphHours />
            <Sessions/>
            <InfoCard />
            <TotalHours />
        </>
    )
}

const GraphHours = () => {
    return(
        <Card className="h-2/4 w-2/4 absolute top-[5%] left-[10%]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                Graph of Total Hours
            </h5>
                <DrawGraph/>
        </Card>
    )
}

const InfoCard = ()=>{
    return(
        <Card className="max-w-sm absolute bottom-[25%] right-[25%]">
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
        <Card className="max-w-md absolute top-[5%] right-[24%]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pending Sessions : 0
            </h5>
            <PendingList />
        </Card>
    )
}

const TotalHours = () => {
    return(
        <Card className="max-w-md absolute bottom-[30%] left-[10%]">
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