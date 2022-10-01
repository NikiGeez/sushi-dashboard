import { UiText } from '@/components/ui';
import styled from '@emotion/styled';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Page: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('Home')}</title>
      </Helmet>
      <WrapperStyled>
        <ContentStyled>
          <TitleStyled>
            <UiText variant="h1">{t('FE Test exercise')}</UiText>
            <UiText paletteColor="text-secondary">{t('Good luck')} :)</UiText>
          </TitleStyled>
        </ContentStyled>
      </WrapperStyled>
    </>
  );
};

const WrapperStyled = styled.div`
  min-height: 100vh;
  padding: 80px 160px;
  box-sizing: border-box;
  display: flex;
`;

const ContentStyled = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: auto;
`;

const TitleStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding: 0 16px;
`;

export default Page;