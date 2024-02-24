interface ContainerProps {
  children: React.ReactNode;
}

const Main_Content: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <main>{children}</main>;
};

export default Main_Content;
