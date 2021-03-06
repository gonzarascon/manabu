import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Image, Anchor } from 'grommet';
import { Github } from 'grommet-icons';
import Emoji from '../../helpers/emoji';
import { icons } from '../../constants';

const Footer = ({ viewportSize }) => (
  <Box
    a11yTitle="Page Footer"
    animation="fadeIn"
    responsive
    direction={viewportSize === 'small' ? 'column' : 'row'}
    as="footer"
    pad={{ horizontal: 'xsmall', bottom: 'small' }}
    fill="horizontal"
    flex
    align="center"
    justify={viewportSize === 'small' ? 'center' : 'between'}
    wrap={viewportSize === 'small' ? false : true}
    height={viewportSize === 'small' ? 'auto' : '70px'}
    margin={{ top: 'medium' }}
  >
    <Box
      a11yTitle="Manabu, a gamified e-learning platform"
      direction="row"
      gap="small"
      align="center"
      as="h2"
      width={viewportSize === 'small' ? '150px' : '250px'}
      responsive
      justify={viewportSize === 'small' ? 'center' : 'start'}
      alignSelf={viewportSize === 'small' ? 'center' : 'start'}
      flexOrder={0}
    >
      <Image src={icons.manabu_logo} fit="contain" />
    </Box>
    <Box
      a11yTitle="We are open-source!"
      direction="row"
      align="center"
      justify="center"
      responsive
      flexOrder={viewportSize === 'small' ? 3 : 1}
      margin={viewportSize === 'small' ? { top: 'medium' } : 'none'}
    >
      <Anchor
        href="https://github.com/gonzarascon/manabu"
        label="Somos Open-Source "
        target="_blank"
        icon={<Github color="black" />}
        reverse
      />
    </Box>

    <Box
      justify="end"
      margin={{ right: 'xsmall' }}
      flexOrder={viewportSize === 'small' ? 1 : 3}
    >
      <Text>
        Made with <Emoji symbol="💞" label="love" /> in Argentina{' '}
      </Text>
    </Box>
  </Box>
);

Footer.propTypes = {
  viewportSize: PropTypes.string.isRequired
};

export default Footer;
