import React from 'react';

import Modal from 'packages/modal';
import css from './dev-modal.module.css';

export interface Props {
  modalShown: boolean;
}

export function DevModal({ modalShown }: Props) {
  const [modal0, setModal0] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);

  return (
    <>
      <Btn text="modal 0" onClick={() => setModal0(true)} tabIndex={modalShown ? -1 : 0} />
      <Btn text="modal 1" onClick={() => setModal1(true)} tabIndex={modalShown ? -1 : 0} />
      <Btn text="modal 2" onClick={() => setModal2(true)} tabIndex={modalShown ? -1 : 0} />
      <Btn text="modal 3" onClick={() => setModal3(true)} tabIndex={modalShown ? -1 : 0} />
      <Btn text="modal 4" onClick={() => setModal4(true)} tabIndex={modalShown ? -1 : 0} />

      <Modal isOpen={modal0} onRequestClose={() => setModal0(false)}>
        modal 0
        <Btn text="modal 4" onClick={() => setModal4(true)} />
        <Modal isOpen={modal4} onRequestClose={() => setModal4(false)}>
          modal 4
        </Modal>
      </Modal>

      <Modal isOpen={modal1} onRequestClose={() => setModal1(false)}>
        modal 1
      </Modal>

      <Modal isOpen={modal2} onRequestClose={() => setModal2(false)}>
        modal 2
      </Modal>

      <Modal isOpen={modal3} onRequestClose={() => setModal3(false)} layout={Layout4Class}>
        <Layout1 header="modal 3 header" content="modal 3 content" footer="modal 3 content" />
      </Modal>
    </>
  );
}

export function Layout0({ children }: { children: React.ReactNode }) {
  return <div className={css.layout0}>{children}</div>;
}

export function Layout1({
  header,
  content,
  footer,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className={css.layout0}>
      <div>{header}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
}

/**
 * Временная кнопка
 */
function Btn({
  onClick,
  text,
  ...rest
}: { onClick: (event: React.MouseEvent) => void; text: string } & React.ComponentProps<any>) {
  return (
    <button
      type="button"
      style={{ fontSize: '20px', padding: '20px', margin: '20px' }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}

interface Layout4ClassProps {}

class Layout4Class extends React.Component<Layout4ClassProps> {
  public componentDidMount() {
    console.log('component did mount');
  }

  public render() {
    const { children } = this.props;
    return <div className={css.layout0}>{children}</div>;
  }
}
