import Card from "@/components/common/Card";
import { useState } from "react";
import { CardProps } from "@/interfaces";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {

     const [isModalOpen, setIsModalOpen] = useState(false); 

     const [posts, setPosts] = useState([
        { title: "Project Autonomy", content: "I feel very lead to master project autonomy and everything that follows" },
        { title: "Next.js", content: "A powerful react framework for building production ready application" },
        { title: "TypeScript", content: "For type-safety across the applications" }
     ]);

       const handleAddPost = (newPost: CardProps) => {
       setPosts((prev) => [...prev, newPost]);
  };


    return (
        <>
      <Header />
        <div className="flex flex-col items-center gap-6 min-h-screen justify-center bg-green-100 p-6">
            <h1 className="text-4xl font-bold text-green-700 mb-4">This is the Home Page</h1>

            <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded mb-6"
            >
            Add New Post
            </button>

            {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
            ))}

            <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
        </div>
    </>
    )
}

export default HomePage;