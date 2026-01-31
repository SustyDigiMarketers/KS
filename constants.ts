import { ServiceItem, ProductItem, ClientItem, TestimonialItem, FAQItem, NavItem } from './types';

export const COMPANY_DETAILS = {
  name: "Kanishk Systems",
  phone: "+91 96002 60193",
  email: "support@kanishksystems.com",
  address: "1/455, B5, RKS Complex, Pollachi Main Road, Malumichampatti, Coimbatore – 641050",
  gstin: "33ECBPM3795K1Z8",
  bank: {
    name: "Federal Bank – Sundarapuram Branch",
    accountNo: "23510200004886",
    ifsc: "FDRL0002351"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'laptop',
    title: 'Laptop Sales & Chip-Level Service',
    description: 'Expert diagnostics and repair for all major laptop brands. We handle broken screens, keyboard replacements, and complex motherboard chip-level servicing.',
    longDescription: 'Our Laptop Sales & Chip-Level Service is designed to bring your dead or slow devices back to life. Unlike standard service centers that often suggest replacing expensive motherboards, our lab is equipped with advanced BGA rework stations and diagnostic tools to repair the motherboard itself. This chip-level precision saves you up to 60% of repair costs. We handle complex issues like no-power, charging IC failures, bios programming, and graphics chip issues. Additionally, we stock genuine screens, keyboards, and batteries for almost all models including Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks.',
    features: ['Motherboard Chip-level Service', 'Broken Screen & Hinge Replacement', 'High-Speed SSD & RAM Upgrades', 'OS Installation & Data Recovery', 'Original Battery & Adapter Replacement'],
    benefitList: [
      'Up to 60% cost savings compared to motherboard replacement.',
      '90-day warranty on all chip-level repairs.',
      'Genuine spare parts sourced directly from OEMs.',
      'Express 24-hour delivery for screen and battery replacements.'
    ],
    ctaText: 'Book Laptop Service',
    iconName: 'Laptop'
  },
  {
    id: 'desktop',
    title: 'Desktop Sales & Custom Builds',
    description: 'High-performance gaming rigs, professional workstations, and reliable office desktops. We build, maintain, and upgrade systems to your exact needs.',
    longDescription: 'From high-FPS gaming rigs to reliable office workstations, our Desktop solutions are tailored to your specific performance needs. We don\'t just assemble parts; we engineer systems. Our custom builds focus on optimal airflow, thermal management, and future upgradability. For businesses, we provide bulk supply of branded desktops and thin clients. Our maintenance services include deep dust cleaning, thermal paste re-application, and hardware health checks to prevent sudden failures.',
    features: ['Custom Gaming & Editing PC Builds', 'Corporate Office Desktop Supply', 'Annual Maintenance Contracts (AMC)', 'Hardware Troubleshooting & Upgrades', 'Licensed Software Installation'],
    benefitList: [
      'Custom configurations tailored to your budget and usage.',
      'Cable management and thermal optimization included.',
      'On-site troubleshooting for business clients.',
      'Comprehensive warranty support on all components.'
    ],
    ctaText: 'Get a Custom Quote',
    iconName: 'Monitor'
  },
  {
    id: 'networking',
    title: 'Enterprise Networking Solutions',
    description: 'Structured cabling, server rack management, and secure Wi-Fi zones. We design robust infrastructure for seamless business connectivity.',
    longDescription: 'In the digital age, a reliable network is as critical as electricity. Our Enterprise Networking Solutions cover the entire spectrum of connectivity. We specialize in structured cabling using high-quality Cat6 and Fiber optic cables, ensuring gigabit speeds across your campus. We configure managed switches, set up secure VLANs for different departments, and deploy enterprise-grade firewalls to protect your data. Our Wi-Fi solutions ensure dead-zone-free coverage for seamless roaming within your office or factory.',
    features: ['Structured LAN Cabling (Cat6/Fiber)', 'Server Rack Assembly & Dressing', 'Cisco/D-Link Switch Configuration', 'Long-range Wi-Fi Access Points', 'Firewall & Network Security'],
    benefitList: [
      'Certified cabling standards ensuring zero packet loss.',
      'Scalable network architecture for future expansion.',
      'Secure guest Wi-Fi separation for office visitors.',
      'Clean and labeled rack dressing for easy maintenance.'
    ],
    ctaText: 'Request Site Survey',
    iconName: 'Network'
  },
  {
    id: 'cctv',
    title: 'CCTV Surveillance & Security',
    description: 'Advanced surveillance with HD IP cameras, night vision, and mobile remote viewing. Secure your home and business premises 24/7.',
    longDescription: 'Security is non-negotiable. Our CCTV Surveillance services provide a 360-degree safety shield for your property. We install the latest IP cameras with 4K resolution, color night vision, and AI-based motion detection. Our systems are configured for smart alerts – sending notifications to your phone if an intrusion is detected. We also set up secure remote viewing, allowing you to monitor your premises from anywhere in the world. Whether it\'s a 4-camera home setup or a 64-camera industrial deployment, we have the expertise.',
    features: ['IP & Analog Camera Installation', 'DVR/NVR Configuration with Cloud Support', 'Remote Mobile Viewing Setup', 'Night Vision & Motion Detection', 'Existing System Servicing & AMC'],
    benefitList: [
      'Crystal clear footage with night vision technology.',
      'Remote monitoring on your smartphone from anywhere.',
      'Professional conduit wiring for a neat look.',
      'One-year free service support on new installations.'
    ],
    ctaText: 'Secure Your Premises',
    iconName: 'Camera'
  },
  {
    id: 'biometric',
    title: 'Biometric & Access Control',
    description: 'Automated attendance systems and restricted door access using fingerprint, face recognition, and RFID technology.',
    longDescription: 'Automate your workforce management with our Biometric & Access Control systems. Say goodbye to proxy attendance and manual registers. Our advanced fingerprint and facial recognition terminals integrate seamlessly with payroll software, providing accurate logs of check-in and check-out times. We also install electromagnetic door locks restricted by biometrics or RFID cards, ensuring that only authorized personnel can access sensitive areas like server rooms or inventory storage.',
    features: ['Fingerprint & Face Attendance Machines', 'Magnetic Door Access Control Systems', 'Payroll Software Integration', 'Smart Card/RFID Solutions', 'Multi-location Centralized Data'],
    benefitList: [
      'Eliminate buddy punching and time theft.',
      'Seamless integration with HR and payroll software.',
      'Contactless face recognition for hygiene safety.',
      'Secure electromagnetic locks for physical security.'
    ],
    ctaText: 'Automate Attendance',
    iconName: 'Fingerprint'
  }
];

export const PRODUCTS: ProductItem[] = [
  { id: 'p1', title: 'Dell Latitude 5490 (Refurbished)', specs: 'Intel Core i5 8th Gen | 8GB DDR4 RAM | 256GB NVMe SSD | 14" FHD Display', category: 'Laptop' },
  { id: 'p2', title: 'Hikvision 2MP Outdoor Bullet Camera', specs: '1080p FHD | IP67 Waterproof | 30m IR Night Vision | Motion Detection', category: 'CCTV' },
  { id: 'p3', title: 'Dahua 8-Channel DVR', specs: 'H.265+ Compression | Supports 5MP Cameras | 1 SATA HDD up to 6TB', category: 'CCTV' },
  { id: 'p4', title: 'D-Link 24-Port Gigabit Switch', specs: '10/100/1000 Mbps Ports | Rack Mountable | Metal Casing | Plug & Play', category: 'Networking' },
  { id: 'p5', title: 'HP ProDesk 600 G3 Mini', specs: 'Intel Core i5 7th Gen | 16GB RAM | 512GB SSD | Windows 10 Pro', category: 'Desktop' },
  { id: 'p6', title: 'CP Plus Dome Camera', specs: '2.4MP Resolution | 20m IR Range | Indoor Use | Wide Angle Lens', category: 'CCTV' },
  { id: 'p7', title: 'Logitech MK240 Wireless Combo', specs: 'Compact Keyboard & Mouse | 2.4GHz Wireless | 3-Year Battery Life', category: 'Accessories' },
  { id: 'p8', title: 'Seagate BarraCuda 1TB HDD', specs: '7200 RPM | 64MB Cache | SATA 6Gb/s | For Desktop Storage', category: 'Storage' },
  { id: 'p9', title: 'TP-Link Archer C6 Router', specs: 'AC1200 Dual Band | MU-MIMO Technology | 4 External Antennas', category: 'Networking' },
];

export const CLIENTS: ClientItem[] = [
  { id: 'c1', name: 'Sri Venkateswara Textiles', project: 'Complete Factory Networking & Wi-Fi Setup' },
  { id: 'c2', name: 'Guru Bakery Chain', project: 'Multi-branch CCTV Installation (32 Cameras)' },
  { id: 'c3', name: 'Vijay Engineering Industries', project: 'Biometric Attendance System with Door Access' },
  { id: 'c4', name: 'Holy Angels Matric School', project: 'Computer Lab Setup (30 Desktop Units)' },
  { id: 'c5', name: 'Karpagam Medicals', project: 'Billing Software & Hardware Implementation' },
  { id: 'c6', name: 'Green Valley Apartments', project: 'Perimeter Security Surveillance System' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 't1', text: "Kanishk Systems provided incredibly fast service. They installed the CCTV setup for our entire shop within a single day without disrupting our business. The mobile view clarity is amazing.", author: "Ramesh Kumar, Owner, Guru Bakery" },
  { id: 't2', text: "I thought my laptop was dead after a liquid spill. Their chip-level technicians revived it at a fraction of the cost of a new motherboard. Professional and honest service.", author: "Priya S., Software Engineer" },
  { id: 't3', text: "We have been using their AMC services for our office computers for 3 years now. Their response time is excellent, and our downtime has reduced significantly.", author: "Senthil Nathan, Manager, Textile Exports" },
];

export const BENEFITS = [
  "Same-day diagnostics and quick turnaround for urgent laptop & desktop repairs.",
  "Free professional site inspection and consultation for CCTV and Networking projects.",
  "Comprehensive warranty support on all spare parts and new product installations.",
  "Dedicated account managers and priority support for corporate AMC clients.",
  "Affordable and transparent pricing with no hidden service charges.",
  "100% genuine spare parts sourcing directly from authorized distributors.",
  "Expert on-site troubleshooting to minimize system downtime for businesses."
];

export const FAQS: FAQItem[] = [
  { id: 'f1', question: "Do you offer on-site laptop and desktop repair services?", answer: "Yes, we offer doorstep support for minor software issues, part replacements, and diagnostics. For complex chip-level motherboard work, we provide a pickup and drop service to our service center." },
  { id: 'f2', question: "What is the warranty period for your services and products?", answer: "We provide a standard 3-month service warranty on repairs. For new hardware products (like SSDs, screens, Cameras), we honor the full manufacturer warranty which ranges from 1 to 3 years." },
  { id: 'f3', question: "How long does a typical CCTV installation take?", answer: "For a standard 4-camera setup in a home or small shop, installation is usually completed within 1 day. Larger industrial projects depend on cabling complexity and site readiness." },
  { id: 'f4', question: "Do you support Corporate Annual Maintenance Contracts (AMC)?", answer: "Absolutely. We offer tailored AMC packages for offices, schools, and hospitals that include regular preventive maintenance, on-call support, and asset management." },
  { id: 'f5', question: "Can I get a custom PC built for gaming or video editing?", answer: "Yes! We specialize in custom builds. You can give us your budget and requirements, and we will source the best compatible components (GPU, CPU, RAM) to build your dream machine." },
  { id: 'f6', question: "Do you provide data recovery services?", answer: "Yes, we can recover data from crashed hard drives, corrupted OS, and accidentally deleted files. Success rates depend on the physical condition of the drive." },
];