import { extendTheme } from '@chakra-ui/react';

const styles = {
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
};

const theme = extendTheme(styles);

export default theme;
