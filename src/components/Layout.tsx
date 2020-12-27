import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => <main>{props.children}</main>;
