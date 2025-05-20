// src/components/CreatePost.js
import { useState } from 'react';
import { FiImage, FiSmile, FiMapPin, FiPaperclip, FiGift } from 'react-icons/fi';
import Avatar from './Avatar';

const CreatePost = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || image) {
      onCreate({ content, image });
      setContent('');
      setImage(null);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
      <div className="flex items-start space-x-3">
        <Avatar user={{ id: 1, name: 'You' }} size="md" />
        
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a message..."
            className="w-full bg-gray-100 border-none rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="2"
          />
          
          {image && (
            <div className="mt-1 relative">
              <img 
                src={URL.createObjectURL(image)} 
                alt="Preview" 
                className="rounded-lg max-h-40 w-auto object-cover border border-gray-200"
              />
              <button 
                type="button"
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 h-10 w-10 text-3xl bg-gray-800 bg-opacity-75 text-white rounded-full p-1 hover:bg-opacity-100"
              >
                ×
              </button>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-0 pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <label className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors">
                <FiImage size={20} />
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
            
            <button 
              type="submit"
              disabled={!content.trim() && !image}
              className={`px-4 py-2 rounded-md font-medium ${(!content.trim() && !image) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;