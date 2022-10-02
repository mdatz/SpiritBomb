import { Button } from './components/Button/Button';
import { Center } from './components/Center/Center';

export default () => {

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>SpiritBomb Sandbox</title>
      </head>
      <body>
        <Center>
          <Button color='red' size='medium' radius='huge'/>
        </Center>
      </body>
    </>
  );
};