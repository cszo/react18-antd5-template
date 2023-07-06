import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const lazyLoad = (componentPath: any) => {
  const AntdIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const Comp = lazy(() => import(componentPath));

  return (
    <Suspense fallback={<Spin indicator={AntdIcon} />}>
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
