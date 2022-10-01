import { UiSkeleton, UiText } from '@/components/ui';
import { Customizable } from '@/typings/ui';
import { getTokenIcon } from '@/utils/tokens';
import styled from '@emotion/styled';
import { FC } from 'react';

export interface TokenInfoCardProps extends Customizable {
  loading?: boolean;
}

export const TokenInfoCard: FC<TokenInfoCardProps> = ({ loading = false }) => {
  const icon = getTokenIcon('WETH');

  return (
    <WrapperStyled>
      <AmountRowStyled>
        { loading ? (
          <>
            <UiSkeleton circle width="20px" height="20px" />
            <UiSkeleton width="80px" height="14px" borderRadius="4px" />
            <UiSkeleton width="50px" height="14px" borderRadius="4px" />
          </>
        ) : (
          <>
            <IconContainerStyled>
              <IconStyled src={icon} alt="" />
            </IconContainerStyled>
            <UiText variant="h3">
              {'6,978'}
            </UiText>
            <UiText paletteColor="text-secondary">
              {'WBTC'}
            </UiText>
          </>
        )}
      </AmountRowStyled>
      <PriceRowStyled>
        {loading ? (
          <>
            <UiSkeleton width="140px" height="14px" borderRadius="4px" />
            <UiSkeleton width="80px" height="14px" borderRadius="4px" />
          </>
        ) : (
          <>
            <UiText variant="h5">
              1 {'WBTC'} = {'14.6'} {'WETH'}
            </UiText>
            <UiText paletteColor="text-secondary">
              (${'38,471.89'})
            </UiText>
          </>
        )}
      </PriceRowStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  background: var(--ui-palette-background-default);
  border: 1px solid var(--ui-palette-border-main);
  border-radius: var(--ui-size-borderRadius-main);
  padding: 24px 16px;
  box-sizing: border-box;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const AmountRowStyled = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const PriceRowStyled = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;

const IconContainerStyled = styled.div`
  user-select: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
`;

const IconStyled = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
