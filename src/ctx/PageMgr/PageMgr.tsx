import React from 'react';
import { bodyScroll } from 'sys/bodyScroll';
import PageMgrCtx from './PageMgrCtx';
import { Page, PageMgrValue } from './types';

interface State {
  pageMgr: PageMgrValue;
}

/**
 * @deprecated
 */
class PageMgr extends React.Component<{}, State> {
  public static Page = Page;
  private static handlerOpen: ((p: Page) => void) | null = null;
  private static handlerClose: ((p: Page) => void) | null = null;

  public static open(page: Page) {
    PageMgr.handlerOpen && PageMgr.handlerOpen(page);
  }
  public static close(page: Page) {
    PageMgr.handlerClose && PageMgr.handlerClose(page);
  }

  public constructor(props: {}) {
    super(props);

    this.state = {
      pageMgr: {
        hasUserInteraction: false,
        topPage: Page.SINGLE,
      },
    };

    PageMgr.handlerOpen = this.openPage;
    PageMgr.handlerClose = this.closePage;
  }

  private openPage = (page: Page): void => {
    const { pageMgr } = this.state;

    this.setState({
      pageMgr: {
        ...pageMgr,
        topPage: page,
      },
    });

    bodyScroll.off();
  };

  private closePage = (): void => {
    const { pageMgr } = this.state;

    bodyScroll.on();

    this.setState({
      pageMgr: {
        ...pageMgr,
        topPage: Page.SINGLE,
      },
    });
  };

  public render() {
    return (
      <PageMgrCtx.Provider value={this.state.pageMgr}>{this.props.children}</PageMgrCtx.Provider>
    );
  }
}

export default PageMgr;
