import { useState } from "react";
import allPosts from "../data/post";
import CardComponent from "./CardComponent"
import PostForm from "./PostForm";

function MainComponent() {
    // inizializzo lo stato posts con i post esistenti
    const [posts, setPosts] = useState(allPosts);

    // funzione che accetta il nuovo post, crea una copia dell'array di post esistenti e aggiunge il nuovo
    function handleNewPost(newPost) {
        setPosts([...posts, newPost])
    }
    // struttura del main component
    return (
        <main className="container">
            <section className="d-flex justify-content-center flex-wrap align-items-center">
                {posts.map((post) => (
                    post.published ? <CardComponent key={post.id} post={post} /> : null
                ))}
            </section>
            {/*includo il form e gli passo la funzione per inviare il nuovo post al component padre, il main */}
            <PostForm addPost={handleNewPost} />
        </main>
    )
}

export default MainComponent;