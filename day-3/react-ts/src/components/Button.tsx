type ButtonProps = {
  children: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};
