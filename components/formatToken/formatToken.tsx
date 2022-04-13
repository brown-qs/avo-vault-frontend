import { FormatTokenComponent } from './types';
import { formatBalance } from 'utils';

const FormatToken: FormatTokenComponent = (props) => {
  const { amount, symbol, approx = false, decimal, ...rest } = props;
  const prefix = !approx || amount?.isZero() ? '' : '≈ ';

  return (
    <span {...rest}>
      {prefix}
      {formatBalance(amount, 2, decimal)}&nbsp;{symbol}
    </span>
  );
};

export default FormatToken;
