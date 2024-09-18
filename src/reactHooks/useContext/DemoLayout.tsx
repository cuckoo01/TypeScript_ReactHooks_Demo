import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Long Vu

// 2. What is useContext: useContext là một Hook trong React được sử dụng để đọc và sử dụng giá trị từ React Context mà không cần component trung gian.

// 3. How to use useContext:
// - Đầu tiên, tạo một Context bằng React.createContext()
// - Bọc component cha bằng Provider của Context và cung cấp giá trị
// - Sử dụng useContext trong các component con để truy cập giá trị của Context

// 4. Why use useContext:
// - Tránh prop drilling (truyền props qua nhiều cấp component)
// - Chia sẻ dữ liệu giữa nhiều component mà không cần truyền props
// - Quản lý state global cho ứng dụng

// 5. Example

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      Current theme: {theme}
    </button>
  );
};

const UseContextDemo: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h3>useContext Demo</h3>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default UseContextDemo;
