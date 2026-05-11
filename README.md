# RizzlePayment

A **crypto payment gateway** that lets customers pay with any token from any blockchain, automatically converting to USDC.

## Features

- **Cross-Chain Payments** - Accept crypto from 60+ blockchains
- **One-Click Swap** - Automatic token conversion to USDC
- **Fast Settlements** - Sub-second finality via Arc
- **Customizable** - Easy config file for merchants
- **Powered by LI.FI** - Best route optimization

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Configuration

Edit `src/config.js` to customize your payment gateway:

```javascript
export const CONFIG = {
  appName: 'RizzlePayment',
  merchant: {
    merchantName: 'Your Store Name',
    receiveAddress: '0xYourWalletAddress', // USDC receiving address
  },
  payment: {
    defaultFiatCurrency: 'USD',
    targetToken: 'USDC',
    targetChain: 'ethereum',
  },
};
```

## File Structure

```
rizzzlepayment/
├── index.html          # Entry HTML
├── package.json        # Dependencies
├── vite.config.js     # Build config
├── src/
│   ├── main.jsx       # Main app component
│   ├── config.js      # Main configuration
│   └── styles.css     # Styling
└── README.md
```

## Learn Web3 Development

### What is this project doing?

1. **LI.FI Widget** - Handles cross-chain swaps between any token → USDC
2. **Arc by Circle** - Provides the payment infrastructure with sub-second finality
3. **USDC** - The stablecoin being used (always worth $1)

### Key Concepts for Beginners

#### Blockchain
A blockchain is like a shared database that no single person controls. Every transaction is recorded publicly.

#### Tokens
- **Native tokens** (ETH, MATIC, SOL) - Used to pay for network fees
- **ERC-20/USDC** - Digital dollars that run on a blockchain

#### USDC
A stablecoin pegged to the US dollar. 1 USDC ≈ $1 always. This is what merchants receive.

#### Bridges
Bridges move tokens between different blockchains (e.g., Solana ETH → Ethereum USDC).

#### Wallets
A wallet stores your private keys - the password to your crypto funds. Never share these!

### Understanding the Flow

```
Customer pays with: [Any Token]
         ↓
    LI.FI Widget
    (finds best route)
         ↓
  Cross-Chain Bridge
  (converts to USDC)
         ↓
  Arc Network (fast)
         ↓
Merchant receives: [USDC]
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `config.js` | All customizable settings |
| `main.jsx` | React app - UI logic |
| `styles.css` | Visual appearance |
| `index.html` | Entry point |

### Common Tasks

#### Add a new supported token
Edit `config.js` → `acceptedTokens` array.

#### Change brand colors
Edit `config.js` → `primaryColor`, `secondaryColor`.

#### Set specific chains
Edit `config.js` → `lifi.restrictedChains`.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **LI.FI Widget** - Cross-chain swapping
- **Arc (Circle)** - Payment infrastructure

## Resources

- [LI.FI Documentation](https://docs.li.fi)
- [Arc Documentation](https://docs.arc.network)
- [React Documentation](https://react.dev)

## Next Steps

1. **Run the app** and test the widget
2. **Customize** the config for your store
3. **Deploy** to Vercel, Netlify, or Cloudflare Pages
4. **Integrate** into your existing website

## License

MIT
