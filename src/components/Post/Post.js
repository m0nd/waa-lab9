import { useContext } from 'react';
import { SelectedIdContext } from '../../store/SelectedIdContext';
import './Post.css'

const Post = (props) => {
    const { post } = props;
    const setSelectedPostId = useContext(SelectedIdContext);

    return (
        <div className='post' onClick={() => setSelectedPostId(post.id)}>
            <p><strong>ID</strong>: {post.id}</p>
            <p><strong>Title</strong>: {post.title}</p>
            <p><strong>Author</strong>: {post.author.name} </p>
            <p><strong>Content</strong>: <br /> {post.content}</p>
        </div>
    )
}

export default Post;