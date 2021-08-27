import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();

    const authObject = {
      "Project-id": "6915e93f-c4c7-4f17-8086-b69d87ae8017",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
       axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // workos out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (error) {
      // error --> try with new username ...
    }
    // username / password => chat engine --> give messages
    // works out --> logged in
    // error --> try with new username ...
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
