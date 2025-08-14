'use client';

import { ReactNode } from 'react';

import { TemplateStyled } from '@/stories/app/layout/Base/styled';
import Footer from '@/stories/widgets/Footer/ui';
import Header from '@/stories/widgets/Header/ui';
import cx from '@/utils';

const CommonTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <TemplateStyled className={cx('template')}>
      <Header />
      {children}
      <Footer />
    </TemplateStyled>
  );
};

export default CommonTemplate;
