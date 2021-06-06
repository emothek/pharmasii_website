import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Fidèlisez vos clients avec Pharmasii"
      subtitle="Commencez la période d'essai"
      button={(
        <Link href="#f">
          <a>
            <Button>Inscrivez-vous</Button>
          </a>
        </Link>
      )}
    />
  </Section>
);

export { Banner };
