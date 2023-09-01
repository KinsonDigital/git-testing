
Deno.serve((req) => {

    // Get the query parameters from the incoming deno request
    const params = new URLSearchParams(req.url.split("?")[1]);

    const reqParams: string[] = [];

    params.forEach((value, key) => {
        reqParams.push(`${key}: ${value}`);
    });

    const result = reqParams.join("\n");

    return new Response(result);
});
