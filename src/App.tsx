import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
import { Avatar } from '@readyplayerme/visage';
import { useState } from 'react';

const config: AvatarCreatorConfig = {
  clearCache: false,
  bodyType: 'halfbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '1100px', height: '100vh', border: 'none' };

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    console.log(event.data.url)
    setAvatarUrl(event.data.url);

  };

  return (
    <div className=''>
      <AvatarCreator  subdomain="localhost-kgqvbg" config={config} style={style} onAvatarExported={handleOnAvatarExported}  />
      {avatarUrl && <Avatar modelSrc={avatarUrl} />}
    </div>
  );
}