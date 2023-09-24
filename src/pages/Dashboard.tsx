import React, { useMemo } from 'react';
import { FlexBox } from '../components/FlexBox';
import ThemedButton from '../components/ThemedButton';
import { useTheme } from '../hooks/useTheme';

const Dashboard: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const styles = useMemo(
    () => ({
      root: `h-screen w-screen ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`,
      header: 'text-2xl font-bold mb-4',
    }),
    [theme],
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <FlexBox direction="col" justify="center" align="center">
      <div className={styles.root}>
        <h1 className={styles.header}>User Dashboard</h1>
        <ThemedButton theme={theme} onClick={toggleTheme}>
          Toggle Theme
        </ThemedButton>
      </div>
    </FlexBox>
  );
};

export default Dashboard;
