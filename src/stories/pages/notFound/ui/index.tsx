import Link from 'next/link';

import cx from '@/utils';

import { NotFoundStyled } from './styled';

const NotFoundPage = () => {
  return (
    <NotFoundStyled className={cx('NotFound')}>
      <h2>Not Found </h2>
      <p>Could not find requested resource</p>
      <Link href="/"> Return Home</Link>
    </NotFoundStyled>
  );
};

export default NotFoundPage;
