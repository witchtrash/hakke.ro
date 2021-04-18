import React from 'react';
import styled from '@emotion/styled';
import { FlexProps } from './types';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  fullHeight?: boolean;
  padding?: string;
  margin?: string;
}

export const Container = styled.div<ContainerProps>`
  display: block;
  ${props => props.fullHeight && 'height: 100%'};
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${props => props.padding && `padding: ${props.padding}`};
  ${props => props.margin && `margin: ${props.margin}`};
  ${props => props.alignContent && `align-content: ${props.alignContent}`};
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props => props.justifyItems && `justify-items: ${props.justifyItems}`};
`;
