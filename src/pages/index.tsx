import React from 'react';
import { PageLayout } from 'components/Layout';
import { Decoration } from 'components/Decoration';
import { VerticalLine } from 'components/Decoration/VerticalLine';

const Index = () => {
  return (
    <React.Fragment>
      <Decoration />
      <VerticalLine />
    </React.Fragment>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Index;
