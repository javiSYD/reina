interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <h1 
      onClick={onClick}
      className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-foreground select-none text-center cursor-pointer hover:opacity-80 transition-opacity"
    >
      ALTIMETER
    </h1>
  );
};

export default Logo;
