import type { NextConfig } from "next";
import { SITE } from "./src/lib/constants";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/cv.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: `attachment; filename="${SITE.cvDownloadName}"`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
