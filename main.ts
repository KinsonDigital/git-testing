import { TagClient } from "./deps.ts";

Deno.serve(async (req) => {

    const token = undefined;
    const tagClient: TagClient = new TagClient("KinsonDigital", "Velaptor", token);
    
    const tags = await tagClient.getAllTags();

    const tagVersions = tags.map((tag) => tag.name);

    const body: BodyInit = JSON.stringify(tagVersions);

    return new Response(body);
});
