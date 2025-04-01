import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phan Trung Điền - Portfolio",
    short_name: "Phan Trung Điền - Portfolio",
    description: "Phan Trung Điền - Portfolio",
    start_url: "/index.html",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
  }
}
