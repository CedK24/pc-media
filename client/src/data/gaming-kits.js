export const gamingKits = {
  processors: {
    title: "Processeurs Gaming",
    description: "Des processeurs haute performance pour vos jeux",
    brands: [
      {
        name: "AMD",
        models: [
          {
            name: "Ryzen 9 7950X",
            specs: "16 cœurs, 32 threads, 5.7GHz",
            price: "799€"
          },
          {
            name: "Ryzen 7 7800X3D",
            specs: "8 cœurs, 16 threads, 5.0GHz",
            price: "499€"
          },
          {
            name: "Ryzen 5 7600X",
            specs: "6 cœurs, 12 threads, 5.3GHz",
            price: "329€"
          }
        ]
      },
      {
        name: "Intel",
        models: [
          {
            name: "Core i9-13900K",
            specs: "24 cœurs, 32 threads, 5.8GHz",
            price: "729€"
          },
          {
            name: "Core i7-13700K",
            specs: "16 cœurs, 24 threads, 5.4GHz",
            price: "469€"
          },
          {
            name: "Core i5-13600K",
            specs: "14 cœurs, 20 threads, 5.1GHz",
            price: "319€"
          }
        ]
      }
    ]
  },
  graphicsCards: {
    title: "Cartes Graphiques Gaming",
    description: "Des cartes graphiques puissantes pour une expérience de jeu optimale",
    brands: [
      {
        name: "NVIDIA",
        models: [
          {
            name: "RTX 4090",
            specs: "24GB GDDR6X, 2.52GHz",
            price: "1599€"
          },
          {
            name: "RTX 4080",
            specs: "16GB GDDR6X, 2.51GHz",
            price: "1199€"
          },
          {
            name: "RTX 4070 Ti",
            specs: "12GB GDDR6X, 2.61GHz",
            price: "799€"
          }
        ]
      },
      {
        name: "AMD",
        models: [
          {
            name: "RX 7900 XTX",
            specs: "24GB GDDR6, 2.5GHz",
            price: "999€"
          },
          {
            name: "RX 7900 XT",
            specs: "20GB GDDR6, 2.4GHz",
            price: "899€"
          },
          {
            name: "RX 7800 XT",
            specs: "16GB GDDR6, 2.3GHz",
            price: "599€"
          }
        ]
      }
    ]
  },
  memory: {
    title: "Mémoire Gaming",
    description: "De la mémoire rapide pour des performances optimales",
    brands: [
      {
        name: "Corsair",
        models: [
          {
            name: "Dominator Platinum RGB",
            specs: "32GB (2x16GB) DDR5-6200",
            price: "299€"
          },
          {
            name: "Vengeance RGB",
            specs: "32GB (2x16GB) DDR5-5600",
            price: "219€"
          }
        ]
      },
      {
        name: "G.Skill",
        models: [
          {
            name: "Trident Z5 RGB",
            specs: "32GB (2x16GB) DDR5-6400",
            price: "289€"
          },
          {
            name: "Ripjaws S5",
            specs: "32GB (2x16GB) DDR5-5200",
            price: "199€"
          }
        ]
      }
    ]
  },
  evolutionKits: {
    title: "Kits d'Évolution Gaming",
    description: "Des kits complets pour upgrader votre PC gaming",
    kits: [
      {
        name: "Kit Performance Extrême",
        components: [
          "AMD Ryzen 9 7950X",
          "NVIDIA RTX 4090",
          "32GB Corsair Dominator DDR5-6200",
          "Carte mère ROG X670E",
          "Watercooling NZXT Kraken Z73"
        ],
        price: "2999€"
      },
      {
        name: "Kit Haute Performance",
        components: [
          "Intel i7-13700K",
          "NVIDIA RTX 4080",
          "32GB G.Skill Trident Z5 DDR5-6400",
          "Carte mère MSI MPG Z690",
          "Watercooling Corsair H150i"
        ],
        price: "2299€"
      },
      {
        name: "Kit Performance/Prix",
        components: [
          "AMD Ryzen 5 7600X",
          "NVIDIA RTX 4070 Ti",
          "32GB Corsair Vengeance DDR5-5600",
          "Carte mère B650 Gaming",
          "Ventirad Be Quiet! Dark Rock Pro 4"
        ],
        price: "1499€"
      }
    ]
  }
};
