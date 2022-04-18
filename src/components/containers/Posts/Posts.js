import { useEffect, useState } from 'react';
import Post from '../../Post/Post'
import axios from 'axios'

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:8080/api/v1/posts')
        .then((response) => {
            //console.log('Get Posts: ', response.data);
            setPosts(response.data);
        }).catch( (err) => {
            console.log(err.message);
        })
    };

    useEffect(() => {
        fetchPosts()
    }, [props.fetchState]);

    const postComponents = posts.map(post => {
        return <Post key={post.id} post={post} />
    } )
    
    return postComponents;
}

export default Posts;