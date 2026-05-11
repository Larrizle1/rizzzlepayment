import React from 'react';
import ReactDOM from 'react-dom/client';
import { LiFiWidget, useConfig, WidgetTheme } from '@lifi/widget';
import { CONFIG, TOKEN_CONFIGS } from './config.js';
import './styles.css';

const widgetConfig = {
  integrator: CONFIG.lifi.integrator,
  theme: {
    palette: {
      primary: { main: CONFIG.primaryColor },
      secondary: { main: CONFIG.secondaryColor },
    },
    shape: { borderRadius: CONFIG.ui.theme === 'dark' ? 12 : 12 },
  },
  appearance: CONFIG.ui.theme === 'auto' ? 'auto' : CONFIG.ui.theme,
  fromToken: {
    icon: true,
    showBalance: true,
  },
  toToken: {
    icon: true,
  },
};

function App() {
  const config = useConfig(widgetConfig);
  
  const paymentAmount = CONFIG.payment.defaultAmount;
  const merchantName = CONFIG.merchant.merchantName;
  const merchantOrder = CONFIG.merchant.orderId;

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">R</div>
          <span className="logo-text">{CONFIG.appName}</span>
        </div>
        <div className="header-actions">
          <button className="wallet-btn">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Payment Form */}
        <div className="payment-column">
          <div className="payment-card">
            <div className="payment-header">
              <h1 className="payment-title">{CONFIG.ui.title}</h1>
              <p className="payment-subtitle">{CONFIG.ui.subtitle}</p>
            </div>

            <div className="amount-section">
              <label className="amount-label">Amount to Pay</label>
              <div className="amount-input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  className="amount-input"
                  placeholder="0.00"
                  defaultValue={paymentAmount}
                  min={CONFIG.payment.minAmount}
                  max={CONFIG.payment.maxAmount}
                />
              </div>
              <p className="amount-fiat">USD (USDC)</p>
            </div>

            <div className="converted-info">
              <div className="converted-label">You'll Receive</div>
              <div className="converted-amount">
                {paymentAmount || '0.00'} USDC on Ethereum
              </div>
            </div>

            <div className="merchant-section">
              <div className="merchant-name">{merchantName}</div>
              {merchantOrder && (
                <div className="merchant-order">Order: {merchantOrder}</div>
              )}
            </div>

            <button className="pay-button" onClick={() => document.getElementById('lifi-widget')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Swap to USDC</span>
              <span>→</span>
            </button>
          </div>

          {/* How It Works */}
          <div className="swap-info" style={{ marginTop: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>How It Works</h3>
            <div className="swap-step">
              <div className="step-number">1</div>
              <span className="step-text">Select any token from any chain</span>
            </div>
            <div className="swap-step">
              <div className="step-number">2</div>
              <span className="step-text">Widget finds the best route for you</span>
            </div>
            <div className="swap-step">
              <div className="step-number">3</div>
              <span className="step-text">Receive USDC on Ethereum instantly</span>
            </div>
          </div>
        </div>

        {/* LI.FI Widget */}
        <div className="widget-section" id="lifi-widget">
          <div className="widget-header">
            <span className="widget-title">
              <span>Cross-Chain Swap</span>
              <span className="widget-badge">Powered by LI.FI</span>
            </span>
          </div>
          <div className="widget-container">
            <LiFiWidget config={config} />
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="features-section">
        <h2 className="features-title">Why Use {CONFIG.appName}?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌉</div>
            <div className="feature-name">Cross-Chain</div>
            <div className="feature-desc">Pay from any blockchain</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-name">Fast Settlements</div>
            <div className="feature-desc">Sub-second finality</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <div className="feature-name">Secure</div>
            <div className="feature-desc">Best route optimization</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <div className="feature-name">Low Fees</div>
            <div className="feature-desc">Near-zero gas costs</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 {CONFIG.appName}. Powered by LI.FI & Arc.</p>
        <div className="footer-links">
          <a href="https://docs.li.fi" className="footer-link">LI.FI Docs</a>
          <a href="https://docs.arc.network" className="footer-link">Arc Docs</a>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
