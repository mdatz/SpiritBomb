import { SpiritBombStyleProvider } from './components/SpiritBombStyleProvider/SpiritBombStyleProvider';
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
        <SpiritBombStyleProvider>
          <Center>
            <Button color='orange' size='medium' radius='huge'/>
          </Center>
        </SpiritBombStyleProvider>
      </body>
    </>
  );
};