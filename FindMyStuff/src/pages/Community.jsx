import { useState, useEffect, useRef } from "react";
import CreatePost from "../components/CreatePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeCommit,
  faReply,
  faThumbsUp,
  faBars,
  faTimes,
  faUsers,
  faChevronLeft,
  faPaperPlane,
  faSmile,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeChannel, setActiveChannel] = useState("general");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [showChannels, setShowChannels] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");

  const onlineUsers = [
    {
      id: 1,
      username: "Jane Cooper",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      status: "online",
    },
    {
      id: 2,
      username: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      status: "online",
    },
    {
      id: 3,
      username: "Alice Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      status: "idle",
    },
    {
      id: 4,
      username: "Bob Johnson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      status: "dnd",
    },
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        // In a real app, you would fetch from your API
        const dummyPosts = [
          {
            id: 1,
            user: {
              id: 1,
              name: "Jane Cooper",
              avatar: "https://randomuser.me/api/portraits/women/1.jpg",
              username: "janecooper",
            },
            content:
              "Just finished building this awesome community page with React and Tailwind! What do you think? #react #tailwind #webdev",
            image:
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            likes: 24,
            comments: 8,
            shares: 3,
            time: "2h ago",
            liked: false,
            replies: [
              {
                id: 101,
                user: {
                  id: 2,
                  name: "John Doe",
                  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                  username: "johndoe",
                },
                content: "This looks amazing! Great work on the UI.",
                time: "1h ago",
                likes: 5,
                liked: false,
              },
            ],
          },
          {
            id: 2,
            user: {
              id: 2,
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/men/1.jpg",
              username: "johndoe",
            },
            content:
              "Tailwind CSS is a game changer for my productivity. No more switching between files!",
            likes: 42,
            comments: 12,
            shares: 5,
            time: "4h ago",
            liked: true,
            replies: [],
          },
        ];

        setPosts(dummyPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();

    // Initialize chat messages with dummy data
    const initialChatMessages = {};
    onlineUsers.forEach((user) => {
      initialChatMessages[user.id] = [
        {
          id: 1,
          sender: user.id,
          text: `Hi there! I'm ${user.username}`,
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: 2,
          sender: "me",
          text: "Hello! How are you doing?",
          timestamp: new Date(Date.now() - 3500000).toISOString(),
        },
        {
          id: 3,
          sender: user.id,
          text: "I'm doing great! How about you?",
          timestamp: new Date(Date.now() - 3400000).toISOString(),
        }
      ];
    });
    setChatMessages(initialChatMessages);
  }, []);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleLikeReply = (postId, replyId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            replies: post.replies.map((reply) => {
              if (reply.id === replyId) {
                return {
                  ...reply,
                  liked: !reply.liked,
                  likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                };
              }
              return reply;
            }),
          };
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId, comment) => {
    // In a real app, you would send this to your API
    console.log(`Adding comment to post ${postId}: ${comment}`);
  };

  const handleCreatePost = (newPost) => {
    const post = {
      id: posts.length + 1,
      user: {
        id: 1,
        name: "You",
        avatar: "",
        username: "you",
      },
      content: newPost.content,
      image: newPost.image || null,
      likes: 0,
      comments: 0,
      shares: 0,
      time: "Just now",
      liked: false,
      replies: [],
    };
    setPosts([post, ...posts]);
  };

  const handleReply = (postId) => {
    setReplyingTo(postId);
    setReplyContent("");
  };

  // from server we will get just total number of users registered to our website
  const totalUsers = [1, 2, 3, 4, 5, 6];

  const handleSubmitReply = (postId) => {
    if (replyContent.trim() === "") return;

    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newReply = {
            id: Date.now(),
            user: {
              id: 1,
              name: "You",
              avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
              username: "you",
            },
            content: replyContent,
            time: "Just now",
            likes: 0,
            liked: false,
          };

          return {
            ...post,
            replies: [...post.replies, newReply],
            comments: post.comments + 1,
          };
        }
        return post;
      })
    );

    setReplyingTo(null);
    setReplyContent("");
  };

  const channels = [
    { id: "general", name: "general" },
    { id: "lost-items", name: "lost-items" },
    { id: "found-items", name: "found-items" },
  ];

  // Filter online users to show only unique users (by id)
  const uniqueOnlineUsers = Array.from(
    new Map(onlineUsers.slice(0, 20).map((user) => [user.id, user])).values()
  );

  const showchatfunc = (user) => {
    setSelectedUser(user);
    setShowChat(true);
  };

  return (
    <div className="flex flex-col md:flex-row sm:h-[600px] bg-gray-100 overflow-hidden mt-25">
      {/* Mobile header with menu buttons */}
      <div className="md:hidden flex justify-between items-center p-3 bg-white border-b border-gray-300 shadow-sm">
        <button
          onClick={() => setShowChannels(!showChannels)}
          className="p-2 hover:bg-gray-100 w-1/2 border-r"
        >
          Channels
        </button>
        <button
          onClick={() => setShowMembers(!showMembers)}
          className="p-2 hover:bg-gray-100 w-1/2"
        >
          Members
        </button>
      </div>

      {/* Channel sidebar - mobile overlay */}
      <div
        className={`fixed inset-0 z-50 md:relative md:z-0 md:w-60 bg-gray-100 flex flex-col border-r border-gray-300 transition-transform duration-300 ease-in-out ${
          showChannels ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-300 font-semibold text-lg shadow-sm bg-white flex items-center justify-start">
          <span>FindMyStuff</span>
          <button
            onClick={() => setShowChannels(false)}
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
          </button>
        </div>

        <div className="p-2 overflow-y-auto flex-grow">
          <div className="text-xs font-semibold text-gray-500 px-2 py-1 uppercase flex items-center justify-between">
            <span>Channels</span>
          </div>
          {channels.map((channel) => (
            <div
              key={channel.id}
              onClick={() => {
                setActiveChannel(channel.id);
                setShowChannels(false);
                setShowChat(false);
              }}
              className={`flex items-center px-2 py-1.5 rounded cursor-pointer mb-0.5 group hover:scale-105 transition-all duration-100 ease-in ${
                activeChannel === channel.id
                  ? "bg-gray-300 text-gray-800"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FontAwesomeIcon
                icon={faCodeCommit}
                className="transform rotate-90 group-hover:rotate-180 transition-all duration-200 ease-in text-purple-600"
              />
              <span className="truncate pl-2">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col bg-white overflow-hidden ${
          showChat ? "hidden" : "block"
        }`}
      >
        <div className="p-3 border-b border-gray-300 flex items-center shadow-sm">
          <FontAwesomeIcon
            icon={faCodeCommit}
            className="pr-2 text-purple-600"
          />
          <span className="font-medium">{activeChannel}</span>
          <div className="ml-4 text-sm text-gray-500 hidden md:block">
            Community channel for {activeChannel} discussions
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-4 md:space-y-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-md hover:bg-gray-50 transition-colors duration-100 border border-gray-200 shadow-sm"
              >
                <div className="p-3 md:p-4">
                  <div className="flex items-start mb-3">
                    <img
                      src={post.user.avatar}
                      alt={post.user.username}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap">
                        <span className="font-semibold text-gray-900 mr-2">
                          {post.user.username}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {post.time}
                        </span>
                      </div>
                      <div className="mt-1 text-gray-800 break-words">
                        {post.content}
                      </div>
                      {post.image && (
                        <div className="mt-3">
                          <img
                            src={post.image}
                            alt="Post attachment"
                            className="rounded-md max-h-75 w-auto max-w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-3">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 ${
                          post.liked ? "text-blue-500" : "text-gray-500"
                        } hover:text-blue-600`}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{post.likes}</span>
                      </button>
                      <button
                        onClick={() => handleReply(post.id)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-blue-600"
                      >
                        <FontAwesomeIcon icon={faReply} className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>

                  {/* Replies section */}
                  {post.replies.length > 0 && (
                    <div className="mt-4 pl-4 md:pl-12 border-l-2 border-gray-200">
                      {post.replies.map((reply) => (
                        <div
                          key={reply.id}
                          className="mb-3 bg-gray-50 p-2 md:p-3 rounded-md"
                        >
                          <div className="flex items-start">
                            <img
                              src={reply.user.avatar}
                              alt={reply.user.username}
                              className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center flex-wrap">
                                <span className="font-semibold text-gray-900 text-sm mr-2">
                                  {reply.user.username}
                                </span>
                                <span className="text-gray-400 text-xs">
                                  {reply.time}
                                </span>
                              </div>
                              <div className="mt-1 text-gray-800 text-sm break-words">
                                {reply.content}
                              </div>

                              <div className="mt-2 flex items-center">
                                <button
                                  onClick={() =>
                                    handleLikeReply(post.id, reply.id)
                                  }
                                  className={`flex items-center space-x-1 text-xs ${
                                    reply.liked
                                      ? "text-blue-500"
                                      : "text-gray-500"
                                  } hover:text-blue-600`}
                                >
                                  <FontAwesomeIcon icon={faThumbsUp} />
                                  <span>{reply.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply input */}
                  {replyingTo === post.id && (
                    <div className="mt-3 pl-4 md:pl-12">
                      <div className="flex items-start">
                        <img
                          src="https://randomuser.me/api/portraits/lego/1.jpg"
                          alt="Your avatar"
                          className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
                        />
                        <div className="flex-1">
                          <textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Write a reply..."
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={2}
                          />
                          <div className="flex justify-end mt-2 space-x-2">
                            <button
                              onClick={() => setReplyingTo(null)}
                              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSubmitReply(post.id)}
                              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 disabled:opacity-50"
                              disabled={replyContent.trim() === ""}
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-2 md:p-4 border-t border-gray-300">
          <div className="bg-gray-100 rounded-lg p-2 md:p-3">
            <CreatePost onCreate={handleCreatePost} />
          </div>
        </div>
      </div>

      {/* Chat window */}
      {showChat && selectedUser && (
        <div className=" bg-white md:flex-1">
          <div className="flex flex-col h-full">
            {/* Chat header */}
            <div className="flex items-center p-4 border-b">
              <button
                className="mr-3 text-gray-500 md:hidden"
                onClick={() => setShowChat(false)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="relative">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.username}
                  className="h-10 w-10 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    selectedUser.status === "online"
                      ? "bg-green-500"
                      : selectedUser.status === "idle"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{selectedUser.username}</h3>
                <p className="text-xs text-gray-500 capitalize">
                  {selectedUser.status}
                </p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 max-h-[500px] overflow-y-auto p-4 bg-gray-50 space-y-4 md:space-y-6">
              <div className="space-y-3">
                {chatMessages[selectedUser.id]?.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 break-words ${
                        message.sender === "me"
                          ? "bg-blue-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "me"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat input */}
            <div className="p-3 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!currentMessage.trim()) return;

                  const newMessage = {
                    id: Date.now(),
                    sender: "me",
                    text: currentMessage,
                    timestamp: new Date().toISOString(),
                  };

                  setChatMessages((prev) => ({
                    ...prev,
                    [selectedUser.id]: [
                      ...(prev[selectedUser.id] || []),
                      newMessage,
                    ],
                  }));

                  setCurrentMessage("");

                  // Simulate receiving a reply after a short delay
                  setTimeout(() => {
                    const replyMessage = {
                      id: Date.now() + 1,
                      sender: selectedUser.id,
                      text: `Thanks for your message: "${currentMessage}"`,
                      timestamp: new Date().toISOString(),
                    };

                    setChatMessages((prev) => ({
                      ...prev,
                      [selectedUser.id]: [
                        ...(prev[selectedUser.id] || []),
                        replyMessage,
                      ],
                    }));
                  }, 1000 + Math.random() * 2000);
                }}
                className="flex items-center space-x-2"
              >
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faSmile} />
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 border-none rounded-full py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className={`rounded-full p-2 ${
                    currentMessage.trim()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  disabled={!currentMessage.trim()}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Member list sidebar - mobile overlay for small screens, fixed for large screens */}
      <div
        className={`fixed inset-0 z-50 md:relative md:z-0 md:w-60 bg-gray-50 border-l border-gray-300 transition-transform duration-300 ease-in-out ${
          showMembers ? "translate-x-0" : "translate-x-full md:translate-x-0"
        } md:block`}
      >
        <div className="p-4 border-b border-gray-300 font-medium flex justify-between items-center">
          <span>Channel Members</span>
          <button
            onClick={() => setShowMembers(false)}
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faTimes} className="text-gray-700" />
          </button>
        </div>
        <div className="p-2 overflow-y-auto max-h-[calc(100vh-60px)]">
          <div className="text-xs font-semibold text-gray-500 px-2 py-1 uppercase">
            Online — {onlineUsers.length}
          </div>
          {onlineUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                showchatfunc(user);
                setShowMembers(false);
              }}
            >
              <div className="relative mr-2">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-50 ${
                    user.status === "online"
                      ? "bg-green-500"
                      : user.status === "idle"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></div>
              </div>
              <span className="text-sm text-gray-700">{user.username}</span>
            </div>
          ))}

          <div className="text-xs font-semibold text-gray-500 px-2 py-1 uppercase mt-4">
            Offline — {totalUsers.length - onlineUsers.length}
          </div>
          <div className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer">
            <div className="relative mr-2">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Offline user"
                className="w-8 h-8 rounded-full opacity-70"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-50 bg-gray-500"></div>
            </div>
            <span className="text-sm text-gray-500">Mike Wilson</span>
          </div>
          <div className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200 cursor-pointer">
            <div className="relative mr-2">
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Offline user"
                className="w-8 h-8 rounded-full opacity-70"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-50 bg-gray-500"></div>
            </div>
            <span className="text-sm text-gray-500">Sarah Parker</span>
          </div>
        </div>
      </div>

      {/* Overlay backdrop for mobile when sidebars are open */}
      {(showChannels || showMembers) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => {
            setShowChannels(false);
            setShowMembers(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Community;
