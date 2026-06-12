"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs({ title }) {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);
  
  const labels = {
    docs: "Docs",
    api: "API Reference",
    sdk: "SDKs",
    blog: "Blog",
    changelog: "Changelog",
    pricing: "Pricing",
    status: "Status",
    releases: "Releases",
    "deprecated-old-api": "Deprecated v0 API"
  };

  return (
    <nav className="breadcrumbs-container" aria-label="Breadcrumb">
      <Link href="/" className="breadcrumb-link">Home</Link>
      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        const href = "/" + paths.slice(0, index + 1).join("/");
        
        // Use custom label if mapped, otherwise fall back to title (on last item) or path string formatted
        let label = labels[path] || path;
        if (isLast && title) {
          label = title;
        } else {
          // Format slug to human readable if not in labels
          label = labels[path] || (path.charAt(0).toUpperCase() + path.slice(1)).replace(/-/g, " ");
        }

        return (
          <span key={href} className="breadcrumb-segment">
            <span className="breadcrumb-separator">/</span>
            {isLast ? (
              <span className="breadcrumb-active" aria-current="page">{label}</span>
            ) : (
              <Link href={href} className="breadcrumb-link">{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
