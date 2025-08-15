export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const base = process.env.APPS_SCRIPT_URL;
  if (!base)
    return new Response(JSON.stringify({ error: "APPS_SCRIPT_URL missing" }), {
      status: 500,
    });

  const upstream = new URL(base);
  new URL(req.url).searchParams.forEach((v, k) =>
    upstream.searchParams.set(k, v)
  );

  const r = await fetch(upstream.toString(), {
    cache: "no-store",
    redirect: "follow",
  });
  const ct = r.headers.get("content-type") || "";
  const text = await r.text();

  if (!r.ok || ct.includes("text/html")) {
    console.error("GAS upstream", {
      status: r.status,
      ct,
      preview: text.slice(0, 200),
    });
    return new Response(
      JSON.stringify({
        error: "LOGIN_REQUIRED_OR_WRONG_URL",
        status: r.status,
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
  return new Response(text, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
