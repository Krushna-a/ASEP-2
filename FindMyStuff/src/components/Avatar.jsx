// src/components/Avatar.js
const Avatar = ({ user, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold`}>
      {user.avatar ? (
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        user.name.charAt(0).toUpperCase()
      )}
    </div>
  );
};

export default Avatar;