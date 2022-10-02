import { UiColumnChart, UiSkeleton, UiText } from '@/components/ui';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const VolumeChart: FC = () => {
  const { t } = useTranslation();

  const loading = false;

  const data = [
    { x: 1327359600000, y: 30.95 },
    { x: 1327446000000, y: 31.34 },
    { x: 1327532400000, y: 31.18 },
    { x: 1327618800000, y: 31.05 },
    { x: 1327618800000 + 86400000 * 1, y: 31.0 },
    { x: 1327618800000 + 86400000 * 2, y: 30.95 },
    { x: 1327618800000 + 86400000 * 3, y: 31.24 },
    { x: 1327618800000 + 86400000 * 4, y: 31.29 },
    { x: 1327618800000 + 86400000 * 5, y: 31.85 },
    { x: 1327618800000 + 86400000 * 6, y: 31.86 },
    { x: 1327618800000 + 86400000 * 7, y: 32.28 },
    { x: 1327618800000 + 86400000 * 8, y: 32.1 },
    { x: 1327618800000 + 86400000 * 9, y: 38.65 },
    { x: 1327618800000 + 86400000 * 10, y: 32.21 },
    { x: 1327618800000 + 86400000 * 11, y: 32.35 },
    { x: 1327618800000 + 86400000 * 12, y: 32.44 },
    { x: 1327618800000 + 86400000 * 13, y: 32.46 },
    { x: 1327618800000 + 86400000 * 14, y: 32.86 },
    { x: 1327618800000 + 86400000 * 15, y: 32.75 },
    { x: 1327618800000 + 86400000 * 16, y: 32.54 },
    { x: 1327618800000 + 86400000 * 17, y: 32.33 },
    { x: 1327618800000 + 86400000 * 18, y: 32.97 },
    { x: 1327618800000 + 86400000 * 19, y: 31.0 },
    { x: 1327618800000 + 86400000 * 20, y: 30.95 },
    { x: 1327618800000 + 86400000 * 21, y: 31.24 },
    { x: 1327618800000 + 86400000 * 22, y: 31.29 },
    { x: 1327618800000 + 86400000 * 23, y: 31.85 },
    { x: 1327618800000 + 86400000 * 24, y: 31.86 },
    { x: 1327618800000 + 86400000 * 25, y: 32.28 },
    { x: 1327618800000 + 86400000 * 26, y: 32.1 },
    { x: 1327618800000 + 86400000 * 27, y: 32.65 },
    { x: 1327618800000 + 86400000 * 28, y: 32.21 },
    { x: 1327618800000 + 86400000 * 29, y: 32.35 },
    { x: 1327618800000 + 86400000 * 30, y: 32.44 },
    { x: 1327618800000 + 86400000 * 31, y: 32.46 },
    { x: 1327618800000 + 86400000 * 32, y: 32.86 },
    { x: 1327618800000 + 86400000 * 33, y: 32.75 },
    { x: 1327618800000 + 86400000 * 34, y: 32.54 },
    { x: 1327618800000 + 86400000 * 35, y: 32.33 },
    { x: 1327618800000 + 86400000 * 36, y: 32.97 }
  ];

  const [hoveredVolume, setHoveredVolume] = useState<null | number>(null);
  const displayedVolume = useMemo(() => {
    const lastRecordedVolume = data[data.length - 1]?.y || 0;
    return hoveredVolume === null ? lastRecordedVolume : hoveredVolume;
  }, [hoveredVolume, data]);

  const [hoveredDate, setHoveredDate] = useState<null | number>(null);
  const displayedDate = useMemo(() => {
    const lastRecordedDate = data[data.length - 1]?.x || Date.now();
    const finalDate = hoveredDate === null ? lastRecordedDate : hoveredDate;
    return dayjs(finalDate).format('MMM DD');
  }, [hoveredDate, data]);

  function handleBarMouseEnter(record: { x: number, y: number }) {
    setHoveredVolume(record.y);
    setHoveredDate(record.x);
  }

  function handleBarMouseLeave() {
    setHoveredVolume(null);
    setHoveredDate(null);
  }

  return (
    <UiColumnChart
      data={data}
      color="#F643CF"
      alternativeColor="rgba(246, 67, 207, 0.6)"
      gradientColor="rgba(235, 122, 74, 0.3)"
      loading={loading}
      onBarMouseEnter={handleBarMouseEnter}
      onBarMouseLeave={handleBarMouseLeave}
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
              <UiText variant="h5">{t('Volume')}</UiText>
              <UiText paletteColor="text-secondary">{displayedDate}</UiText>
            </>
          )}
        </HeaderStyled>
        <div>
          {loading
            ? <UiSkeleton width="145px" height="18px" borderRadius="4px" />
            : <UiText variant="h3">${displayedVolume}</UiText>
          }
        </div>
      </ContentStyled>
    </UiColumnChart>
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
