import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from '@emotion/styled';
import nightowlLight from 'prism-react-renderer/themes/nightOwlLight';
import { MotionWrapper } from './MotionWrapper';

const Pre = styled.pre`
  border-radius: 4px;
  padding: 12px 16px;
  width: fit-content;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNumber = styled.span`
  display: table-cell
  text-align: left;
  user-select: none;
  opacity: 0.5;
  padding-right: 1.25rem;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface CodeChildren {
  props: {
    children: string;
    className: string;
  };
}

interface CodeProps {
  children: CodeChildren | React.ReactNode;
  className?: string;
}

// Really wish I didn't have to write this typeguard
// According to the MDXProvider typings, it should be React.ReactNode
// But it clearly isn't...
const isCodeChildren = (
  children: CodeChildren | React.ReactNode
): children is CodeChildren => {
  if (typeof children === 'object' && children !== null) {
    if (Object.keys(children).includes('props')) {
      return true;
    }
  }

  return false;
};

export const Code = ({ children }: CodeProps) => {
  if (!isCodeChildren(children)) {
    return null;
  }

  const language: Language = (children.props.className?.replace(
    /language-/,
    ''
  ) ?? 'text') as Language;

  return (
    <MotionWrapper overflowX="auto" my="4">
      <Highlight
        {...defaultProps}
        code={children.props.children}
        language={language}
        theme={nightowlLight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              if (i === tokens.length - 1) {
                return null;
              }

              return (
                <Line
                  key={`item-${i}`}
                  className={lineProps.className}
                  style={lineProps.style}
                >
                  <LineNumber>{i + 1}</LineNumber>
                  <LineContent>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });

                      return (
                        <span
                          key={`token-${key}`}
                          style={tokenProps.style}
                          className={tokenProps.className}
                        >
                          {tokenProps.children}
                        </span>
                      );
                    })}
                  </LineContent>
                </Line>
              );
            })}
          </Pre>
        )}
      </Highlight>
    </MotionWrapper>
  );
};
