'use client';
import TW from 'typewriter-effect';

interface TypeWrirerProps {
  mainStr: string;
  subStr?: string;
}

export function Typewriter({ mainStr }: TypeWrirerProps) {
  return (
    <TW
      options={{
        strings: [mainStr],
        cursor: '|',
        autoStart: true,
        deleteSpeed: 30,
        loop: true,
      }}
    />
  );
}
