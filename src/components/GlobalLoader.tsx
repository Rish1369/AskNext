"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Simulate loading
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;
  return (
    <div style={{
      position: 'fixed', top:0, left:0, width:'100vw', height:'100vh',
      background:'rgba(0,0,0,0.3)', zIndex:9999, display:'flex',
      alignItems:'center', justifyContent:'center'
    }}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
    </div>
  );
} 