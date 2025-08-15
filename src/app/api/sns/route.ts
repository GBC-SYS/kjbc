export const runtime = "nodejs";

export async function GET(req: Request) {
  const base = process.env.APPS_SCRIPT_URL;
  if (!base)
    return Response.json({ error: "APPS_SCRIPT_URL missing" }, { status: 500 });

  const upstream = new URL(base);
  // 기본 action=read
  if (!upstream.searchParams.has("action"))
    upstream.searchParams.set("action", "read");

  // 요청 쿼리 복사
  new URL(req.url).searchParams.forEach((v, k) =>
    upstream.searchParams.set(k, v)
  );

  const r = await fetch(upstream, { headers: { Accept: "application/json" } });
  const text = await r.text();
  if (!r.ok) {
    return Response.json(
      { error: "GAS_UPSTREAM_ERROR", status: r.status },
      { status: 502 }
    );
  }
  return new Response(text, {
    headers: { "Content-Type": "application/json" },
  });
}
