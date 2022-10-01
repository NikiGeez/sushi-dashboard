export type Theme = Record<string, any>;

export interface Customizable {
  className?: string;
  style?: Record<string, string | number>;
}

export type TextVariant = 'base' | 'h1' | 'h3' | 'h5';
export type TextAlignment = 'center' | 'left' | 'right';
