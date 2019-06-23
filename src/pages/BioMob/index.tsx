import React from 'react';

import Bio from 'mod/Bio';

import { withCtxPageMgr, Page, PageMgrProps } from 'ctx/PageMgr';

import css from './style.module.css';

interface OwnProps {}
type Props = OwnProps & PageMgrProps;

/**
 *  TODO Work in progress
 */

class BioMob extends React.Component<Props> {
  public shouldComponentUpdate({ pageMgr }: Props) {
    return this.props.pageMgr.topPage === Page.PHOTOS_VIEWER || pageMgr.topPage === Page.PHOTOS_VIEWER;
  }

  render() {
    const { pageMgr } = this.props;

    if (pageMgr.topPage !== Page.BIO_MOB) {
      return null;
    }


    return (
      <div className={css.bioMob}>

        <Bio />

        footer
      </div>
    );
  }
}

export default withCtxPageMgr<OwnProps>(Page.BIO_MOB, BioMob);
