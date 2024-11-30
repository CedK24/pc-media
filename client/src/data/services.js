import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import WifiIcon from '@mui/icons-material/Wifi';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';

const services = [
  {
    id: 'reparation',
    title: 'Réparation PC & Mac',
    description: 'Service complet de réparation pour tous types d\'ordinateurs. Nos techniciens expérimentés diagnostiquent et réparent rapidement vos appareils.',
    longDescription: 'Nous proposons un service complet de réparation informatique pour tous types d\'ordinateurs, qu\'il s\'agisse de PC ou de Mac. Nos techniciens expérimentés sont formés pour diagnostiquer et réparer rapidement vos appareils, en utilisant des pièces de qualité et des outils professionnels. Nous intervenons sur tous types de pannes matérielles et logicielles.',
    icon: ComputerIcon,
    features: [
      'Diagnostic complet de votre matériel',
      'Réparation de composants défectueux',
      'Remplacement de pièces',
      'Récupération de données',
      'Nettoyage et optimisation',
      'Mise à niveau matérielle',
      'Dépannage logiciel'
    ],
    highlight: true
  },
  {
    id: 'maintenance',
    title: 'Maintenance Préventive',
    description: 'Un entretien régulier de votre matériel informatique permet d\'éviter les pannes et d\'optimiser les performances.',
    longDescription: 'La maintenance préventive est essentielle pour garantir la longévité et les performances optimales de votre équipement informatique. Notre service comprend un ensemble complet d\'interventions régulières qui permettent de prévenir les pannes et d\'assurer un fonctionnement optimal de vos systèmes.',
    icon: BuildIcon,
    features: [
      'Nettoyage physique complet',
      'Mise à jour des systèmes',
      'Optimisation des performances',
      'Vérification antivirus',
      'Sauvegarde des données',
      'Défragmentation des disques',
      'Rapport de maintenance détaillé'
    ]
  },
  {
    id: 'securite',
    title: 'Sécurité Informatique',
    description: 'Protégez vos données et systèmes contre les menaces informatiques avec nos solutions de sécurité complètes.',
    longDescription: 'Dans un monde numérique en constante évolution, la sécurité informatique est devenue une priorité absolue. Nous proposons des solutions complètes pour protéger vos systèmes et vos données contre les menaces actuelles et émergentes, en utilisant les technologies les plus avancées.',
    icon: SecurityIcon,
    features: [
      'Analyse et suppression des virus',
      'Installation d\'antivirus',
      'Configuration pare-feu',
      'Protection des données',
      'Sécurisation des réseaux',
      'Audit de sécurité',
      'Formation aux bonnes pratiques'
    ]
  },
  {
    id: 'reseau',
    title: 'Installation Réseau',
    description: 'Configuration et optimisation de votre réseau informatique pour une connectivité optimale.',
    longDescription: 'Un réseau bien configuré est essentiel pour assurer une connectivité fiable et performante. Nous concevons et installons des solutions réseau adaptées à vos besoins, qu\'il s\'agisse d\'un réseau domestique ou professionnel, en privilégiant la sécurité et les performances.',
    icon: WifiIcon,
    features: [
      'Installation de routeurs et switches',
      'Configuration du réseau WiFi',
      'Sécurisation des accès',
      'Optimisation des performances',
      'Partage de ressources',
      'Support technique',
      'Documentation complète'
    ]
  },
  {
    id: 'stockage',
    title: 'Solutions de Stockage',
    description: 'Solutions de stockage et de sauvegarde adaptées à vos besoins.',
    longDescription: 'Nous proposons des solutions de stockage sur mesure pour répondre à vos besoins spécifiques. Que vous ayez besoin d\'augmenter votre capacité de stockage ou de mettre en place un système de sauvegarde fiable, nous avons la solution qu\'il vous faut.',
    icon: StorageIcon,
    features: [
      'Installation de disques durs',
      'Configuration RAID',
      'Solutions de sauvegarde',
      'Stockage en réseau (NAS)',
      'Cloud Storage',
      'Récupération de données',
      'Conseil personnalisé'
    ]
  },
  {
    id: 'cloud',
    title: 'Services Cloud',
    description: 'Migration et gestion de vos services dans le cloud pour plus de flexibilité.',
    longDescription: 'Le cloud computing offre une flexibilité et une scalabilité inégalées. Nous vous accompagnons dans votre transition vers le cloud, de la planification à la migration, en passant par la formation de vos équipes et le support continu.',
    icon: CloudIcon,
    features: [
      'Migration vers le cloud',
      'Configuration des services',
      'Sécurisation des données',
      'Optimisation des coûts',
      'Formation utilisateur',
      'Support technique',
      'Monitoring continu'
    ]
  },
  {
    id: 'performance',
    title: 'Optimisation Performance',
    description: 'Maximisez les performances de vos équipements informatiques avec nos solutions d\'optimisation.',
    longDescription: 'Nos experts analysent en profondeur votre système pour identifier les goulots d\'étranglement et optimiser chaque aspect de vos équipements. Nous utilisons des outils professionnels et des techniques éprouvées pour maximiser les performances.',
    icon: SpeedIcon,
    features: [
      'Analyse des performances',
      'Optimisation système',
      'Mise à niveau matérielle',
      'Configuration optimale',
      'Tests de performance',
      'Rapport détaillé',
      'Recommandations'
    ]
  },
  {
    id: 'conseil',
    title: 'Conseil & Formation',
    description: 'Accompagnement personnalisé et formation pour une utilisation optimale de vos outils.',
    longDescription: 'Notre service de conseil et formation vous aide à tirer le meilleur parti de vos équipements informatiques. Nous proposons des formations personnalisées et un accompagnement sur mesure pour répondre à vos besoins spécifiques.',
    icon: DevicesIcon,
    features: [
      'Analyse des besoins',
      'Formation personnalisée',
      'Support utilisateur',
      'Documentation détaillée',
      'Suivi post-formation',
      'Conseils d\'optimisation',
      'Assistance continue'
    ]
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

export { services };
