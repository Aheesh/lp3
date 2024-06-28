"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { useState, type ReactNode } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http, createConfig } from "wagmi";
import { base, baseSepolia, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = createConfig({
  chains: [baseSepolia, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    84532: http(
      "https://api.developer.coinbase.com/rpc/v1/base-sepolia/ePkNxHymCIO2Drq95R-FcK994YEeqHHh"
    ),
    [base.id]: http(
      "https://api.developer.coinbase.com/rpc/v1/base/ePkNxHymCIO2Drq95R-FcK994YEeqHHh"
    ),
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/Dj1HcgrqJ7nWyCjG_WlN2b3n5C8KLyr7"
    ),
  },
});

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
