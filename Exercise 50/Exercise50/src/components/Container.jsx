import { useState } from "react";
export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapsed() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-title">
        {" "}
        {title}{" "}
        <button onClick={handleToggleCollapsed} style={{ cursor: "pointer" }}>
          Toggle
        </button>
      </div>
      {collapsed && (
        <div className={!collapsed ? "app-content" : "app-content-hidden"}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Container;
