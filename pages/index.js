import React, { useEffect } from 'react';
import Link from 'next/link';
import { Box } from 'grommet';
import { SliderRow, HighlightLink } from 'components';

const cardsArray = [
  {
    id: 1,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'JavaScript desde cero - Curso Inicial',
    cardSubtitle: 'Darth Vader',
  },
  {
    id: 2,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'Callbacks vs. Requests en JavaScript',
    cardSubtitle: 'De la Rua',
  },
  {
    id: 3,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'ES6 de cero a experto',
    cardSubtitle: 'Rico Mc. Pato',
  },
  {
    id: 3,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'ES6 de cero a experto',
    cardSubtitle: 'Rico Mc. Pato',
  },
  {
    id: 3,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'ES6 de cero a experto',
    cardSubtitle: 'Rico Mc. Pato',
  },
  {
    id: 3,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'ES6 de cero a experto',
    cardSubtitle: 'Rico Mc. Pato',
  },
  {
    id: 3,
    imageSrc: 'static/images/card_default.png',
    cardTitle: 'ES6 de cero a experto',
    cardSubtitle: 'Rico Mc. Pato',
  },
];

const Home = ({ viewportSize }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(err =>
          console.error(`Service worker registration failed ${err}`),
        );
    } else {
      console.log('Service Worker not supported or disabled');
    }
  });

  return (
    <Box fill maxWidth="95%" margin={{ vertical: '0', horizontal: 'auto' }}>
      <Box margin={{ vertical: '50px' }}>
        <SliderRow
          responsiveSize={viewportSize}
          headingLabel="Continua donde lo dejaste"
          cards={cardsArray}
        />
      </Box>
      <Box margin={{ vertical: '50px' }}>
        <SliderRow
          responsiveSize={viewportSize}
          headingLabel="Es momento de aprender algo nuevo"
          cards={cardsArray}
        />
      </Box>
      <HighlightLink
        textLabel="¿Quieres enseñar lo que sabes?"
        anchorLabel="Regístrate como docente."
        anchorHref="#"
        responsiveSize={viewportSize}
      />
    </Box>
  );
};

export default Home;
