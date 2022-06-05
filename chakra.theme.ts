import { extendTheme } from '@chakra-ui/react';

const styles = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'blue.800',
        color: 'white',
      },
    },
  },
};

const theme = extendTheme(styles);

export default theme;
