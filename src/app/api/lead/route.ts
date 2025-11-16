import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, resource } = body ?? {};

    if (!name || !email || !company || !resource) {
      return NextResponse.json(
        { ok: false, message: "Faltan datos para procesar tu solicitud" },
        { status: 400 },
      );
    }

    console.log("Nuevo lead", {
      name,
      email,
      company,
      resource,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error registrando lead", error);
    return NextResponse.json({ ok: false, message: "No pudimos guardar tu solicitud" }, { status: 500 });
  }
}
