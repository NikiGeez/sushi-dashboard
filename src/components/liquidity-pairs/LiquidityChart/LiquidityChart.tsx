import { UiAreaChart, UiSkeleton, UiText } from '@/components/ui';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const LiquidityChart: FC = () => {
  const { t } = useTranslation();

  const loading = false;

  const data: [number, number][] = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
    [1327964400000, 30.95],
    [1328050800000, 31.24],
    [1328137200000, 31.29],
    [1328223600000, 31.85],
    [1328482800000, 31.86],
    [1328569200000, 32.28],
    [1328655600000, 32.1],
    [1328742000000, 32.65],
    [1328828400000, 32.21],
    [1329087600000, 32.35],
    [1329174000000, 32.44],
    [1329260400000, 32.46],
    [1329346800000, 32.86],
    [1329433200000, 32.75],
    [1329778800000, 32.54],
    [1329865200000, 32.33],
    [1329951600000, 32.97]
  ];

  const displayedLiquidityUSD = useMemo(() => data[data.length - 1]?.[1] || 0, [data]);
  const displayedDate = useMemo(() => {
    const lastRecordedDate = data[data.length - 1]?.[0] || Date.now();
    return dayjs(lastRecordedDate).format('MMM DD');
  }, [data]);

  return (
    <UiAreaChart
      data={data}
      loading={loading}
      color="#14A887"
      tooltipLabel={t('Liquidity')}
      tooltipValue={(v) => `${v}$`}
    >
      <ContentStyled>
        <HeaderStyled>
          {loading ? (
            <>
              <UiSkeleton width="80px" height="14px" borderRadius="4px" />
              <UiSkeleton width="60px" height="14px" borderRadius="4px" />
            </>
          ) : (
            <>
              <UiText variant="h5">{t('Liquidity')}</UiText>
              <UiText paletteColor="text-secondary">{displayedDate}</UiText>
            </>
          )}
        </HeaderStyled>
        <div>
          {loading
            ? <UiSkeleton width="145px" height="18px" borderRadius="4px" />
            : <UiText variant="h3">${displayedLiquidityUSD}</UiText>
          }
        </div>
      </ContentStyled>
    </UiAreaChart>
  );
}

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HeaderStyled = styled.div`
  display: flex;
  gap: 6px;
`;
