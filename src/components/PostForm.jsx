import { useState } from "react";
const newPost = {
    title: "",
    published: false,
};

function PostForm() {
    const [post, setPost] = useState(newPost);
    const [postList, setPostList] = useState([]);

    function handleSubmit(element) {
        element.preventDefault();
        setPostList([...postList, post]);
        setPost(newPost);
    }

    function handleInput(element) {
        const value =
            element.target.type === "checkbox" ? element.target.checked : element.target.value;

        setPost({ ...post, [element.target.name]: value });
    }

    return (
        <section>
            <h4 className="text-uppercase">Inserisci un nuovo post:</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={post.title}
                        name="title"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="published"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="publishedPost">
                        Post pubblico
                    </label>
                </div>
                <button type="submit" className="btn btn-success my-3">
                    Crea post
                </button>
            </form>
        </section>
    )
}

export default PostForm;