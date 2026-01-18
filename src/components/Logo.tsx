interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <h1 
      onClick={onClick}
      className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-foreground select-none text-center cursor-pointer hover:opacity-80 transition-opacity"
    >
      JR REINA
    </h1>
  );
};

export default Logo;
