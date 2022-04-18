const Comment = (props) => {
    const {text} = props; 
    return (
        <span className="bg-slate-200">{text}</span>
    )
}

export default Comment;