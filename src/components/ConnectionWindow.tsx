// ConnectionWindow.tsx

import { useAccount } from "wagmi";

export function ConnectionWindow() {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();

  return (
    <div>
      <h2>Connection Status</h2>
    </div>
  );
}
