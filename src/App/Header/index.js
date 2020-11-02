import { ReactComponent as LogoSievo } from './logo.svg';
import { HeaderTag, H2 } from './styles';

const Header = () => (
  <HeaderTag>
    <div>
      <LogoSievo /> <small>frontend developer task 👩‍💻 </small>
    </div>
    <H2>Available Saving Projects</H2>
  </HeaderTag>
);

export default Header;
