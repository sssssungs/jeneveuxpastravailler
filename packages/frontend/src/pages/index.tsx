import React, { useState } from "react";

export default function Home() {
  const [text] = useState<string>("ts");

  return (
      <div className="container">
        <div>
          <span>{text} 적용 완료</span>
        </div>
      </div>
  );
}
