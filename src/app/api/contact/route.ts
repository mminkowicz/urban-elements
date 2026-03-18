import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────────────────────
    // TO SEND REAL EMAILS: install Resend → npm install resend
    // then replace the block below:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Urban Elements <noreply@urbanelements.com>",
    //   to: "oron@urbanelements.com",
    //   subject: `New inquiry from ${firstName} ${lastName}`,
    //   html: `
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    //     <p><strong>Service:</strong> ${service || "N/A"}</p>
    //     <p><strong>Message:</strong> ${message || "N/A"}</p>
    //   `,
    // });
    // ─────────────────────────────────────────────────────────────

    console.log("New contact inquiry:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
