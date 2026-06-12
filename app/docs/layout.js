import Sidebar from "../../components/Sidebar";

export default function DocsLayout({ children }) {
  return (
    <div className="doc-layout-container">
      <Sidebar type="docs" />
      <div className="doc-content-wrapper">{children}</div>
    </div>
  );
}
