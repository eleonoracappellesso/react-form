import posts from "../data/post";
import CardComponent from "./CardComponent"
import PostForm from "./PostForm";

function MainComponent() {
    return (
        <main className="container">
            <section className="d-flex justify-content-center flex-wrap align-items-center">
                {posts.map((post) => (
                    post.published ? <CardComponent key={post.id} post={post} /> : null
                ))}
            </section>
            <PostForm />
        </main>
    )
}

export default MainComponent;