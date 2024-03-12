import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: true,
  language: 'en',
};

const style = { width: '1500px', height: '100vh', border: 'none' };

export default function App() {
  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <div className=''>
      <AvatarCreator subdomain="demo" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
    </div>
  );
}