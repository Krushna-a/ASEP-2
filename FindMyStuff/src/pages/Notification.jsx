import React from "react";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      sender: "Alice",
      receiver: "John",
      message: "Hey! I got your laptop. If you want it please DM me",
      itemUrl:
        "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_3_1_1.png",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: 2,
      sender: "John",
      receiver: "Alice",
      message: "Hey! I got your item. If you want it please DM me",
      itemUrl:
        "https://suprememobiles.in/cdn/shop/files/1_ac1680ee-e0d1-4e34-b9aa-9f5c6e77e264.png?v=1701095306",
      timestamp: new Date(Date.now() - 3500000).toISOString(),
    },
    {
      id: 3,
      sender: "Krushna",
      receiver: "Swarup",
      message:
        "Hey! I got your lost keys. If you want it please DM me I will share you details",
      itemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZP0HmX2XVohZd6iva3uyYwH0Hz9Uk0IS3AA&s",
      timestamp: new Date(Date.now() - 3400000).toISOString(),
    },
  ];

  const formatTime = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1)
      return `${interval} year${interval === 1 ? "" : "s"} ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1)
      return `${interval} month${interval === 1 ? "" : "s"} ago`;
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval === 1 ? "" : "s"} ago`;
    interval = Math.floor(seconds / 3600);
    if (interval >= 1)
      return `${interval} hour${interval === 1 ? "" : "s"} ago`;
    interval = Math.floor(seconds / 60);
    if (interval >= 1)
      return `${interval} minute${interval === 1 ? "" : "s"} ago`;
    return `${Math.floor(seconds)} second${seconds === 1 ? "" : "s"} ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>

        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 flex flex-col sm:flex-row justify-between items-center gap-4"
              >
                <div className="flex gap-4 flex-1">
                  <img
                    src="https://spng.pngfind.com/pngs/s/16-168087_wikipedia-user-icon-bynightsight-user-image-icon-png.png"
                    alt={`${item.sender}'s profile`}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-900">
                        {item.sender}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTime(item.timestamp)}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1 text-sm">{item.message}</p>
                  </div>
                </div>

                <div className="sm:w-24 flex-shrink-0">
                  <img
                    src={item.itemUrl}
                    alt="Found item"
                    className="w-full h-20 object-contain rounded border border-gray-200"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500">No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
