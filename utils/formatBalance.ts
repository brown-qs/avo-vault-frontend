import { BigNumber } from '@ethersproject/bignumber';
import { formatEther, formatUnits } from '@ethersproject/units';
import { Zero } from '@ethersproject/constants';

type FormatBalance = (balance?: BigNumber, maxDecimalDigits?: number, tokenDecimal?: number) => string;

export const formatBalance: FormatBalance = (
  balance = Zero,
  maxDecimalDigits = 4,
  tokenDecimal = 18,
) => {
  const balanceString = formatUnits(balance, tokenDecimal);

  if (balanceString.includes('.')) {
    const parts = balanceString.split('.');
    return parts[0] + '.' + parts[1].slice(0, maxDecimalDigits);
  }

  return balanceString;
};
