import React from 'react';
import { ModalConfigCtx } from './Ctx';
import ModalBase from './ModalBase';
import { ModalBaseProps } from './ModalBase/types';

/**
 * Модальность для компонента
 */
export function withModality<P extends object>(
  Cmp: React.FC<P> | React.ComponentClass<P>
): React.FC<P & ModalBaseProps> {
  function HocModality({ isOpen, isKeepTree, onRequestClose, ...rest }: P & ModalBaseProps) {
    const ctx = React.useContext(ModalConfigCtx);

    if (!ctx.mgr) {
      return null;
    }

    return (
      <ModalBase
        isOpen={isOpen}
        isKeepTree={isKeepTree}
        onRequestClose={onRequestClose}
        mgr={ctx.mgr}
      >
        <Cmp {...(rest as P)} onRequestClose={onRequestClose} />
      </ModalBase>
    );
  }

  HocModality.displayName = `withHocModality${Cmp.displayName || Cmp.name}`;

  return HocModality;
}

/*








 */

interface Layout0Props {
  title?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;

  // передать через контекст
  onRequestClose(): void;
  addListenerOnRequestClose?: (callback: (via?: string) => void) => void;
  removeListenerOnRequestClose?: (callback: (via?: string) => void) => void;
}

function Layout0({ title, content, footer, onRequestClose }: Layout0Props) {
  return (
    <div className="modal">
      {title && <h3>{title}</h3>}
      {content && <div>{content}</div>}
      {footer && <div>{footer}</div>}
      <button
        type="button"
        onClick={() => {
          onRequestClose();
        }}
      >
        Закрыть
      </button>
    </div>
  );
}

const LayoutWithHocModality = withModality<Layout0Props>(Layout0);

function use(): React.ReactNode {
  return (
    <LayoutWithHocModality
      title="Title for layout 0"
      content="content for layout 0"
      footer="footer for layout 0"
      onRequestClose={() => {
        debugger;
      }}
      hasCrossClosing
    >
      <div
        className="sfdsf"
        onClick={() => {
          debugger;
        }}
      >
        some code
      </div>
    </LayoutWithHocModality>
  );
}

/*


 */

function ContentModal() {


  return (
    <div
      className="sfdsf"
      onClick={() => {
        debugger;
      }}
    >
      {}
    </div>
  );
}


