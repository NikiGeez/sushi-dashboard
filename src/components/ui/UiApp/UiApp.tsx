import { APP_THEME } from '@/constants/ui';
import { getObjectRoutes } from '@/utils/object';
import styled from '@emotion/styled';
import { FC, ReactNode } from 'react';
import './global.scss';

export interface UiAppProps {
  children: ReactNode;
  className?: string;
  style?: Record<string, string | number>;
}

injectCSSVariables(APP_THEME);

export const UiApp: FC<UiAppProps> = ({ children, className = '', style = {} }) => {
  return (
    <WrapperStyled className={className} style={{ ...style }}>
      { children }
    </WrapperStyled>
  )
}

function injectCSSVariables(theme: Record<string, unknown>) {
  const appBody = document.querySelector('html');
  const [variablesNames, variablesValues] = getObjectRoutes(theme, '--ui');

  variablesNames.forEach((name, nameIdx) => {
    appBody!.style.setProperty(name, variablesValues[nameIdx]);
  });
}

const WrapperStyled = styled.div`
  min-height: 100vh;
`;
