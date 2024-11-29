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
    shortDescription: 'Diagnostic et réparation de vos ordinateurs, portables et fixes',
    description: 'Service complet de réparation pour tous types d\'ordinateurs. Nos techniciens expérimentés diagnostiquent et réparent rapidement vos appareils.',
    icon: ComputerIcon,
    details: [
      'Diagnostic complet de votre matériel',
      'Réparation de composants défectueux',
      'Remplacement de pièces',
      'Récupération de données',
      'Nettoyage et optimisation',
      'Mise à niveau matérielle',
      'Dépannage logiciel'
    ],
    additionalInfo: 'Nous intervenons sur tous types de pannes : écran, clavier, batterie, disque dur, carte mère, etc. Nos réparations sont garanties et nous n\'utilisons que des pièces de qualité.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance Préventive',
    shortDescription: 'Entretien préventif et optimisation de vos systèmes',
    description: 'Un entretien régulier de votre matériel informatique permet d\'éviter les pannes et d\'optimiser les performances.',
    icon: BuildIcon,
    details: [
      'Nettoyage physique complet',
      'Mise à jour des systèmes',
      'Optimisation des performances',
      'Vérification antivirus',
      'Sauvegarde des données',
      'Défragmentation des disques',
      'Rapport de maintenance détaillé'
    ],
    additionalInfo: 'Notre service de maintenance préventive permet de prolonger la durée de vie de vos équipements et d\'éviter les pannes coûteuses.'
  },
  {
    id: 'securite',
    title: 'Sécurité Informatique',
    shortDescription: 'Protection contre les virus et menaces informatiques',
    description: 'Protégez vos données et systèmes contre les menaces informatiques avec nos solutions de sécurité complètes.',
    icon: SecurityIcon,
    details: [
      'Installation d\'antivirus professionnel',
      'Configuration du pare-feu',
      'Protection contre les ransomwares',
      'Sécurisation du réseau',
      'Audit de sécurité',
      'Formation aux bonnes pratiques',
      'Surveillance continue'
    ],
    additionalInfo: 'La sécurité informatique est cruciale aujourd\'hui. Nous vous proposons des solutions adaptées à vos besoins et à votre budget.'
  },
  {
    id: 'reseaux',
    title: 'Solutions Réseau',
    shortDescription: 'Installation et configuration de réseaux professionnels',
    description: 'Conception, installation et maintenance de réseaux informatiques pour professionnels et particuliers.',
    icon: WifiIcon,
    details: [
      'Installation de réseaux WiFi',
      'Configuration des routeurs',
      'Mise en place de VPN',
      'Partage de ressources',
      'Optimisation réseau',
      'Sécurisation des accès',
      'Support technique continu'
    ],
    additionalInfo: 'Un réseau bien configuré est essentiel pour la productivité. Nous vous garantissons une installation professionnelle et performante.'
  },
  {
    id: 'serveurs',
    title: 'Serveurs & Infrastructure',
    shortDescription: 'Gestion et maintenance de serveurs d\'entreprise',
    description: 'Solutions serveur complètes pour les entreprises : installation, configuration et maintenance.',
    icon: StorageIcon,
    details: [
      'Installation de serveurs',
      'Configuration Windows Server',
      'Solutions de stockage',
      'Sauvegarde automatisée',
      'Virtualisation',
      'Maintenance préventive',
      'Support 6j/7'
    ],
    additionalInfo: 'Nos solutions serveur sont conçues pour être fiables, sécurisées et évolutives, adaptées à vos besoins actuels et futurs.'
  },
  {
    id: 'cloud',
    title: 'Solutions Cloud',
    shortDescription: 'Migration et gestion de vos données dans le cloud',
    description: 'Profitez des avantages du cloud computing avec nos solutions de migration et de gestion cloud.',
    icon: CloudIcon,
    details: [
      'Migration vers le cloud',
      'Configuration Office 365',
      'Google Workspace',
      'Stockage cloud sécurisé',
      'Synchronisation des données',
      'Sauvegarde cloud',
      'Formation utilisateurs'
    ],
    additionalInfo: 'Le cloud offre flexibilité et sécurité. Nous vous accompagnons dans votre transition vers le cloud en toute sérénité.'
  },
  {
    id: 'performance',
    title: 'Optimisation Performance',
    shortDescription: 'Amélioration des performances de vos systèmes',
    description: 'Maximisez les performances de vos équipements informatiques avec nos solutions d\'optimisation.',
    icon: SpeedIcon,
    details: [
      'Analyse des performances',
      'Optimisation matérielle',
      'Optimisation logicielle',
      'Nettoyage système',
      'Mise à niveau composants',
      'Tests de performance',
      'Recommandations personnalisées'
    ],
    additionalInfo: 'Un système optimisé est plus rapide et plus agréable à utiliser. Nous vous aidons à tirer le meilleur parti de votre matériel.'
  },
  {
    id: 'multidevices',
    title: 'Support Multi-Devices',
    shortDescription: 'Support technique pour tous vos appareils',
    description: 'Un support technique unifié pour tous vos appareils : ordinateurs, smartphones, tablettes et périphériques.',
    icon: DevicesIcon,
    details: [
      'Support PC et Mac',
      'Support smartphones',
      'Support tablettes',
      'Configuration imprimantes',
      'Synchronisation devices',
      'Dépannage à distance',
      'Conseil d\'achat'
    ],
    additionalInfo: 'Gérez tous vos appareils avec un seul interlocuteur. Notre équipe est formée sur toutes les plateformes.'
  },
  {
    id: 'pc-bureau-multimedia',
    title: 'PC Bureau & Multimédia',
    shortDescription: 'Solutions personnalisées pour votre environnement informatique et multimédia',
    description: 'Configuration, assemblage et installation de PC bureau sur mesure et solutions multimédia complètes.',
    icon: DevicesIcon,
    details: [
      'Configuration PC sur mesure',
      'Assemblage professionnel',
      'Solutions multimédia',
      'Home cinéma et audio',
      'Installation et configuration',
      'Support technique dédié',
      'Optimisation des performances'
    ],
    additionalInfo: 'Nous vous accompagnons dans le choix et la mise en place de solutions informatiques et multimédia adaptées à vos besoins, avec un service clé en main.'
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

export { services };
