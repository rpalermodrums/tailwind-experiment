interface ThemedButtonProps {
  theme: 'dark' | 'light';
  children: React.ReactNode;
  onClick?: () => void;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  theme,
  children,
  onClick,
}) => {
  const styles = {
    root: `px-4 py-2 rounded ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
    }`,
  };

  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemedButton;
