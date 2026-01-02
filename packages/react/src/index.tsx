import React from "react";
import { linkify } from "@smart-linkify/core";
import type { LinkifyOptions } from "@smart-linkify/core";

interface Props {
  text: string;
  options?: LinkifyOptions;
}

export function SmartLinkify({ text, options }: Props) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: linkify(text, options)
      }}
    />
  );
}
