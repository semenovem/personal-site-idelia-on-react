import { ModalConfigProps } from './Mgr/types';
import css from './style.module.css';

export function parseModalConfig({ className, defaultKind, kinds }: ModalConfigProps) {
  return {
    className,
    defaultKind: defaultKind || 'default',
    kinds:
      kinds && typeof kinds === 'object'
        ? kinds
        : {
            default: {
              className: css.defModal,
            },
          },
  };
}
