import React from 'react';
import delay from 'lodash/delay';
import random from 'lodash/random';

interface SplitFlapProps {
  startCharacter?: string;
  endCharacter?: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const SplitFlap = (props: SplitFlapProps) => {
  const MIN = 31;
  const MAX = 95;

  const [display, setDisplay] = React.useState(
    props.startCharacter ?? String.fromCharCode(random(MIN, MAX))
  );
  const target = props.endCharacter ?? String.fromCharCode(random(MIN, MAX));

  const clampWrap = (n: number) => {
    if (n === MAX) {
      return n;
    }

    const range = MAX - MIN;
    return ((((n - MIN) % range) + range) % range) + MIN;
  };

  const getNextCharacter = (character: string): string => {
    const charCode = character.charCodeAt(0);
    const nextCode = clampWrap(charCode + 1);

    return String.fromCharCode(nextCode);
  };

  const rotateDisplay = (character: string) => {
    if (character === target) {
      return;
    }

    delay(() => {
      const char = getNextCharacter(character);
      setDisplay(char);
      rotateDisplay(char);
    }, props.speed ?? 50);
  };

  React.useEffect(() => {
    delay(() => rotateDisplay(display), props.delay ?? 0);
  }, []);

  return <span className={props.className}>{display}</span>;
};
