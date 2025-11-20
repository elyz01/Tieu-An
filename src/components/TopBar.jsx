import React, { useState, useEffect } from "react";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format giờ phút giây 24h
  const timeString = currentTime.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format ngày/tháng/năm
  const dateString = currentTime.toLocaleDateString("en-GB"); // dd/mm/yyyy

  return (
<div className="flex font-mono py-1 flex-col items-center justify-center lg:flex-row lg:gap-1 bg-white">
  <p>Trạm lưu trữ ký ức.</p>
  <p className="text-pink-500">
    GMT+7.{timeString}.{dateString}
  </p>
</div>
  );
};

export default TopBar;
