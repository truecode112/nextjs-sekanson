export interface ApplicationType {
  uid?: string;
  priceRuleId?: string;
  contractType?: string;
  url?: string;
  testnetContractAddress?: string;
  adminAccessScope?: any;
  isPaidPremium?: boolean;
  productionContractAddress?: string;
  tokenId?: string | any;
  type?: string;
  createdAt?: number;
  network?: string;
  shopURL?: string;
  discountCode?: string;
  name?: string | any;
  adminAddress?: string | any;
  shopifyAPIKey?: string;
  shopifySecretKey?: string;
  shopifyAccessToken?: string;
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
