"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsPages } from "../data/docs";
import { apiPages } from "../data/api";
import { sdkPages } from "../data/sdk";

export default function Sidebar({ type }) {
  const pathname = usePathname();

  let items = [];
  let basePath = "";
  let sectionTitle = "";

  if (type === "docs") {
    items = docsPages;
    basePath = "/docs";
    sectionTitle = "Documentation Guide";
  } else if (type === "api") {
    items = apiPages;
    basePath = "/api";
    sectionTitle = "REST API Reference";
  } else if (type === "sdk") {
    items = sdkPages;
    basePath = "/sdk";
    sectionTitle = "SDK Libraries";
  }

  const isActive = (slug) => {
    return pathname === `${basePath}/${slug}`;
  };

  return (
    <aside className="sidebar-container">
      <div className="sidebar-section">
        <h3 className="sidebar-title">{sectionTitle}</h3>
        <nav className="sidebar-nav">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className={`sidebar-link ${isActive(item.slug) ? "active" : ""}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
