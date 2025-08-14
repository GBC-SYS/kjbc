import cx from '@/utils';

import { Color } from '../../types';
import { ColorsInnerStyled, ColorsStyled } from './styled';

interface Props {
  data: Color[];
}

const Colors = ({ data }: Props) => {
  return (
    <ColorsStyled className={cx('colors')}>
      {data.map(({ name, hex }) => {
        return (
          <ColorsInnerStyled key={name} color={hex} className={cx('inner')}>
            <p>{name}</p>
            <p>{hex}</p>
          </ColorsInnerStyled>
        );
      })}
    </ColorsStyled>
  );
};

export default Colors;
