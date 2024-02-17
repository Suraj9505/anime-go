import React, { Fragment, memo, Suspense } from "react";

// reacr-router
import { Outlet } from "react-router-dom";

//header
import Header from "../headers/header";

//footer
import Footer from "../footer/footer";

const DefaultLayout = memo((props) => {
  return (
    <Fragment>
      {props.header === "true" && <Header />}
      {
        <Suspense fallback={<div className="react-load"></div>}>
          <Outlet></Outlet>
        </Suspense>
      }
      {props.footer === "true" && <Footer />}
    </Fragment>
  );
});

DefaultLayout.displayName = "DefaultLayout";
export default DefaultLayout;
