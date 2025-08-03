import React, { useState, useEffect } from "react";
import "./style.css";

function LoadingSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="shimmer-wrapper">
      <div className="card">
        {loading ? (
          <div className="skeleton-wrapper">
            <div class="avatar skeleton"></div>
            <div class="profile-img skeleton line"></div>
            <div class="line name skeleton"></div>
            <div class="line skeleton bio"></div>
          </div>
        ) : (
          <div className="content">
            <h2>John Doe</h2>
            <p>Full-stack developer at XYZ company</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
