import { useState } from "react";
import AuthContext from "./AuthContext";

const demoAccounts = [
  {
    id: 1,
    name: "John Member",
    email: "member@pethaven.com",
    password: "member123",
    role: "member",
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@pethaven.com",
    password: "admin123",
    role: "admin",
  },
];

const getStoredUser = () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("pethaven_user"));

    if (!storedUser) return null;

    const account = demoAccounts.find(
      (user) =>
        user.email === storedUser.email && user.role === storedUser.role,
    );

    if (!account) return null;

    return {
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
    };
  } catch {
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  const login = (email, password) => {
    const account = demoAccounts.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase().trim() &&
        user.password === password,
    );

    if (!account) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const loggedInUser = {
      id: account.id,
      name: account.name,
      email: account.email,
      role: account.role,
    };

    setUser(loggedInUser);

    localStorage.setItem("pethaven_user", JSON.stringify(loggedInUser));

    return {
      success: true,
      message: "Login successful!",
      user: loggedInUser,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pethaven_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
