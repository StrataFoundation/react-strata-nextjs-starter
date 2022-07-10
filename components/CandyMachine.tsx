import { MarketplaceProviders, DynamicPricingCandyMachine } from "@strata-foundation/marketplace-ui";
import { usePublicKey } from "@strata-foundation/react";
import { CSSReset } from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";

export function CandyMachine() {
    const candyMachineId = "SkLFh8aHPEtWg9uFNwp2JzcXQiQVy7Femonah3xQwXs";
    const { setVisible } = useWalletModal();
    const candyMachineIdPubkey = usePublicKey(candyMachineId);

    return <div>
        <MarketplaceProviders resetCSS onError={(err) => console.error(err)}>
            <DynamicPricingCandyMachine candyMachineId={candyMachineIdPubkey} onConnectWallet={() => setVisible(true)} />
        </MarketplaceProviders>
    </div>
}
