interface ContainerProps {
  children: React.ReactNode;
}

const Header: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <>{children}</>;
};

export default Header;
