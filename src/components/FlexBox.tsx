import React from 'react';

interface FlexBoxProps {
  direction?: 'row' | 'col';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  children: React.ReactNode;
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'start',
  children,
}: FlexBoxProps) => {
  const styles = {
    root: `flex flex-${direction} justify-${justify} items-${align}`,
  };

  return <div className={styles.root}>{children}</div>;
};
