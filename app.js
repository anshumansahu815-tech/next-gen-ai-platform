// =========================================================================
// FEATURE 1 ENGINE: Multi-Dimensional Pricing Configuration Data Matrix
// =========================================================================
const PRICING_MATRIX = {
    tiers: {
        starter: { 
            baseMonthlyINR: 1000, 
            tariffs: { INR: 1.0, USD: 0.012, EUR: 0.011 },
            symbols: { INR: '₹', USD: '$', EUR: '€' }
        },
        pro: { 
            baseMonthlyINR: 3000, 
            tariffs: { INR: 1.0, USD: 0.012, EUR: 0.011 },
            symbols: { INR: '₹', USD: '$', EUR: '€' }
        },
        enterprise: { 
            baseMonthlyINR: 8000, 
            tariffs: { INR: 1.0, USD: 0.012, EUR: 0.011 },
            symbols: { INR: '₹', USD: '$', EUR: '€' }
        }
    },
    multipliers: {
        monthly: 1.0,
        annual: 0.8 // Flat 20% annual discount multiplier
    }
};

// Isolated Real-Time Engine Tracking State 
let currentBilling = 'monthly'; 
let currentCurrency = 'INR';    

function calculateAndPopulatePrices() {
    Object.keys(PRICING_MATRIX.tiers).forEach(tierKey => {
        const tierData = PRICING_MATRIX.tiers[tierKey];
        const base = tierData.baseMonthlyINR;
        const tariff = tierData.tariffs[currentCurrency];
        const symbol = tierData.symbols[currentCurrency];
        const discount = PRICING_MATRIX.multipliers[currentBilling];

        const factor = currentBilling === 'annual' ? 12 : 1;
        const finalPrice = Math.round(base * tariff * discount * factor);

        // Targeted direct text node updates entirely sidestepping layout reflows
        const priceElement = document.getElementById(`price-${tierKey}`);
        if (priceElement) {
            priceElement.innerText = `${symbol}${finalPrice}${currentBilling === 'annual' ? ' / yr' : ' / mo'}`;
        }
    });
}

function updateButtonStyles(activeId, selectorsString) {
    const groupButtons = document.querySelectorAll(selectorsString);
    groupButtons.forEach(btn => {
        if (btn.id === activeId) {
            btn.classList.add('bg-nocturnalExp', 'text-arcticPowder', 'font-bold');
            btn.classList.remove('text-mysticMint');
        } else {
            btn.classList.remove('bg-nocturnalExp', 'text-arcticPowder', 'font-bold');
            btn.classList.add('text-mysticMint');
        }
    });
}

// =========================================================================
// FEATURE 2 ENGINE: Bento-to-Accordion Layout Context Lock Synchronization
// =========================================================================
let persistentActiveIndex = 0; 

function syncLayoutStates() {
    const isMobile = window.innerWidth < 768; 

    if (isMobile) {
        const contents = document.querySelectorAll('.accordion-content');
        const icons = document.querySelectorAll('.acc-icon');
        
        contents.forEach((content, idx) => {
            if (idx === persistentActiveIndex) {
                content.classList.remove('hidden');
                if (icons[idx]) icons[idx].classList.add('rotate-180'); 
            } else {
                content.classList.add('hidden');
                if (icons[idx]) icons[idx].classList.remove('rotate-180');
            }
        });
    } else {
        const nodes = document.querySelectorAll('.bento-node');
        nodes.forEach((node, idx) => {
            if (idx === persistentActiveIndex) {
                node.classList.add('border-forsythia', 'bg-nocturnalExp-20');
                node.classList.remove('border-nocturnalExp-20', 'bg-nocturnalExp-5');
            } else {
                node.classList.remove('border-forsythia', 'bg-nocturnalExp-20');
                node.classList.add('border-nocturnalExp-20', 'bg-nocturnalExp-5');
            }
        });
    }
}

// =========================================================================
// DOM Initialization Framework Hook Loop
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Pricing Computations Run
    calculateAndPopulatePrices();

    // 2. Billing Cycle Triggers Configuration
    const btnMonthly = document.getElementById('btn-monthly');
    const btnAnnual = document.getElementById('btn-annual');

    btnMonthly?.addEventListener('click', () => {
        currentBilling = 'monthly';
        updateButtonStyles('btn-monthly', '#btn-monthly, #btn-annual');
        calculateAndPopulatePrices();
    });

    btnAnnual?.addEventListener('click', () => {
        currentBilling = 'annual';
        updateButtonStyles('btn-annual', '#btn-monthly, #btn-annual');
        calculateAndPopulatePrices();
    });

    // 3. Currency Selector Mappings Loop
    ['INR', 'USD', 'EUR'].forEach(currency => {
        const btn = document.getElementById(`btn-${currency}`);
        btn?.addEventListener('click', () => {
            currentCurrency = currency;
            updateButtonStyles(`btn-${currency}`, '#btn-INR, #btn-USD, #btn-EUR');
            calculateAndPopulatePrices();
        });
    });

    // 4. Feature Structural Elements Listeners Bindings
    const bentoNodes = document.querySelectorAll('.bento-node');
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    bentoNodes.forEach(node => {
        const updateNodeState = () => {
            persistentActiveIndex = parseInt(node.getAttribute('data-index') || '0', 10);
            syncLayoutStates();
        };
        node.addEventListener('mouseenter', updateNodeState);
        node.addEventListener('click', updateNodeState);
    });

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            persistentActiveIndex = parseInt(trigger.getAttribute('data-target') || '0', 10);
            syncLayoutStates();
        });
    });

    // =========================================================================
    // OPTIMIZED CARD BORDER HIGHLIGHT SWITCHER (Moves active yellow frame layout)
    // =========================================================================
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Strip the active styling variables across all instances dynamically
            cards.forEach(c => {
                c.classList.remove('border-2', 'border-forsythia', 'bg-nocturnalExp-10');
                c.classList.add('border', 'border-nocturnalExp-20', 'bg-nocturnalExp-5');
            });
            
            // Re-apply the bold yellow indicator layout classes purely to selected card
            card.classList.remove('border', 'border-nocturnalExp-20', 'bg-nocturnalExp-5');
            card.classList.add('border-2', 'border-forsythia', 'bg-nocturnalExp-10');
        });
    });

    // 5. Context Lock Activation (Strict Window Resize Synchronization Engine)
    window.addEventListener('resize', syncLayoutStates);
    
    // Establish structural grid orientation baselines on engine launch
    syncLayoutStates();
});