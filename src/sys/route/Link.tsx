import React, { useCallback } from 'react';

interface Props {
  className?: string;
  href: string;
  children?: React.ReactChildren | React.ReactNode;
  titleOfPage?: string;
}

const Link: React.FC<Props> = ({
  className,
  href,
  children,
  titleOfPage = document.title,
}: Props) => {
  const handle = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();

      window.history.pushState({}, titleOfPage, href);
    },
    [href]
  );

  return (
    <a className={className} href={href} onClick={handle}>
      {children}
    </a>
  );
};

export default Link;
