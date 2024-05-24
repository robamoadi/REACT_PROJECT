import { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pokeball from './pokeball.png'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(result);
            setPosts(result.data.slice(0, 10))
        }
        fetchPosts()
    }, [])

    const postList = posts.length ?
        posts.map(post => (
            <div className="post card" key={post.id}>
                <img src={Pokeball} alt="a pokeball" />
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                </div>
                <div className="card-action">
                    <Link to={`/posts/${post.id}`}>
                        <span>view</span>
                    </Link>
                </div>
            </div>
        ))
        : <div>No Posts To Show</div>



    return (
        <div className="hi">
            <h4>Home!</h4>
            {postList}
        </div>
    )
}

export { Home }