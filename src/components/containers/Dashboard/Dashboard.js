import { useState } from "react";
import AddPost from "../../AddPost/AddPost";
import PostDetails from "../../PostDetails/PostDetails";
import Posts from '../Posts/Posts'
import './Dashboard.css'

const Dashboard = () => {
    const [selectedPostId, setSelectedPostId] = useState(0);

    const authors = [
        {id: 100, name: 'Shannon'},
        {id: 101, name: 'David'},
        {id: 102, name: 'Kyle'},
    ];

    const [fetchState, setFetchState] = useState(true);

    const toggleFetchState = () => {
        setFetchState(!fetchState);
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="dash">
                <Posts setSelectedPostId={setSelectedPostId} fetchState={fetchState} />
            </div>

            <PostDetails selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} toggleFetchState={toggleFetchState} />
            <AddPost authors={authors} toggleFetchState={toggleFetchState} />
        </div>
    );
}

export default Dashboard;