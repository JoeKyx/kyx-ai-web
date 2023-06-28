"use client"
import { FC, forwardRef } from "react";
import { animated, useSpring, to } from "react-spring";


interface TokenCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  oldTokens: number;
  newTokens: number;
}

const TokenCounter = forwardRef<HTMLSpanElement, TokenCounterProps>(
  ({ oldTokens, newTokens, ...props }, ref) => {
    console.log("oldTokens: ", oldTokens)
    console.log("newTokens: ", newTokens)
    const springProps = useSpring({
      from: { number: oldTokens, color: 'white' },
      to: { number: newTokens, color: '#F5bc51' },
      config: { duration: 3000 },
    });

    return (
      <animated.span style={{ color: springProps.color }}>
        {springProps.number.to((n: number) => Math.floor(n))}
      </animated.span>
    );
  }
);

TokenCounter.displayName = "TokenCounter";
export default TokenCounter;