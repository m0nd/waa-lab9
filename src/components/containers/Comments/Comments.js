import Comment from "../../Comment/Comment";

const Comments = (props) => {
    const {comments} = props;
    
    console.log('Rendering Comments...');
    
    const commentComponents = comments.map(comment => {
        return (<li key={comment.id}><Comment key={comment.id} text={comment.name} /></li>)
    });

    const output = (
        <>
            <h3 className="text-large font-bold">[Comments]</h3>
            <div className="flex justify-center mb-3">
                <ul className="text-left">
                    {commentComponents}
                </ul>
            </div>
        </>
        );
    
    return output;
}

export default Comments;