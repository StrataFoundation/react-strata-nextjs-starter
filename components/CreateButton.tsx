import React from "react";
import { useStrataSdks } from "@strata-foundation/react";
import { SplTokenCollective } from "@strata-foundation/spl-token-collective";
import { PublicKey } from "@solana/web3.js";
import { Button } from "@chakra-ui/react";
export interface ITokenState {
  tokenRef?: PublicKey;
  tokenBonding?: PublicKey;
}

async function create(tokenCollectiveSdk: SplTokenCollective): Promise<ITokenState> {
  const { ownerTokenRef, tokenBonding } = await tokenCollectiveSdk.createSocialToken({
    ignoreIfExists: true, // If a Social Token already exists for this wallet, ignore.
    metadata: {
      name: "My Test Token",
      symbol: "TEST",
      uri: "https://strataprotocol.com/luvSTRAT.json"
    },
    tokenBondingParams: {
      buyBaseRoyaltyPercentage: 0,
      buyTargetRoyaltyPercentage: 10,
      sellBaseRoyaltyPercentage: 0,
      sellTargetRoyaltyPercentage: 0
    }
  });

  return {
    tokenRef: ownerTokenRef,
    tokenBonding: tokenBonding!
  }
}

export function CreateButton({ setTokenState }: { setTokenState: (state: ITokenState) => void }) {
  const { tokenCollectiveSdk } = useStrataSdks();

  return <Button
    onClick={async () => {
      if (tokenCollectiveSdk) {
        setTokenState(await create(tokenCollectiveSdk))
      }
    }}
  >
    Create Test Token
  </Button>
}
