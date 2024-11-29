import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nous intervenons généralement sous 24 à 48h pour les demandes standard. Pour les urgences, nous proposons une intervention rapide dans les 2 à 4 heures selon la situation et la localisation."
  },
  {
    question: "Proposez-vous un devis gratuit ?",
    answer: "Oui, nous proposons un devis gratuit pour toute intervention. Le diagnostic initial est également offert pour évaluer précisément votre besoin."
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    answer: "Nous intervenons principalement dans la région parisienne et sa proche banlieue. Pour les autres zones, n'hésitez pas à nous contacter pour vérifier notre disponibilité."
  },
  {
    question: "Quels types d'ordinateurs réparez-vous ?",
    answer: "Nous réparons tous types d'ordinateurs : PC fixes, portables, Mac et stations de travail professionnelles. Nous intervenons sur les problèmes matériels comme logiciels."
  },
  {
    question: "Proposez-vous un service de récupération de données ?",
    answer: "Oui, nous offrons un service complet de récupération de données pour disques durs, SSD, clés USB et cartes mémoire. Le taux de réussite dépend de l'état du support."
  },
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon le type d'intervention. Nous proposons des forfaits adaptés aux particuliers et aux professionnels. Contactez-nous pour obtenir un devis personnalisé."
  },
  {
    question: "Offrez-vous une garantie sur vos réparations ?",
    answer: "Oui, toutes nos réparations sont garanties. La durée de garantie varie selon le type d'intervention et les pièces remplacées (généralement de 3 mois à 1 an)."
  },
  {
    question: "Comment se déroule une intervention à domicile ?",
    answer: "Après votre appel, nous fixons un rendez-vous. Notre technicien se déplace chez vous, effectue un diagnostic, puis procède à la réparation si possible sur place. Un rapport d'intervention vous est remis."
  },
  {
    question: "Que faire en cas d'urgence informatique ?",
    answer: "En cas d'urgence, contactez notre hotline dédiée ou utilisez notre formulaire d'urgence en ligne. Nous vous rappellerons dans les plus brefs délais pour organiser une intervention rapide."
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons différentes formules de contrats de maintenance adaptées aux besoins des professionnels. Ces contrats incluent la maintenance préventive et le support prioritaire."
  }
];

const FAQ = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Questions Fréquentes
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Trouvez rapidement les réponses à vos questions
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 1,
              '&:before': {
                display: 'none',
              },
              boxShadow: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
