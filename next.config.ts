import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      @import "src/shared/ui-kit/colors.scss"; 
      @import "src/shared/ui-kit/palette.scss"; 
      @import "src/shared/ui-kit/radius.scss";
      @import "src/shared/ui-kit/typography.scss";
    `
  },
};

export default nextConfig;