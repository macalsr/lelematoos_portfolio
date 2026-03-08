"use client";

import { Studio } from "sanity";
import config from "../../../../studio-lele-matos-site/sanity.config";

export default function AdminStudioPage() {
  return <Studio config={config} />;
}
