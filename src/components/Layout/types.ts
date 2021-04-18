import { ContainerProps } from './Container';

type Flex = 'flex-start' | 'flex-end' | 'center';

export type LayoutProps = Omit<ContainerProps, 'fullHeight'>;

export type FlexJustify =
  | Flex
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexAlign = Flex | 'stretch' | 'baseline';

export type FlexProps = LayoutProps & {
  justifyContent?: FlexJustify;
  justifyItems?: FlexAlign;
  alignContent?: FlexJustify;
  alignItems?: FlexAlign;
};
