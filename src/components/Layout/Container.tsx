import React from 'react';
import styled from '@emotion/styled';
import { FlexProps } from './types';

export interface WrappedDivProps extends React.ComponentPropsWithoutRef<'div'> {
  fullHeight?: boolean;
  padding?: string;
  margin?: string;
}
export type LayoutProps = Omit<WrappedDivProps, 'fullHeight'>;

const WrappedDiv = ({
  children,
  fullHeight,
  padding,
  margin,
  ...rest
}: WrappedDivProps) => <div {...rest}>{children}</div>;

export const Container = styled(WrappedDiv)`
  display: block;
  ${props => props.fullHeight && 'height: 100%'};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
`;

const WrappedContainer = ({
  children,
  padding,
  margin,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  ...rest
}: FlexProps) => <Container {...rest}>{children}</Container>;

export const Flex = styled(WrappedContainer)`
  display: flex;
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.alignContent && `align-content: ${props.alignContent}`};
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
`;
