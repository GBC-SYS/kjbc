import cx from '@/utils';

import { FooterStyled } from './styled';

export default function Footer() {
  return (
    <FooterStyled className={cx('Footer')}>
      <div>
        <span>triplexstudio</span> / Company Profile
      </div>
      <div>Copyright © 2024 triplexstudio. All rights reserved.</div>
    </FooterStyled>
  );
}
