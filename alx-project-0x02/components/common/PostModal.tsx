import { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onSubmit}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
        onClose();
    };

    if (!isOpen) return null;

     return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                  <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="Title"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
                  <textarea id="content" value={content} onChange={e => setContent(e.target.value)} rows={5} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Content"/>
                </div>
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none rounded">Cancel</button>
                    <button type="submit"  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add Post</button>
                </div>
            </form>
         </div>
        </div>
     )
}

export default PostModal;