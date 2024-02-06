// This component was created to fix an issue related with the styles when the page loads, is related to NextJS and Antd

"use client";

import React, { ReactNode, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

// Define the type for the component's props
interface AntdStyledComponentsRegistryProps {
  children: ReactNode;
}

export default function AntdStyledComponentsRegistry({
  children,
}: AntdStyledComponentsRegistryProps) {
  const [cache] = useState(() => createCache()); // gets antd cached styles

  // insert cache style on the server
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    ></style>
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
}