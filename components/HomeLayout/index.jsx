import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from 'grommet';
import SliderRow from '../SliderRow';
import HighlightLink from '../HighlightLink';
import WelcomeWrapper from '../WelcomeWrapper';

const HomeLayout = ({
  viewportSize,
  data,
  token,
  actualUser,
  actualUser: { id, username },
}) => {
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

  const renderSlider = heading => {
    const cardsArray = [];
    if (data)
      data.forEach(course => {
        const cardData = {
          id: course.id,
          imageSrc: 'static/images/card_default.png',
          cardTitle: course.name,
          cardSubtitle: course.user.username,
        };

        cardsArray.push(cardData);
      });

    return (
      <SliderRow
        responsiveSize={viewportSize}
        headingLabel={heading}
        cards={cardsArray}
      />
    );
  };
  return (
    <Fragment>
      <WelcomeWrapper />
      <Box fill maxWidth="95%" margin={{ vertical: '0', horizontal: 'auto' }}>
        <Box margin={{ vertical: '50px' }}>
          {renderSlider('Continua donde lo dejaste')}
        </Box>
      </Box>

      <Box fill="horizontal">
        <Image src="/static/images/courses_banner.png" fit="contain" />
      </Box>

      <Box fill maxWidth="95%" margin={{ vertical: '0', horizontal: 'auto' }}>
        <Box margin={{ vertical: '50px' }}>
          {renderSlider('Es momento de aprender algo nuevo')}
        </Box>
        <HighlightLink
          textLabel="¿Quieres enseñar lo que sabes?"
          anchorLabel="Regístrate como docente."
          anchorHref={`/users/${username}/${id}/teacher_registry`}
          responsiveSize={viewportSize}
        />
      </Box>
    </Fragment>
  );
};

HomeLayout.propTypes = {
  viewportSize: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  token: PropTypes.string,
  actualUser: PropTypes.objectOf(PropTypes.any),
};

HomeLayout.defaultProps = {
  token: 'NO_TOKEN',
  actualUser: {},
};

export default HomeLayout;