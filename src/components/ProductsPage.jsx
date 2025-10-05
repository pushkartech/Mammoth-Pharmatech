import React, {useState} from "react";
import '../styles/ProductsPage.css';
import ProductPageSection from "./ProductPageSection";

function ProductsPage(){
    const [openSectionIndex, setOpenSectionIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenSectionIndex(prev => (prev === index ? null : index));
    };

    const categories = [
        // Cleanroom Infrastucture
        {
            title:'Cleanroom Infrastructure',
            description: 'We deliver cutting-edge cleanroom infrastructure systems designed for the pharmaceutical, biotech, and healthcare sectors. These modular cleanroom environments are engineered for precision, flexibility, and GMP compliance, ensuring minimal contamination and enhanced process control in critical production areas.',
            products: [
                {
                    img1: '/images/Modular-Panels.png',
                    title: 'Panel Type: Pre-fabricated Modular Panels (GI Powder Coated)',
                    description: 'Customizable cleanroom solutions with rapid deployment capabilities for pharmaceutical manufacturing..',
                    completeDetails: {
                        image:'/images/Modular-Panels.png',
                        keyFeatures: [
                            'Designed for quick installation and future expandability in cleanroom environments.',
                            'Offers high strength, durability, and clean finish with anti-microbial powder coating.',
                            'Seamless joint designs reduce particle accumulation and simplify cleaning protocols.',
                            'Compatible with CGMP and ISO standards for pharmaceutical-grade construction.',
                        ],
                        // placementInfo: 'placement information will come here',
                        // availableTypes: [
                        //     'Type1 of Modular',
                        //     'Type2 ',
                        //     'Type3 ',
                        //     'Type4 ',
                        //     'Type5 '
                        // ]
                    }
                },
                // {
                //     title: 'Substrate Material: Galvanized Iron Sheet (GI)',
                //     description: '.',
                //     completeDetails: {
                //         image:'src link',
                //         keyFeatures: [
                //             'Provides excellent corrosion resistance for long-term structural stability.',
                //             'Maintains flatness and strength for sandwich panel constructions.',
                //             'Ideal for high-humidity or temperature-sensitive areas.',
                //             'Offers superior bonding with insulation cores for airtight integrity. ',
                //         ],
                //         placementInfo: 'placement information will come here',
                //         availableTypes: [
                //             'Type1',
                //             'Type2',
                //             'Type3',
                //             'Type4',
                //             'Type5'
                //         ]
                //     }
                // },
                // {
                //     title: 'Cleanroom Doors',
                //     description: 'Specialized doors designed to maintain pressure differentials and prevent contamination.',
                //     completeDetails: {
                //         image:'src link',
                //         keyFeatures: [
                //             'Feature 1',
                //             'Feature 2',
                //             'Feature 3',
                //             'Feature 4',
                //             'Feature 5',
                //             'Feature 6',
                //             'Feature 7'
                //         ],
                //         placementInfo: 'placement information will come here',
                //         availableTypes: [
                //             'Type1',
                //             'Type2',
                //             'Type3',
                //             'Type4',
                //             'Type5'
                //         ]
                //     }
                // },
            ]
        },
        // Process Machinery
        {
            title:'Process Machinery',
            description: 'We offer high-efficiency processing equipment engineered for precision and reliability in pharmaceutical production. Our range includes advanced systems for blending, granulation, mixing, drying, and more—designed to support consistent batch quality, GMP compliance, and scalable operations.',
            products: [
                {   
                    img1: '/images/RMG.jpg',
                    title: 'Rapid Mixer Granulator (RMG)',
                    description: 'Mixing and wet granulation of powder blends.',
                    completeDetails: {
                        image:'/images/RMG.jpg',
                        keyFeatures: [
                            '- Ensures rapid and uniform mixing and granulation of powders.',
                            '- High-speed impeller and chopper deliver precise granule formation.',
                            '- Short batch time improves manufacturing productivity.',
                            '- Available in lab, pilot, and production-scale versions.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {   img1: '/images/FBD.png',
                    title: 'Fluid Bed Dryer (FBD)',
                    description: 'Drying of wet granules using fluidization technology.',
                    completeDetails: {
                        image:'/images/FBD.png',
                        keyFeatures: [
                            '- Uniform drying using hot air fluidization for wet granules',
                            '- Equipped with HEPA filters for clean drying environments.',
                            'Integrated explosion vents for safety with solvent-based operations.',
                            'Available with WIP (Wash-in-Place) system for ease of cleaning.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/multiMill.jpg',
                    title: 'Multi Mill',
                    description: 'Wet and dry granulation, pulverization, and mixing.',
                    completeDetails: {
                        image:'/images/multiMill.jpg',
                        keyFeatures: [
                            'Ideal for wet and dry granulation, pulverization, and size reduction.',
                            'Oscillating rotor allows consistent particle size output.',
                            'Offers multiple screen types for product flexibility.',
                            'Ensures dust-free, compact operation with low maintenance.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/vibro-sifter.png',
                    title: 'Vibro Sifter',
                    description: 'Sieving and grading of powder or granules.',
                    completeDetails: {
                        image:'/images/vibro-sifter.png',
                        keyFeatures: [
                            'Used for grading, sieving, and particle separation in powders/granules.',
                            'Comes with single or multi-deck options for high throughput.',
                            'Stainless steel contact parts ensure GMP compliance.',
                            'Vibratory mechanism reduces operator fatigue and product damage.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/DCB.jpg',
                    title: 'Double Cone Blender / V-Blender',
                    description: 'Uniform blending of dry powder and granules.',
                    completeDetails: {
                        image:'/images/DCB.jpg',
                        keyFeatures: [
                            'Uniformly blends dry powder or granules through gentle tumbling.',
                            'Available with optional intensifier bar for cohesive powders.',
                            'Highly effective in minimizing segregation and dead zones.',
                            'Easy to clean and maintain with mirror-polished interiors.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/oct-blender.jpg',
                    title: 'Octagonal Blender',
                    description: 'Ideal for large volume, gentle mixing of dry powders and granules.',
                    completeDetails: {
                        image:'/images/oct-blender.jpg',
                        keyFeatures: [
                            'Ideal for fragile or sensitive material mixing at slower speeds.',
                            'Offers gentle blending for bulk quantities without powder loss.',
                            'Minimal maintenance and low power consumption.',
                            'Can be integrated with bin charging systems.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/conta-blender.jpg',
                    title: 'Conta Blender',
                    description: 'Closed system blending of dry powders using detachable bins (IBC).',
                    completeDetails: {
                        image:'/images/conta-blender.jpg',
                        keyFeatures: [
                            'Uses Interchangeable Bin Containers (IBC) for closed transfer.',
                            'Eliminates dust generation, improving cleanroom safety.',
                            'PLC-based control for precision and repeatability.',
                            'Ensures material traceability and containment.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/tray-dryer.jpg',
                    title: 'Tray Dryer',
                    description: 'Drying of granules and powders using heated air.',
                    completeDetails: {
                        image:'/images/tray-dryer.jpg',
                        keyFeatures: [
                            'Uses hot air convection for drying granules, powder, or bulk drugs.',
                            'Operates on electrical or steam heating, based on user preference.',
                            'Customizable tray configurations for batch flexibility',
                            'Advanced temperature control ensures uniform drying.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/coating-pan.jpg',
                    title: 'Coating Pan',
                    description: ' Film or sugar coating of tablets.',
                    completeDetails: {
                        image:'/images/coating-pan.jpg',
                        keyFeatures: [
                            'Designed for sugar and film coating of tablets and pellets.',
                            'Comes with perforated or solid pans depending on the coating process.',
                            'Integrates a spray gun and hot air system for uniform application.',
                            'Easy discharge and cleaning through tilting mechanisms.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
            ]
        },
        // Post Process Machinery
        {
            title:'Post Process Machinery',
            description: 'Our post-processing systems ensure that the final stages of tablet and capsule production are completed with precision, safety, and compliance. These machines are optimized for high-speed operation, ease of cleaning, and minimal human intervention.',
            products: [
                {
                    img1: 'https://www.karnavatiengineering.com/admin/product/0_458e8562.png',
                    title: '1. Tablet Compression Machine',
                    description: 'Converts granulated powders into uniform tablets at high speed.',
                    completeDetails: {
                        image:'https://www.karnavatiengineering.com/admin/product/0_458e8562.png',
                        keyFeatures: [
                            ' Available in single and double rotary types for different capacities.',
                            'Integrates pre-compression and main compression stations.',
                            'Supports turret lifts and force feeders for continuous production.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: 'https://cdn.labx.com/v2/landing_pages/4117/5f80a278-7c35-4ea2-a0f5-922c11d0d045.webp',
                    title: '2. Tablet Deduster',
                    description: 'Removes residual powder from compressed tablets efficiently.',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Uses vibratory motion to reduce surface contamination.',
                            'Compact and mobile for easy integration in compression lines.',
                            'GMP design with easy dismantling and cleaning.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/metal-detector.webp',
                    title: '3. Metal Detector',
                    description: 'Detects and rejects ferrous, non-ferrous, and stainless steel particles.',
                    completeDetails: {
                        image:'/images/metal-detector.webp',
                        keyFeatures: [
                            'Ensures final product is free of metallic contamination.',
                            'Can be installed post compression or filling.',
                            'Equipped with auto-reject mechanism for compliance.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/tablet-coating.jpg',
                    title: '4. Tablet Coating Machine',
                    description: 'Applies uniform coating (sugar or film) to tablets using automated systems.',
                    completeDetails: {
                        image:'/images/tablet-coating.jpg',
                        keyFeatures: [
                            'Comes with perforated pan or auto coater configuration.',
                            'Features spray gun, hot air blower, and programmable cycles.',
                            'Enhances stability, taste masking, and product identification.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/capsule-filling.jpg',
                    title: '5. Capsule Filling Machine',
                    description: 'Fills powders, granules, or pellets into hard gelatin capsules.',
                    completeDetails: {
                        image:'/images/capsule-filling.jpg',
                        keyFeatures: [
                            'Offered in manual, semi-automatic, and fully automatic models.',
                            'Dosing discs and tamping systems ensure uniform fill weight.',
                            'Compatible with different capsule sizes and fill materials.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/capsule-polishing.jpg',
                    title: '6. Capsule Polishing Machine',
                    description: 'Cleans and polishes filled capsules using soft brushes.',
                    completeDetails: {
                        image:'/images/capsule-polishing.jpg',
                        keyFeatures: [,
                            'Improves aesthetic appeal and eliminates external dust.',
                            'Continuous feed and discharge system improves efficiency.',
                            'Constructed with stainless steel for cGMP compliance.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/inspection-conveyor.jpg',
                    title: '7. Inspection Conveyor / Visual Inspection Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/inspection-conveyor.jpg',
                        keyFeatures: [
                            'Allows manual or camera-based visual inspection of tablets and capsules.',
                            'Includes adjustable speed belts, lighting, and magnifiers.',
                            'Helps in detecting defects like cracks, color variation, and chips.',
                            'Can be customized for multi-view inspection.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/blister-packing.jpg',
                    title: '8. Blister Packing Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/blister-packing.jpg',
                        keyFeatures: [
                            'Encapsulates tablets/capsules in aluminum or PVC blister packs.',
                            'Available in semi-automatic and fully automatic configurations.',
                            '- Features forming, sealing, perforating, and punching stations.',
                            '- Ensures product protection and branding compatibility.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/strip-packing.jpg',
                    title: '9. Strip Packing Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/strip-packing.jpg',
                        keyFeatures: [
                            'Seals tablets or capsules between two aluminum foil strips.',
                            '- Ideal for moisture-sensitive and light-sensitive medications.',
                            '- Compact footprint with automated feeding and sealing.',
                            '- Delivers leak-proof, tamper-evident packaging.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/bottle-filling-line.jpg',
                    title: '10. Bottle Filling Line (For solid dosage)',
                    description: '',
                    completeDetails: {
                        image:'/images/bottle-filling-line.jpg',
                        keyFeatures: [
                            'Automates bottle unscrambling, filling, sealing, and labeling.',
                            '- Tablet counting machines with high-speed optical sensors.',
                            '- Includes desiccant inserter and induction/seal capper.',
                            '- Integrated labeling and cartoning modules ensure retail readiness.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                {
                    img1: '/images/carton-wrap.jpg',
                    title: '11. Cartoning & Overwrapping Machines',
                    description: '',
                    completeDetails: {
                        image:'/images/carton-wrap.jpg',
                        keyFeatures: [
                            'Packs primary packs into folding cartons and overwraps them.',
                            '- Supports automatic leaflet insertion and batch coding.',
                            '- Ensures secondary packaging for logistics and compliance.',
                            '- Reduces manual handling while improving throughput.',
                        ],
                        placementInfo: 'placement information will come here',
                        availableTypes: [
                            'Type1',
                            'Type2',
                            'Type3'
                        ]
                    }
                },
                
            ]
        },
        // Cleanroom Equipment
        {
            
            title:'Cleanroom Equipment',
            description: 'Our cleanroom equipment ensures particle control, proper material handling, and personnel safety within classified environments. Each unit is purpose-built to support cleanroom operations while maintaining stringent regulatory compliance.',
            products: [
                {
                    img1: '/images/LAF.jpg',
                    title: 'Laminar Air Flow (LAF) Unit',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Provides unidirectional HEPA-filtered air for localized sterile workspaces.',
                            'Available in vertical and horizontal configurations.',
                            'Offers ISO Class 5 environment for product/process protection.',
                            'Ideal for dispensing, sampling, and aseptic operations.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Biosafety Cabinet (BSC)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Protects personnel, environment, and product when handling biohazards.',
                            'Offered in Class II A2, B2, and Class III for varying risk levels.',
                            'Negative pressure airflow with HEPA filtration ensures containment.',
                            'Suitable for cytotoxic drugs, microbiology, and tissue culture labs.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Pass Box / Dynamic Pass Box',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Facilitates material transfer between different cleanroom grades.',
                            'Interlocked doors prevent cross-contamination.',
                            'Dynamic version comes with HEPA filters and air blowers.',
                            'UV sterilization available for biological safety.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Air Shower',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Removes surface contaminants from personnel entering the cleanroom.',
                            'High-velocity jets of filtered air dislodge particulates.',
                            'Self-contained, stainless steel chamber with safety sensors.',
                            'Reduces total particle load entering critical zones.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Garment Storage Cabinet',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Stores and maintains cleanliness of cleanroom apparel.',
                            'Provides filtered air circulation with optional UV light.',
                            'Available in static and dynamic configurations.',
                            'Built with SS304 or SS316L with mirror finish.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Sampling / Dispensing Booth (RLAF)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Ensures operator and product protection during powder handling.',
                            'Offers vertical unidirectional airflow and built-in exhaust.',
                            'Integrated filtration system captures hazardous dust.',
                            'Used for weighing, sampling, and dispensing raw materials.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Static Pass Box',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Allows materials to pass between clean and less clean areas without active airflow.',
                            'Equipped with electromagnetic interlocks for contamination control.',
                            'Simple and economical alternative to dynamic pass boxes.',
                            'Often used in support zones like change rooms and stores.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Cleanroom Trolley / SS Furniture',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Non-shedding, corrosion-resistant furniture tailored for cleanrooms.',
                            'Includes tables, lockers, stools, and instrument stands.',
                            'Made from SS304/316L and polished for easy decontamination.',
                            'Designed for GMP zones to support ergonomic, hygienic workflows.',

                        ],
                    }
                },
            ]
        },
        // Sterile line Solutions
        {
            title:'Sterile Line Solutions',
            description: 'Turnkey solutions for aseptic processing of injectables, ophthalmics, and sterile liquids. Designed for contamination-free, high-speed filling lines with compliance to international regulatory norms.',
            products: [
                {
                    img1: '',
                    title: 'Vial Washing Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            '- Multi-stage washing of vial interior and exterior using purified water and air.',
                            'Ensures pyrogen-free, particle-free vials before sterilization.',
                            'Supports different vial sizes and formats.',
                            'Available with infeed and outfeed automation.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Sterilizing & Depyrogenation Tunnel',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Uses dry heat and HEPA-filtered air to depyrogenate washed vials',
                            'Validated for endotoxin reduction and sterilization.',
                            'Seamlessly integrates with vial washers and fillers.',
                            'PID controlled zones for consistent temperature control.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Liquid Filling & Stoppering Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'High-precision servo-driven dosing system for liquid injectables.',
                            'Insert rubber stoppers under sterile laminar conditions.',
                            'Designed with minimal contact parts to reduce contamination risk.',
                            'Compact footprint with scalable throughput.',

                        ],
                    }
                },
                {
                    img1: 'Vial Capping Machine',
                    title: '',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Seals vials with aluminum caps using rotary or linear systems.',
                            'Supports tear-off or flip-off cap styles.',
                            'Maintains sterility in aseptic zones.',
                            'Torque adjustable system ensures uniform sealing.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'External Vial Washer',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Cleans vial exteriors post-filling and capping.',
                            'Removes residual liquids, particles, and labels.',
                            'Optional air knives and drying tunnels.',
                            'Prevents contamination during secondary packaging.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Inspection Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Detects particles, cracks, and cosmetic defects in vials.',
                            'Available in manual, semi-automatic, and camera-based systems.',
                            'High-speed rejection and batch traceability',
                            'Ensures patient safety and regulatory compliance.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Sterile Powder Filling Machine',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Doses lyophilized or dry powder into sterile vials under nitrogen atmosphere.',
                            'Supports automatic stoppering and weight feedback loop.',
                            'Suitable for oncology, hormones, and sensitive products.',
                            'Compliant with cGMP and PIC/S guidelines.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Lyophilizer (Freeze Dryer)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Removes moisture from injectables via sublimation under vacuum.',
                            'Supports bulk and vial-based lyophilization',
                            'Integrated with CIP (Cleaning-In-Place) and SIP (Sterilization-In-Place).',
                            'Ideal for biologicals, vaccines, and antibiotics.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'RABS / Isolator Systems',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Physical barrier systems that ensure aseptic integrity.',
                            'Reduces human intervention and contamination risk.',
                            'Suitable for toxic or high-potency products.',
                            'Integrated glove ports, hydrogen peroxide sterilization optional.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Conveyor System',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Transfers vials between equipment without vibration or breakage.',
                            'Laminar flow-compatible conveyors with smooth SS belts.',
                            'Adjustable speeds and buffer zones.',
                            'Reduces downtime between process stages.',

                        ],
                    }
                },
            ]
        },
        // Laboratory Equipment
        {
            title:'Laboratory Equipment',
            description: 'We provide reliable, high-precision lab equipment that supports product R&D, analytical testing, and quality control in pharmaceutical and biotech labs.',
            products: [
                {
                    img1: '',
                    title: 'Stability Chambers',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Maintain specific temperature and humidity for shelf-life studies.',
                            'Compliant with ICH guidelines (Zone I-IV).',
                            'Multi-chamber and programmable models available.',
                            'Suitable for long-term and accelerated stability testing.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'UV-Visible Spectrophotometer',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Performs quantitative and qualitative drug analysis.',
                            'Single or double beam with auto wavelength calibration.',
                            'Pharmacopoeial compliance with data logging.',
                            'Supports kinetic studies and spectrum scanning.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'pH Meter',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Measures hydrogen ion concentration with high accuracy.',
                            'Auto temperature compensation and calibration features.',
                            'Compatible with various sample types.',
                            'Essential for formulation and analytical development.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Dissolution Tester',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Evaluates drug release profile under simulated conditions.',
                            'USP Apparatus I (basket) and II (paddle) supported.',
                            'Includes auto-sampling, heating, and RPM control.',
                            'Used extensively for generic and innovative drug testing.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Disintegration Tester',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Determines time taken for tablet/capsule to break in aqueous solution.',
                            'Critical for bioavailability and quality validation.',
                            'Multi-station units with digital timers and sensors.',
                            'Meets global pharmacopoeia standards (USP, IP, BP).',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Friability Tester',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Measures mechanical resistance of tablets to abrasion.',
                            'Drum rotates at fixed speed and time.',
                            'Automatically calculates weight loss percentage.',
                            'Ensures tablets can withstand handling and shipping.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Analytical Balances',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Highly sensitive instruments with readability up to 0.0001 mg.',
                            'Anti-vibration feet and glass draft shields.',
                            'Automatic internal calibration for accuracy.',
                            'Used in research, formulation, and QC labs.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Hot Air Oven / Muffle Furnace',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Heats up to 3001200C for sterilization and material testing.',
                            'Digital PID controllers ensure temperature uniformity.',
                            'Used for glassware drying and ash content determination.',
                            'Optional programmable timers for continuous operations.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Magnetic Stirrer / Heating Mantle',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Stirring and heating liquids in beakers or flasks.',
                            'Used in titration, sample prep, and dissolution.',
                            'Temperature and speed controllable models.',
                            'Available in multiple volume capacities.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Autoclave',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Steam sterilizer for culture media, glassware, and instruments.',
                            'Vertical and horizontal configurations.',
                            'Built-in safety valve, timer, and pressure gauge.',
                            'Available in electric and steam-based versions.',

                        ],
                    }
                },
                {
                    img1: '',
                    title: 'LAF for Lab',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Particle-free airflow protects sensitive test procedures.',
                            'Common in microbiology and analytical labs.',
                            'UV and HEPA filtered systems.',
                            'Floor-mounted or bench-top versions available.',
                        ],
                    }
                },
                
            ]
        },
        // HVAC Systems
        {
            title:'HVAC Systems',
            description: 'Critical air handling systems designed to control temperature, humidity, airflow, and pressure differentials in pharmaceutical cleanrooms and production areas.',
            products: [
                {
                    img1: '',
                    title: 'AHUs (Air Handling Units)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Condition, filter, and distribute air throughout clean zones.',
                            'Equipped with pre-filters, HEPA/ULPA filters, and control dampers.',
                            'Zoned air supply for energy efficiency and contamination control.',
                            'Integrates with BMS for performance monitoring.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Chillers',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Provides chilled water for air conditioning or process cooling.',
                            'Air-cooled or water-cooled depending on project size.',
                            'Supports 24/7 temperature regulation.',
                            'Essential for HVAC performance and lab equipment cooling.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Dehumidifiers / Humidifiers',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Maintain RH levels required for cleanroom or product stability.',
                            'Desiccant or refrigeration-based models available.',
                            'Critical for hygroscopic material processing.',
                            'Integrated sensors ensure automated RH control.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Air Filters (HEPA, ULPA)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Capture 99% of airborne particles.',
                            'Used in AHUs, LAFs, pass boxes, and sterile lines.',
                            'ULPA for ultra-clean zones like aseptic filling.',
                            'Replaceable cassettes with DOP test ports.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Ducting Systems (GI, SS, Fabric)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Transmit conditioned air across cleanroom zones.',
                            'Fabric or stainless-steel ducting based on application.',
                            'Leak-tested and pressure-rated designs.',
                            'Internal insulation minimizes noise and energy loss.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'FCUs (Fan Coil Units)',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Localized air temperature control in labs or smaller spaces.',
                            'Silent, low-maintenance with simple thermostat control.',
                            'Compatible with centralized chilled water circuits.',
                            'Standalone or ceiling-mounted configurations.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'VAV/VRV Systems',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'VAV: Variable Air Volume systems for zone-wise airflow control.',
                            'VRV: Refrigerant-based variable systems with energy efficiency.',
                            'Offer precise control over air conditioning needs.',
                            'Widely used in non-sterile pharma zones and offices.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Air Curtains & Pressure Dampers',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Air curtains block air exchange between rooms while allowing movement.',
                            'Pressure dampers maintain cleanroom pressure differentials.',
                            'Help prevent cross-contamination and energy loss.',
                            'Installed at doorways and HVAC plenum zones.',
                        ],
                    }
                },
                
            ]
        },
        // Utility systems Machinery
        {
            title:'Utility Systems Machinery',
            description: 'Industrial utilities for clean, safe, and uninterrupted operation of pharmaceutical processes.',
            products: [
                {
                    img1: '',
                    title: 'Compressed Air Systems',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Compressors, dryers, and filters to supply clean, oil-free air.',
                            'Used in pneumatic systems, fluid beds, and packaging machines.',
                            'Inline filters ensure removal of moisture, oil, and particles.',
                            'Surge tanks and pressure regulators maintain consistency.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Steam Generation',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Boilers and steam traps produce dry, pharma-grade steam.',
                            'Used for sterilization, CIP/SIP systems, and jacketed vessels.',
                            'Available in electric or gas-fired models.',
                            'Features include pressure regulation, condensate return, and redundancy.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Water Systems',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'RO Plants: Multi-stage purification systems to remove salts and contaminants.',
                            'WFI: Distillation or membrane-based Water for Injection system.',
                            'PW: Purified Water loop with UV, EDI, and storage skids.',
                            'DM Water: Removes mineral ions for cleaning and non-critical applications.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Vacuum Systems',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Centralized vacuum pumps for tablet dedusting, capsule filling, and filtration.',
                            'Oil-lubricated or dry-type depending on process requirements.',
                            'High flow rates and low noise output.',
                            'Equipped with buffer tanks and filters.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Nitrogen Generation',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'PSA-based systems separate nitrogen from atmospheric air.',
                            'Supplies inert atmosphere for packaging, drying, and filling.',
                            'High purity output with oxygen analyzer and safety interlocks.',
                            'Available in skid-mounted, modular formats.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: '',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            '',
                            '',
                            '',
                            '',
                        ],
                    }
                },
                
            ]
        },
        // Pharma Facility Design Consultancy
        {
            title:'Pharma Facility Design Consultancy',
            description: 'Complete planning, engineering, and execution advisory to build future-ready, compliant pharmaceutical facilities',
            products: [
                {
                    img1: '',
                    title: 'Concept Design',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Site master planning aligned with WHO, USFDA, and EU-GMP norms.',
                            'Evaluation of feasibility, capacity, and environmental compliance.',
                            'Optimizes land usage and production flow.',
                            'Designed for scalability and upgrade paths.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Layout Planning',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Zone classification and workflow analysis.',
                            'Minimizes cross-contamination with man/material movement paths.',
                            'HVAC zoning, AHU placement, and duct routing defined.',
                            'Ensures audit-readiness for international approvals.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Detailed Engineering',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Complete architectural, HVAC, utility, piping, civil, and electrical drawings.',
                            'Modular panel and cleanroom detailing.',
                            'BMS/EMS integration and control system layout.',
                            'Vendor coordination and BOQ finalization.',
                        ],
                    }
                },
                {
                    img1: '',
                    title: 'Regulatory Compliance Support',
                    description: '',
                    completeDetails: {
                        image:'/images/',
                        keyFeatures: [
                            'Support for preparing URS, DQ, and validation protocols.',
                            'Design validation based on cGMP, PIC/S, MHRA, and local FDA guidelines.',
                            'Project documentation aligned with QMS systems.',
                            'Cross-disciplinary support for audits and inspection readiness.',
                        ],
                    }
                },
                
            ]
        },
        
    ]

    if (categories.length === 0) {
    // Minimal fallback so UI doesn't break
    categories.push({
      title: 'No sections found',
      description: '',
      products: []
    });
  }
    return (
        <>
        <section class="hero-products">
                <h1>Our Product Offerings</h1>
                <p>Comprehensive solutions tailored for pharmaceutical, biotechnology, and healthcare facilities — ensuring cGMP compliance, operational efficiency, and future-ready scalability.</p>
        </section>
        <main>
            {categories.map((section, idx)=>{
                return <ProductPageSection
                key={section.title + idx} 
                title={section.title} 
                description = {section.description} 
                products={section.products} 
                isOpen={openSectionIndex === idx}
                onToggle={() => toggleSection(idx)}
                />
            })}
        </main>
        
        </>
    )
}

export default ProductsPage;