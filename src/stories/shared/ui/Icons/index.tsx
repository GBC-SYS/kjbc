import cx from '@/utils';

import type { IconData } from '../../types';
import Icon from './Icon';
import { IconsStyled } from './styled';

interface Props {
  data: IconData[];
}

const Icons = ({ data }: Props) => {
  return (
    <IconsStyled className={cx('icons')}>
      {data.map(item => (
        <Icon key={item.label} icon={item.icon} label={item.label} />
      ))}
    </IconsStyled>
  );
};

export default Icons;
