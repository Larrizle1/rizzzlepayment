// ============================================================
// RIZZLEPAYMENT CONFIGURATION FILE
// ============================================================
// This file contains all customizable settings for your
// crypto payment gateway. Edit values below to customize.
// ============================================================

export const CONFIG = {
  // ----------------------------------------------------------
  // APP SETTINGS
  // ----------------------------------------------------------
  appName: 'RizzlePayment',
  appLogo: '/logo.svg',
  primaryColor: '#6366f1',    // Your brand color (indigo default)
  secondaryColor: '#8b5cf6', // Purple accent
  accentColor: '#10b981',    // Success/green
  
  // ----------------------------------------------------------
  // PAYMENT SETTINGS
  // ----------------------------------------------------------
  payment: {
    // Default fiat currency for display
    defaultFiatCurrency: 'USD',
    
    // Target token - users will swap TO this token
    targetToken: 'USDC',
    
    // Target chain - where USDC should land
    targetChain: 'ethereum',
    
    // Supported tokens users can pay with (any chain)
    acceptedTokens: [
      'USDC', 'USDT', 'DAI', 'ETH', 'WETH', 'MATIC', 'BNB', 'ARB', 'OP'
    ],
    
    // Minimum payment amount (in fiat USD)
    minAmount: 1.00,
    maxAmount: 1000000.00,
    
    // Default payment amount (leave empty for user input)
    defaultAmount: '',
  },

  // ----------------------------------------------------------
  // MERCHANT SETTINGS
  // ----------------------------------------------------------
  merchant: {
    // Your payment receiving address (USDC on targetChain)
    receiveAddress: '0xYourWalletAddressHere',
    
    // Merchant name shown to customers
    merchantName: 'Your Store Name',
    
    // Order reference (optional)
    orderId: '',
  },

  // ----------------------------------------------------------
  // UI SETTINGS
  // ----------------------------------------------------------
  ui: {
    // Theme: 'light', 'dark', or 'auto'
    theme: 'auto',
    
    // Show/hide elements
    showWalletButton: true,
    showHistory: true,
    showPriceConversions: true,
    
    // Custom title/subtitle
    title: 'Pay with Crypto',
    subtitle: 'Pay securely with any token from any chain',
  },

  // ----------------------------------------------------------
  // ADVANCED: LI.FI WIDGET CONFIG
  // ----------------------------------------------------------
  lifi: {
    integrator: 'rizzzlepayment',
    
    // Restrict to specific chains (empty = all supported)
    restrictedTokens: [],
    restrictedChains: [],
    disabledBridges: [],
    disabledExchanges: [],
    
    // Widget appearance
    widgetWidth: '100%',
    widgetHeight: '500px',
  },
};

// Chain configs for display
export const SUPPORTED_CHAINS = {
  ethereum: { name: 'Ethereum', symbol: 'ETH', logo: 'ETH' },
  polygon: { name: 'Polygon', symbol: 'MATIC', logo: 'MATIC' },
  arbitrum: { name: 'Arbitrum', symbol: 'ETH', logo: 'ARB' },
  optimism: { name: 'Optimism', symbol: 'ETH', logo: 'OP' },
  bsc: { name: 'BNB Chain', symbol: 'BNB', logo: 'BNB' },
  avalanche: { name: 'Avalanche', symbol: 'AVAX', logo: 'AVAX' },
  base: { name: 'Base', symbol: 'ETH', logo: 'BASE' },
  solana: { name: 'Solana', symbol: 'SOL', logo: 'SOL' },
  arc: { name: 'Arc', symbol: 'USDC', logo: 'USDC' },
};

// Token configs
export const TOKEN_CONFIGS = {
  USDC: { decimals: 6, logo: 'USDC', symbol: '$' },
  USDT: { decimals: 6, logo: 'USDT', symbol: '$' },
  DAI: { decimals: 18, logo: 'DAI', symbol: '$' },
  ETH: { decimals: 18, logo: 'ETH', symbol: 'Ξ' },
  WETH: { decimals: 18, logo: 'ETH', symbol: 'Ξ' },
  MATIC: { decimals: 18, logo: 'MATIC', symbol: 'MATIC' },
  BNB: { decimals: 18, logo: 'BNB', symbol: 'BNB' },
  ARB: { decimals: 18, logo: 'ARB', symbol: 'ARB' },
  OP: { decimals: 18, logo: 'OP', symbol: 'OP' },
};
