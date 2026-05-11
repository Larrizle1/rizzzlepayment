// ============================================================
// MERCHANT CONFIGURATION
// ============================================================
// Copy this file as merchant-config.js and fill in your details.
// DO NOT commit this file to version control!
// ============================================================

export const MERCHANT_CONFIG = {
  // ----------------------------------------------------------
  // REQUIRED: Payment Settings
  // ----------------------------------------------------------
  
  // Your wallet address that will receive USDC payments
  // IMPORTANT: This MUST be a valid Ethereum address
  paymentAddress: '0x0000000000000000000000000000000000000000',
  
  // Network to receive payments on (ethereum recommended)
  paymentChain: 'ethereum',  // ethereum, polygon, arbitrum, etc.
  
  // ----------------------------------------------------------
  // REQUIRED: Store Information
  // ----------------------------------------------------------
  
  // Your store/business name
  storeName: 'My Awesome Store',
  
  // Short description of what you sell
  storeDescription: 'Quality products with crypto payments',
  
  // ----------------------------------------------------------
  // OPTIONAL: Payment Limits
  // ----------------------------------------------------------
  
  minimumPayment: 1,      // Minimum USD amount
  maximumPayment: 10000, // Maximum USD amount
  
  // ----------------------------------------------------------
  // OPTIONAL: Branding
  // ----------------------------------------------------------
  
  // URL to your logo (should be square, min 200x200px)
  logoUrl: '',
  
  // Primary brand color (hex)
  brandColor: '#6366f1',
  
  // ----------------------------------------------------------
  // OPTIONAL: API Keys (for production)
  // ----------------------------------------------------------
  
  // LI.FI API key (get from https://li.fi)
  lifiApiKey: '',
  
  // Circle API key (for Arc payments - get from console.circle.com)
  circleApiKey: '',
};

export default MERCHANT_CONFIG;
