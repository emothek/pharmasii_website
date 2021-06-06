import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Comment PHARMASII marche ?"
    description="Un BOT qui envoi vos conseils, rappels de prise de médocs et pubs de nouveaux produits vers les Smartphones de vos clients"
  >
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        title="PHARMASII"
        src="https://www.youtube.com/embed/XyX1gjICPvI"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <VerticalFeatureRow
      title="Conseils à distance"
      description="Communication direct avec Facebook Messenger de vos clients."
      image="/assets/images/feature.svg"
      imageAlt="Assistant virtuel"
    />
    <VerticalFeatureRow
      title="Rappels de prise de médicaments"
      description="Des rappels de prises de médicaments d'après la l'ordonnace et consignes de pharmaciens"
      image="/assets/images/feature2.svg"
      imageAlt="Rappels de prise de médicaments"
      reverse
    />
    <VerticalFeatureRow
      title="Annoncez vos nouveaux produits"
      description="Envoyez et recommander des produits à vos clients préférés"
      image="/assets/images/feature3.svg"
      imageAlt="Envoi de catalogue de nouveaux produits"
    />
  </Section>
);

export { VerticalFeatures };
