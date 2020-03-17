import React, { FunctionComponent, CSSProperties, ReactNode } from 'react';

export interface ICardProps {
  title?: string;
  path: string;
  featuredImage?: any;
  content?: string;
  meta?: {
    time: string;
    timePretty: string;
    tag: string | null;
  };
  halfImage?: boolean;
  compact?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Card: FunctionComponent<ICardProps> = ({
  title,
  meta,
  path,
  featuredImage,
  content,
  halfImage = false,
  compact = false,
  style,
  children,
}) => <div />;
