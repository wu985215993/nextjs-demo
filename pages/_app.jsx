import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import "./global.css";

export default function _app({ Component, ...props }) {
  return (
    <div>
      <h1>模板</h1>
      <Header />
      <Component {...props} />
    </div>
  );
}
