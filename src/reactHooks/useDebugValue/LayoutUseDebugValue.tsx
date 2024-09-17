import React, { useState, useEffect, useDebugValue } from 'react';
//Thái Trần MInh Quân
// Custom hook theo dõi trạng thái kết nối mạng
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// Custom hook đếm giây ngược
function useCountdown(duration: number) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const intervalId = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  useDebugValue(secondsLeft > 0 ? `Time Left: ${secondsLeft}s` : 'Time Up');

  return secondsLeft;
}

// Component để sử dụng hook và hiển thị trạng thái
const UseDebugValue: React.FC = () => {
  const isOnline = useOnlineStatus();
  const secondsLeft = useCountdown(60); 

  return (
    <div>
      <h1>{isOnline ? 'You are Online' : 'You are Offline'}</h1>
      <h2>{secondsLeft > 0 ? `Time Left: ${secondsLeft}s` : 'Time Up'}</h2>
    </div>
  );
};

export default UseDebugValue;
