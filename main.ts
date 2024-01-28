import { TagClient } from "./deps.ts";

Deno.serve(async (req) => {

    const token = Deno.env.get("GITHUB_TOKEN") ?? "not-set";
    const haveToken = token.startsWith("ghp_");

    const reqInfo = `URL: ${req.url}` +
        `\nMethod: ${req.method}` +
        `\nHave Token: ${haveToken}`;


    const tagClient: TagClient = new TagClient("KinsonDigital", "Velaptor", token);
    const tags = await tagClient.getAllTags();
    const tagVersions = tags.map((tag) => tag.name);
    // const body: BodyInit = JSON.stringify(tagVersions);
    const body: BodyInit = reqInfo;

    return new Response(body);
});
