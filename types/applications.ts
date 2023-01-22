export interface ApplicationType {
  uid?: string;
  priceRuleId?: string;
  contractType?: string;
  url?: string;
  testnetContractAddress?: string;
  priceRuleData?: any;
  isPaidPremium?: boolean;
  productionContractAddress?: string;
  tokenId?: string | any;
  type?: string;
  createdAt?: {
    _nanoseconds: number;
    _seconds: number;
  };
  network?: string;
  shopURL?: string;
  discountCode?: string;
  name?: string | any;
  adminAddresses?: Array<string>;
  shopifyAPIKey?: string;
  shopifySecretKey?: string;
  desiredBalance?: number;
  ctaText?: string;
  ctaTextColor?: string;
  bannerBgColor?: string;
}

export enum ContractTypeEnum {
  ERC721A = "ERC-721A",
  ERC1155 = "ERC-1155",
  ERC20 = "ERC-20",
}
