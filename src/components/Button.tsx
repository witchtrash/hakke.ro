import React from 'react';

interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => <button>{props.text}</button>;
