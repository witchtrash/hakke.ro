import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from '@emotion/styled';

const Pre = styled.pre`
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  margin: 24px auto;
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

interface CodeProps {
  children: {
    props: {
      children: string;
      className: string;
    };
  };
}
export const Code = (props: CodeProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language="tsx"
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
  );
};
