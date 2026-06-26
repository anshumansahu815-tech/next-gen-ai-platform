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

// =========================================================================
// PERFORMANCE OPTIMIZED NATIVE 3D MESH TERRAIN SIMULATION ENGINE (Zero Dep)
// =========================================================================
(function initHero3DMatrix() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
        if (!canvas.offsetWidth) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });

    const cols = 28;
    const rows = 18;
    let time = 0;

    function renderWireframeMatrix() {
        ctx.clearRect(0, 0, width, height);
        
        // Premium subtle grid lines mapping using Forsythia token palette
        ctx.strokeStyle = 'rgba(255, 200, 1, 0.15)'; 
        ctx.lineWidth = 1;

        time += 0.015;
        const points = [];

        // 1. Calculate and project dynamic undulating nodes matrix coordinates
        for (let r = 0; r <= rows; r++) {
            points[r] = [];
            for (let c = 0; c <= cols; c++) {
                // Normalize positions mapping across coordinates grid planes
                const nx = (c / cols) - 0.5;
                const ny = (r / rows) - 0.4;

                // Complex dual-wave interference pattern simulating terrain mesh layers
                const wave1 = Math.sin(nx * 3.5 + time) * Math.cos(ny * 2.5 + time);
                const wave2 = Math.sin(ny * 5.0 - time * 1.5) * 0.4;
                const z = (wave1 + wave2) * 28;

                // Apply mathematical perspective projection matrices
                const fov = 260;
                const perspective = fov / (fov + (ny * 160) + 40);
                
                const screenX = (width / 2) + (nx * width * 1.4) * perspective;
                const screenY = (height * 0.45) + (ny * height * 0.75 + z) * perspective;

                points[r][c] = { x: screenX, y: screenY };
            }
        }

        // 2. Compute indices arrays structural connections bounds path loops
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                ctx.beginPath();
                // Draw horizontal structural wireframe vectors
                ctx.moveTo(points[r][c].x, points[r][c].y);
                ctx.lineTo(points[r][c + 1].x, points[r][c + 1].y);
                // Draw vertical structural wireframe vectors
                ctx.moveTo(points[r][c].x, points[r][c].y);
                ctx.lineTo(points[r + 1][c].x, points[r + 1][c].y);
                ctx.stroke();
            }
        }

        requestAnimationFrame(renderWireframeMatrix);
    }
    
    // Fire up the hardware accelerated animation sequence frame loop
    requestAnimationFrame(renderWireframeMatrix);
})();