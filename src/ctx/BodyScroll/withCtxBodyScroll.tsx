import React from "react";
import BodyScrollCtx from "./BodyScrollCtx";

function withCtxBodyScroll<T>(Component: any) {
  function BodyScrollCtxCmp(props: T) {
    return (
      <BodyScrollCtx.Consumer>
        {bodyScroll => <Component {...props} bodyScroll={bodyScroll} />}
      </BodyScrollCtx.Consumer>
    );
  }

  BodyScrollCtxCmp.displayName = `withBodyScrollCtx(${Component.displayName || Component.name || 'Undefined'})`;

  return BodyScrollCtxCmp;
}

export default withCtxBodyScroll;
