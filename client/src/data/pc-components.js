// Composants disponibles par catégorie
export const components = {
  processors: [
    {
      id: 'i3-12100f',
      name: 'Intel Core i3-12100F',
      price: 109.99,
      specs: {
        generation: '12ème génération',
        frequence: '3.3GHz',
        coeurs: '4',
        socket: 'LGA1700',
        memoire: 'DDR4 et DDR5 jusqu\'à 128GB',
        reference: 'BX8071512100F'
      }
    },
    {
      id: 'i5-12400f',
      name: 'Intel Core i5-12400F',
      price: 189.99,
      specs: {
        generation: 'Alder Lake',
        frequence: '2.5 GHz',
        coeurs: '6',
        tdp: '65W',
        cache: '18MB',
        socket: 'LGA 1700'
      }
    }
  ],
  motherboards: [
    {
      id: 'h610m',
      name: 'PRO H610M-E DDR4',
      price: 89.99,
      specs: {
        chipset: 'H610',
        socket: 'LGA1700',
        format: 'Micro-ATX',
        memoire: 'DDR4'
      }
    },
    {
      id: 'b760-gaming-plus',
      name: 'MSI B760 Gaming Plus WiFi',
      price: 189.99,
      specs: {
        chipset: 'Intel B760',
        socket: 'LGA 1700',
        format: 'ATX',
        wifi: 'Oui'
      }
    }
  ],
  ram: [
    {
      id: 'ddr4-16gb',
      name: 'CORSAIR VENGEANCE LPX DDR4',
      price: 59.99,
      specs: {
        capacite: '16GB (2x8GB)',
        frequence: '3200MHz',
        timings: 'CL16-20-20-38',
        tension: '1.35V',
        compatibilite: 'Intel et AMD',
        couleur: 'Noir',
        reference: 'CMK16GX4M2E3200C16'
      }
    },
    {
      id: 'ddr5-32gb',
      name: 'CORSAIR VENGEANCE RGB DDR5',
      price: 159.99,
      specs: {
        capacite: '32GB (2x16GB)',
        frequence: '6400MHz',
        timings: 'CL36-48-48-104',
        tension: '1.35V',
        rgb: 'Oui',
        reference: 'CMH32GX5M2B6400C36'
      }
    }
  ],
  storage: [
    {
      id: 'ssd-512gb',
      name: 'Ediloca EN605 512GB M.2 SSD',
      price: 49.99,
      specs: {
        type: 'SSD NVMe 1.3 PCIe Gen3 x4 TLC',
        format: 'M.2 2280',
        lecture: '2150 MB/s',
        ecriture: '1600 MB/s',
        capacite: '512GB'
      }
    },
    {
      id: 'nvme-1tb',
      name: 'MSI SPATIUM M450 PCIe 4.0 NVMe M.2',
      price: 89.99,
      specs: {
        capacite: '1 To',
        interface: 'PCIe 4.0 NVMe M.2',
        lecture: '3600 MB/s',
        ecriture: '3000 MB/s',
        garantie: '5 ans'
      }
    }
  ],
  graphics: [
    {
      id: 'gt710',
      name: 'MSI GF GT 710 2GD3H LP',
      price: 49.99,
      specs: {
        memoire: '2GB GDDR3',
        reference: 'GT_710_2GD3H_LP'
      }
    },
    {
      id: 'rtx4060',
      name: 'MSI GeForce RTX 4060 Ventus 2X Black OC',
      price: 329.99,
      specs: {
        memoire: '8GB GDDR6X',
        interface: 'PCI Express Gen 4',
        bus: '128-bit',
        sorties: '3x DP v 1.4a, HDMI 2.1a',
        hdr: 'Supporte 4K & 8K HDR'
      }
    }
  ],
  cases: [
    {
      id: 'mc-x2',
      name: 'Mars Gaming MC-X2 Black',
      price: 39.99,
      specs: {
        type: 'Boîtier PC Gaming ATX',
        facade: 'Acier avec éclairage FRGB',
        ventilateurs: '2 x 12cm avec éclairage FRGB',
        fenetre: 'Latérale complète'
      }
    },
    {
      id: 'forge-m100r',
      name: 'MSI MAG FORGE M100R',
      price: 79.99,
      specs: {
        format: 'Micro ATX',
        ports: '1x USB 3.2, 2x USB 2.0, Audio, Mic',
        slots: '4x PCI-E, 2x 2.5", 2x 3.5"',
        compatibilite: 'Micro ATX / Mini ITX'
      }
    }
  ],
  powersupply: [
    {
      id: 'mpiii650',
      name: 'MARSGAMING MPIII650',
      price: 39.99,
      specs: {
        puissance: '650W',
        type: 'ATX',
        garantie: '5 ans',
        efficacite: '85%'
      }
    },
    {
      id: 'mag-a650bn',
      name: 'MSI MAG A650BN',
      price: 69.99,
      specs: {
        puissance: '650W',
        certification: '80 Plus Bronze',
        taille: 'Compacte',
        type: 'ATX PSU'
      }
    }
  ],
  cooling: [
    {
      id: 'assassinx120',
      name: 'Thermalright AssassinX120 SE ARGB',
      price: 39.99,
      specs: {
        type: 'Refroidisseur d\'air CPU',
        ventilateur: 'Silencieux',
        eclairage: 'ARGB'
      }
    }
  ]
};

// Configurations pré-définies
export const prebuiltConfigs = {
  bureautique: {
    name: 'Configuration Bureautique',
    description: 'Configuration idéale pour le travail de bureau et la navigation web',
    processor: 'i3-12100f',
    motherboard: 'h610m',
    ram: 'ddr4-16gb',
    storage: 'ssd-512gb',
    graphics: 'gt710',
    case: 'mc-x2',
    powersupply: 'mpiii650',
    totalPrice: 439.93,
    amazonLink: 'https://tr.ee/2pECqB'
  },
  multimedia: {
    name: 'Configuration Multimédia (DDR5)',
    description: 'Configuration puissante pour le multimédia et le gaming en DDR5',
    processor: 'i5-12400f',
    motherboard: 'b760-gaming-plus',
    ram: 'ddr5-32gb',
    storage: 'nvme-1tb',
    graphics: 'rtx4060',
    case: 'forge-m100r',
    powersupply: 'mag-a650bn',
    cooling: 'assassinx120',
    totalPrice: 1149.92,
    amazonLink: 'https://tr.ee/1j9M9i'
  }
};
