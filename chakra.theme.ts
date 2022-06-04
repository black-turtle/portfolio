import { extendTheme, Divider } from '@chakra-ui/react';

const styles = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.700',
        color: 'white',
      },
    },
  },
};

const theme = extendTheme(styles);

export default theme;
