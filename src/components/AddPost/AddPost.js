import { useState } from "react";
import apiService from "../../services/apiService";

const AddPost = (props) => {
    const emptyPost = {
        title: '',
        content: '',
        authorId: 0
    };

    const [newPost, setNewPost] = useState(emptyPost);

    const updatePost = (event) => {
        const updatedPost = {...newPost, [event.target.name]:event.target.value};
        setNewPost(updatedPost);
    }

    const addNewPost = () => {
        //console.log('Adding new Post: ', newPost);
        apiService.savePost(newPost)
            .then((response) => {
                // reset the fields and refresh Posts display
                setNewPost(emptyPost);
                props.toggleFetchState();
            }).catch((err) => {
                console.error(err);
            });
    };

    const selectOptions =  props.authors.map((author) => {
        return <option key={author.id} value={author.id}>{author.name}</option>
    });

    return (
        <div className="flex justify-center mt-5">
            <div className="max-w-xs text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl">Add New Post</h2>
            <div className="mb-4">
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="newTitle"
                >
                    Title
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="newTitle" 
                    type="text"
                    name="title"
                    placeholder="Title of New Post"
                    onChange={updatePost}
                    value={newPost.title} />
            </div>
            <div className="mb-4">
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="newContent"
                >
                    Content
                </label>
                <textarea 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="newContent"
                    name="content"
                    onChange={updatePost}
                    value={newPost.content}
                >
                </textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newAuthorId">Author</label>
                <select id="newAuthorId" name="authorId" onChange={updatePost}>
                    {selectOptions}
                </select>
            </div>
            {/* <div className="mb-4">
                <label 
                    className="block text-gray-700 text-sm font-bold mb-2" 
                    htmlFor="newAuthor"
                >
                    Author
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="newAuthor"
                    name="author"
                    type="text" 
                    placeholder="Author of New Post"
                    onChange={updatePost}
                    value={newPost.author} />
            </div> */}
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => addNewPost() }>Add</button>
            </div>
        </div>
        </div>
        
    )
}

export default AddPost;