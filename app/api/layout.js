import Sidebar from "../../components/Sidebar";

export default function ApiLayout({ children }) {
  return (
    <div className="doc-layout-container">
      <Sidebar type="api" />
      <div className="doc-content-wrapper">{children}</div>
    </div>
  );
}
