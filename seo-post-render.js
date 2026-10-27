const outputDir = Deno.env.get("QUARTO_PROJECT_OUTPUT_DIR") || "docs";
const sitemapPath = `${outputDir}/sitemap.xml`;
const sitemap = await Deno.readTextFile(sitemapPath);
await Deno.writeTextFile(sitemapPath, sitemap.replace("<loc>https://kgao33.github.io/index.html</loc>", "<loc>https://kgao33.github.io/</loc>"));
await Deno.writeTextFile(`${outputDir}/.nojekyll`, "");
