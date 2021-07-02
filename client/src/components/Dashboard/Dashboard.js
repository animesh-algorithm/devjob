import Projects from "../Projects/Projects"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

const Dashboard = ({ currentProjectId, setCurrentProjectId }) => {
    return (
        <div className="container">
            <h1 className='display-2'>DEVJOB</h1>
            <Button component={Link} to='/projects/create' variant='contained' className='card'>Create New Project</Button>
            <br /><br />
            <Projects currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId} />
        </div>
    )
}

export default Dashboard
