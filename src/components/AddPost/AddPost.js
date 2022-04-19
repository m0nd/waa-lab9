import { useRef } from "react";
import apiService from "../../services/apiService";

const AddPost = (props) => {
    const newPostForm = useRef();

    const addNewPost = (event) => {
        event.preventDefault();
        //console.log('newPostForm.current[title] = ', newPostForm.current['title']);

        const newPost = {
            title: newPostForm.current['title'].value,
            content: newPostForm.current['content'].value,
            authorId: newPostForm.current['authorId'].value
        };

        apiService.savePost(newPost)
            .then((response) => {
                // reset the fields and refresh Posts display
                newPostForm.current.reset();
                props.toggleFetchState();
            }).catch((err) => {
                console.error(err);
            });
    };

    const selectOptions = props.authors.map((author) => {
        return <option key={author.id} value={author.id}>{author.name}</option>
    });

    return (
        <form ref={newPostForm} className="flex justify-center mt-5">
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
                        
                         />
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
                        
                    >
                    </textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newAuthorId">Author</label>
                    <select id="newAuthorId" name="authorId" >
                        {selectOptions}
                    </select>
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addNewPost}>Add</button>
                </div>
            </div>
        </form>
        
    )
}

export default AddPost;