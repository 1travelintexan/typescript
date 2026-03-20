export type petType = {
  name: string;
  age: number;
  size?: "small" | "medium" | "large";
};

export type NavbarProps = {
  petState: {
    name: string;
    age?: number;
  };
  setter: React.Dispatch<React.SetStateAction<petType>>;
};
