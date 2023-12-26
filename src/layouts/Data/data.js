 const menuItems = [
    {
        label: "Menu",
        isHeader: true,
    },
    {
        id: "dashboard",
        label: "Dashboards",
        icon: "ri-dashboard-2-line",
        link: "/#",
        subItems: [
            {
                id: "analytics",
                label: "Analytics",
                link: "/dashboard-analytics",
                parentId: "dashboard",
            },
            {
                id: "crm",
                label: "CRM",
                link: "/dashboard-crm",
                parentId: "dashboard",
            },
            {
                id: "ecommerce",
                label: "Ecommerce",
                link: "/dashboard",
                parentId: "dashboard",
            },
            {
                id: "crypto",
                label: "Crypto",
                link: "/dashboard-crypto",
                parentId: "dashboard",
            },
            {
                id: "projects",
                label: "Projects",
                link: "/dashboard-projects",
                parentId: "dashboard",
            },
            {
                id: "nft",
                label: "NFT",
                link: "/dashboard-nft",
                parentId: "dashboard",
            },
            {
                id: "job",
                label: "Job",
                link: "/dashboard-job",
                parentId: "dashboard",
                badgeColor: "success",
                badgeName: "New",
            },
        ],
    },
    {
        id: "apps",
        label: "Apps",
        icon: "ri-apps-2-line",
        subItems: [
            {
                id: "calendar",
                label: "Calendar",
                link: "/apps-calendar",
                parentId: "apps",
            },
            {
                id: "chat",
                label: "Chat",
                link: "/apps-chat",
                parentId: "apps",
            },
            {
                id: "mailbox",
                label: "Email",
                link: "/#",
                parentId: "apps",
                isChildItem: true,
                childItems: [
                    {
                        id: 1,
                        label: "Mailbox",
                        link: "/apps-mailbox",
                        parentId: "apps"
                    },
                    {
                        id: 2,
                        label: "Email Templates",
                        link: "/#",
                        parentId: "apps",
                        isChildItem: true,
                        childItems: [
                            { id: 2, label: "Basic Action", link: "/apps-email-basic", parentId: "apps" },
                            { id: 3, label: "Ecommerce Action", link: "/apps-email-ecommerce", parentId: "apps" },
                        ],
                    },
                ]
            },
            {
                id: "appsecommerce",
                label: "Ecommerce",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "apps" },
                    { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "apps" },
                    { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "apps" },
                    { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "apps" },
                    { id: 5, label: "Order Details", link: "/apps-ecommerce-order-details", parentId: "apps" },
                    { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "apps" },
                    { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "apps" },
                    { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "apps" },
                    { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "apps" },
                    { id: 10, label: "Seller Details", link: "/apps-ecommerce-seller-details", parentId: "apps" },
                ]
            },
            {
                id: "appsprojects",
                label: "Projects",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "List", link: "/apps-projects-list", parentId: "apps", },
                    { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
                    { id: 3, label: "Create Project", link: "/apps-projects-create", parentId: "apps", },
                ]
            },
            {
                id: "tasks",
                label: "Tasks",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "List View", link: "/apps-tasks-list-view", parentId: "apps", },
                    { id: 2, label: "Task Details", link: "/apps-tasks-details", parentId: "apps", },
                ]
            },
            {
                id: "appscrm",
                label: "CRM",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
                    { id: 2, label: "Companies", link: "/apps-crm-companies" },
                    { id: 3, label: "Deals", link: "/apps-crm-deals" },
                    { id: 4, label: "Leads", link: "/apps-crm-leads" },
                ]
            },
            {
                id: "appscrypto",
                label: "Crypto",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
                    { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
                    { id: 3, label: "Orders", link: "/apps-crypto-orders" },
                    { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
                    { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
                    { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
                ]
            },
            {
                id: "invoices",
                label: "Invoices",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "List View", link: "/apps-invoices-list" },
                    { id: 2, label: "Details", link: "/apps-invoices-details" },
                    { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
                ]
            },
            {
                id: "supportTickets",
                label: "Support Tickets",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "List View", link: "/apps-tickets-list" },
                    { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
                ]
            },
            {
                id: "NFTMarketplace",
                label: "NFT Marketplace",
                link: "/#",
                isChildItem: true,
                parentId: "apps",
                childItems: [
                    { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
                    { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
                    { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
                    { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
                    { id: 5, label: "Collections", link: "/apps-nft-collections" },
                    { id: 6, label: "Creators", link: "/apps-nft-creators" },
                    { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
                    { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
                    { id: 9, label: "Create NFT", link: "/apps-nft-create" },
                ]
            },
            {
                id: "filemanager",
                label: "File Manager",
                link: "/apps-file-manager",
                parentId: "apps",
            },
            {
                id: "todo",
                label: "To Do",
                link: "/apps-todo",
                parentId: "apps",
            },
            {
                id: "job",
                label: "Jobs",
                link: "/#",
                parentId: "apps",
                badgeName: "New",
                badgeColor: "success",
                isChildItem: true,
                childItems: [
                    {
                        id: 1,
                        label: "Statistics",
                        link: "/apps-job-statistics",
                        parentId: "apps",
                    },
                    {
                        id: 2,
                        label: "Job Lists",
                        link: "/#",
                        parentId: "apps",
                        isChildItem: true,
                        childItems: [
                            {
                                id: 1,
                                label: "List",
                                link: "/apps-job-lists",
                                parentId: "apps",
                            },
                            {
                                id: 2,
                                label: "Grid",
                                link: "/apps-job-grid-lists",
                                parentId: "apps",
                            },
                            {
                                id: 3,
                                label: "Overview",
                                link: "/apps-job-details",
                                parentId: "apps",
                            },
                        ],
                    },
                    {
                        id: 3,
                        label: "Candidate Lists",
                        link: "/#",
                        parentId: "apps",
                        isChildItem: true,
                        childItems: [
                            {
                                id: 1,
                                label: "List View",
                                link: "/apps-job-candidate-lists",
                                parentId: "apps",
                            },
                            {
                                id: 2,
                                label: "Grid View",
                                link: "/apps-job-candidate-grid",
                                parentId: "apps",
                            },
                        ],
                    },
                    {
                        id: 4,
                        label: "Application",
                        link: "/apps-job-application",
                        parentId: "apps",
                    },
                    {
                        id: 5,
                        label: "New Job",
                        link: "/apps-job-new",
                        parentId: "apps",
                    },
                    {
                        id: 6,
                        label: "Companies List",
                        link: "/apps-job-companies-lists",
                        parentId: "apps",
                    },
                    {
                        id: 7,
                        label: "Job Categories",
                        link: "/apps-job-categories",
                        parentId: "apps",
                    },
                ],
            },
            {
                id: "apikey",
                label: "API Key",
                link: "/apps-api-key",
                parentId: "apps",
                badgeName: "New",
                badgeColor: "success"
            },
        ],
    },
    {
        label: "pages",
        isHeader: true,
    },
    {
        id: "authentication",
        label: "Authentication",
        icon: "ri-account-circle-line",
        link: "/#",
        subItems: [
            {
                id: "signIn",
                label: "Sign In",
                link: "/#",
                isChildItem: true,
                parentId: "authentication",
                childItems: [
                    { id: 1, label: "Basic", link: "/auth-signin-basic" },
                    { id: 2, label: "Cover", link: "/auth-signin-cover" },
                ]
            },
            {
                id: "signUp",
                label: "Sign Up",
                link: "/#",
                isChildItem: true,
                parentId: "authentication",
                childItems: [
                    { id: 1, label: "Basic", link: "/auth-signup-basic" },
                    { id: 2, label: "Cover", link: "/auth-signup-cover" },
                ]
            },
            {
                id: "errors",
                label: "Errors",
                link: "/#",
                isChildItem: true,
                parentId: "authentication",
                childItems: [
                    { id: 1, label: "404 Basic", link: "/auth-404-basic" },
                    { id: 2, label: "404 Cover", link: "/auth-404-cover" },
                    { id: 3, label: "404 Alt", link: "/auth-404-alt" },
                    { id: 4, label: "500", link: "/auth-500" },
                    { id: 5, label: "Offline Page", link: "/auth-offline" },
                ]
            },
        ],
    },
    {
        id: "pages",
        label: "Pages",
        icon: "ri-pages-line",
        link: "/#",
        subItems: [
            {
                id: "starter",
                label: "Starter",
                link: "/pages-starter",
                parentId: "pages",
            },
            {
                id: "profile",
                label: "Profile",
                link: "/#",
                isChildItem: true,
                parentId: "pages",
                childItems: [
                    { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                    { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                ]
            },
            { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
            { id: "timeline", label: "Timeline", link: "/pages-timeline", parentId: "pages" },
            { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
            { id: "pricing", label: "Pricing", link: "/pages-pricing", parentId: "pages" },
            { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
            { id: "maintenance", label: "Maintenance", link: "/pages-maintenance", parentId: "pages" },
            { id: "comingSoon", label: "Coming Soon", link: "/pages-coming-soon", parentId: "pages" },
            { id: "sitemap", label: "Sitemap", link: "/pages-sitemap", parentId: "pages" },
            { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
            { id: "PrivecyPolicy", label: "Privacy Policy", link: "/pages-privacy-policy", parentId: "pages", badgeColor: "success", badgeName: "New", },
            { id: "TermsCondition", label: "Terms Condition", link: "/pages-terms-condition", parentId: "pages", badgeColor: "success", badgeName: "New", },
        ],
    },
    {
        label: "Components",
        isHeader: true,
    },
    {
        id: "forms",
        label: "Forms",
        icon: "ri-file-list-3-line",
        link: "/#",
        subItems: [
            { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
            { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
            { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
            { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
            { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
            { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
            { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
            { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
            { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
            { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
            { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
            { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
            { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
        ],
    },
    {
        id: "tables",
        label: "Tables",
        icon: "ri-layout-grid-line",
        link: "/#",
        subItems: [
            { id: "basictables", label: "Basic Tables", link: "/tables-basic", parentId: "tables" },
            { id: "gridjs", label: "Grid Js", link: "/tables-gridjs", parentId: "tables" },
            { id: "listjs", label: "List Js", link: "/tables-listjs", parentId: "tables" },
            { id: "datatables", label: "Datatables", link: "/tables-datatables", parentId: "tables" },
        ],
    },
    {
        id: "charts",
        label: "Charts",
        icon: "ri-pie-chart-line",
        link: "/#",
        subItems: [
            {
                id: "apexcharts",
                label: "Apexcharts",
                link: "/#",
                isChildItem: true,
                childItems: [
                    { id: 1, label: "Line", link: "/charts-apex-line" },
                    { id: 2, label: "Area", link: "/charts-apex-area" },
                    { id: 3, label: "Column", link: "/charts-apex-column" },
                    { id: 4, label: "Bar", link: "/charts-apex-bar" },
                    { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
                    { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
                    { id: 7, label: "Candlstick", link: "/charts-apex-candlestick" },
                    { id: 8, label: "Boxplot", link: "/charts-apex-boxplot" },
                    { id: 9, label: "Bubble", link: "/charts-apex-bubble" },
                    { id: 10, label: "Scatter", link: "/charts-apex-scatter" },
                    { id: 11, label: "Heatmap", link: "/charts-apex-heatmap" },
                    { id: 12, label: "Treemap", link: "/charts-apex-treemap" },
                    { id: 13, label: "Pie", link: "/charts-apex-pie" },
                    { id: 14, label: "Radialbar", link: "/charts-apex-radialbar" },
                    { id: 15, label: "Radar", link: "/charts-apex-radar" },
                    { id: 16, label: "Polar Area", link: "/charts-apex-polar" },
                ]
            },
            { id: "chartjs", label: "Chartjs", link: "/charts-chartjs", parentId: "charts" },
            { id: "echarts", label: "Echarts", link: "/charts-echarts", parentId: "charts" },

        ],
    },
    {
        id: "icons",
        label: "Icons",
        icon: "ri-compasses-2-line",
        link: "/#",
        subItems: [
            { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
            { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
            { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
            { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
            { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
            { id: "crypto", label: "Crypto SVG", link: "/icons-crypto", parentId: "icons" },
        ],
    },
    {
        id: "maps",
        label: "Maps",
        icon: "ri-map-pin-line",
        link: "/#",
        subItems: [
            { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
            { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
            { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
        ],
    },
    {
        id: "multilevel",
        label: "Multi Level",
        icon: "ri-share-line",
        link: "/#",
        subItems: [
            { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
            {
                id: "level1.2",
                label: "Level 1.2",
                link: "/#",
                isChildItem: true,
                childItems: [
                    { id: 1, label: "Level 2.1", link: "/#" },
                    {
                        id: "level2.2",
                        label: "Level 2.2",
                        link: "/#",
                        isChildItem: true,
                        childItems: [
                            { id: 1, label: "Level 3.1", link: "/#" },
                            { id: 2, label: "Level 3.2", link: "/#" },
                        ]
                    },
                ]
            },
        ],
    },
];
export default menuItems;