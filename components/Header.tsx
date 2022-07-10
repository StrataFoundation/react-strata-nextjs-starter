import React from "react";
import { Box, Center, Flex, HStack, Icon, Text, Link, LinkProps, Image } from "@chakra-ui/react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface IMenuItemProps extends LinkProps {
  isLast?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
  ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link href={href} {...rest}>
      {children}
    </Link>
  </Text>
);

export const Header: React.FC = () => (
  <Center
    w="full"
    paddingX={14}
    paddingY={2}
    justifyContent="space-between"
    alignItems="center"
    color="white"
    bg="grey"
  >
    <HStack spacing={4}>
      <Link href="https://imsonft.io">
          <Image src="https://imsonft.io/wp-content/uploads/2022/05/IMSOnft_logo_header.png" width="100" height="75" alt="Intergalactic Monkey Space Odyssey" id="logo" data-height-percentage="48" data-actual-width="420" data-actual-height="125"/>
      </Link>
    </HStack>
    <Box display={{ md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <HStack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <WalletMultiButton />
{/*        <WalletDisconnectButton /> */}
      </HStack>
    </Box>
  </Center>
);
