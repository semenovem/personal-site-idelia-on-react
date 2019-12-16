import React from 'react';
import ModalBase from './ModalBase';
import { ModalConfigCtx, ModalShownCtx } from './Ctx';
import ModalProvider from './ModalProvider';
import { ModalBaseProps as ModalProps } from './ModalBase/types';

export * from './ModalBase/types';
export * from './Mgr/types';
export { ModalProvider, ModalShownCtx };

export default function Modal(props: ModalProps) {
  const ctx = React.useContext(ModalConfigCtx);

  if (!ctx.mgr) {
    return null;
  }

  return <ModalBase {...props} mgr={ctx.mgr} config={ctx.config} />;
}

export interface HocModalShownProps {
  modalShown: boolean;
}

/**
 * Контекст для частей приложения, сообщающий об открытии/закрытии модального окна
 */
export function withHocModalShown<P extends HocModalShownProps>(
  Cmp: React.ComponentType<P>
): React.FC<Omit<P, 'modalShown'>> {
  function HocModalShown(props: P & HocModalShownProps) {
    return <Cmp {...(props as P)} modalShown={React.useContext(ModalShownCtx)} />;
  }

  HocModalShown.displayName = `withHocModalShown${Cmp.displayName || Cmp.name}`;

  return HocModalShown as React.FC<Omit<P, 'modalShown'>>;
}
