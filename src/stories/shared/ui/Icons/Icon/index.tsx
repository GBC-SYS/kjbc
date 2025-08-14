import { IconData } from '@/stories/shared/types/icon';
import cx from '@/utils';

import { IconStyled } from './styled';

export default function Icon({ icon, label }: IconData) {
  return (
    <IconStyled className={cx('iconItem')}>
      <span>{icon}</span>
      <p className={cx('label')}>{label}</p>
    </IconStyled>
  );
}
