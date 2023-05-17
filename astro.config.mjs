import { defineConfig } from "astro/config"
import remarkFlexibleMarkers from "remark-flexible-markers"
import remarkTypograf from "@mavrin/remark-typograf"

export default defineConfig({
    markdown: {
        drafts: true,
        remarkPlugins: [
            remarkFlexibleMarkers,
            [remarkTypograf, { locale: ["ru"] }],
        ],
        rehypePlugins: [],
    }
    // your configuration options here...
    // https://docs.astro.build/en/reference/configuration-reference/
})
