import heroBackgroundImage from '../assets/images/hero_section_bg.svg'
import HeroContent from './hero-content';

const Lucas = () => {
  return (
    <section 
    className="bg-cover bg-no-repeat bg-center h-screen w-screen "
    style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
    <HeroContent />
    </section>
  );
};

export default Lucas;
