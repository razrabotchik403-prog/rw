
"use client";

import { useEffect, useState } from "react";

export function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="rw-intro" aria-hidden="true">
      <div className="rw-intro__curtain" />
      <div className="rw-intro__wordmark-layer">
        <span className="rw-intro__wordmark">ROAD WIZARD</span>
      </div>
    </div>
  );
}
