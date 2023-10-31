import React from "react";

export default (props) => {
  console.log(props);
  return <div>电影详情页 id{props.router.query.id}</div>;
};
