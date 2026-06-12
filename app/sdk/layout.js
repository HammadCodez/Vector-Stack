import Sidebar from "../../components/Sidebar";

export default function SdkLayout({ children }) {
  return (
    <div className="doc-layout-container">
      <Sidebar type="sdk" />
      <div className="doc-content-wrapper">{children}</div>
    </div>
  );
}
