import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Heading, Text, Anchor } from 'grommet';

import { calculateRem } from '../../constants';

const Card = ({ imageSrc, cardTitle, cardSubtitle, anchorHref = null }) => (
  <Box
    direction="column"
    a11yTitle={`Curso ${cardTitle}`}
    align="center"
    wrap={false}
    elevation="medium"
    justify="center"
    maxWidth="260px"
    height="290px"
    as="article"
  >
    <Anchor href={anchorHref}>
      <Box height="150px" fill="horizontal">
        <Image src={imageSrc} objectFit="none" height="100%" />
      </Box>
      <Box
        fill="horizontal"
        height="140px"
        pad={{ horizontal: 'small', vertical: 'medium' }}
      >
        <Heading
          a11yTitle={cardTitle}
          size={calculateRem(20)}
          maxWidth="100%"
          sans
        >
          {cardTitle}
        </Heading>
        <Text size={calculateRem(18)}>{cardSubtitle}</Text>
      </Box>
    </Anchor>
  </Box>
);

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardSubtitle: PropTypes.string.isRequired,
  anchorHref: PropTypes.string.isRequired,
};

export default Card;