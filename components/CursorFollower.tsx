```typescript
// components/CursorFollower.tsx
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Cursor component, disabling SSR
const Cursor = dynamic(() => import('react-simple-cursor-follower').then(mod => mod.Cursor), {
  ssr: false,
});

const CursorFollower = () => {
  // Only render the cursor on the client-side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Cursor
      color="#8b5cf6" // purple-500
      size={35}
      speed={0.1} // Lower for smoother follow
      borderSize={1}
      borderColor="rgba(139, 92, 246, 0.3)" // purple-500 with alpha
      bgColor="rgba(139, 92, 246, 0.08)" // Very subtle fill
      lerp={0.08} // Even smoother interpolation
      hoverAnimation={true} // Enable default hover animation
      hoverSize={1.5} // Size multiplier on hover
      hoverBorderSize={0}
      hoverColor="rgba(139, 92, 246, 0.3)"
    />
  );
};

export default CursorFollower;
```
