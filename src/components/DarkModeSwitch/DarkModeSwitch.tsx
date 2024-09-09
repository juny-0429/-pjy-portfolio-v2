import DarkOnSwitchIcon from '@/assets/icons/switches/switch_dark_on.svg';
import WhiteOffSwitchIcon from '@/assets/icons/switches/switch_white_off.svg';
import { darkModeSwitchCss } from './DarkModeSwitch.styles';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function DarkModeSwitch() {
  const { themeMode, toggleThemeMode } = useDarkMode();

  return (
    <button css={darkModeSwitchCss.wrapper} onClick={toggleThemeMode}>
      {themeMode === 'dark' ? <WhiteOffSwitchIcon width={50} height={50} alt="switch icon" /> : <DarkOnSwitchIcon width={50} height={50} alt="switch icon" />}
    </button>
  );
}
