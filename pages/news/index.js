import React, { Fragment } from "react";
import Link from "next/Link";

function News() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework of react.js
          </Link>
        </li>
        <li>This has nothing to do</li>
      </ul>
    </Fragment>
  );
}

export default News;
