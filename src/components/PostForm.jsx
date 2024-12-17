import { useState } from "react";
const newPost = {
    title: "",
    published: false,
};

function PostForm() {
    const [post, setPost] = useState(newPost);
    return (
        <section>
            <h4 className="text-uppercase">Inserisci un nuovo post:</h4>
            <form>
                <div>
                    <label htmlFor="Title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={post.title}
                        name="title"
                    />
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="published"
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