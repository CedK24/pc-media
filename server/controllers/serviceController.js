const services = [
  {
    id: 'reparation',
    title: 'Réparation PC & Mac',
    shortDescription: 'Diagnostic et réparation de vos ordinateurs, portables et fixes',
    description: 'Service complet de réparation pour tous types d\'ordinateurs. Nos techniciens expérimentés diagnostiquent et réparent rapidement vos appareils.',
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
  // ... autres services
];

// Obtenir tous les services
exports.getAllServices = (req, res) => {
  res.json(services);
};

// Obtenir un service par son ID
exports.getServiceById = (req, res) => {
  const service = services.find(s => s.id === req.params.id);
  if (!service) {
    return res.status(404).json({ message: 'Service non trouvé' });
  }
  res.json(service);
};

// Obtenir les services mis en avant
exports.getFeaturedServices = (req, res) => {
  const featuredIds = ['reparation', 'maintenance', 'securite', 'reseaux', 'cloud', 'multidevices'];
  const featuredServices = services.filter(service => featuredIds.includes(service.id));
  res.json(featuredServices);
};
