import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import pool from "@/helper/db";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const fullname = formData.get("fullname");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const location = formData.get("location");
    const message = formData.get("message");

    const unique_id = uuid();

    // ✅ Insert into Database
    await pool.execute(
      "INSERT INTO contact (id, name, phone, email, location, message) VALUES(?,?,?,?,?,?)",
      [unique_id, fullname, phone, email, location, message] // Store filename, NOT buffer
    );

    // ✅ Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // ✅ Admin Email with Attachment
    const mailOptionsAdmin = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Utsao - Contact Form",
      html: `
            <html>
              <body>
                <h3>You've got a new mail from ${fullname}, their phone number  is: ✉️${phone}, email is ${email}, and location is ${location}</h3>
                <p>Message:</p>
                <p>${message}</p>
              </body>
            </html>`,
    };

    // ✅ Send Email to Admin
    await transporter.sendMail(mailOptionsAdmin);

    // ✅ User Confirmation Email
    const mailOptionsUser = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting Utsao",
      html: `<html>
            <body>
              <h2>Hey ${fullname}!</h2>
              <p>Thank you for reaching out to Utsao. Your query has been noted, and our team will contact you at the earliest.</p>
            </body>
           </html>`,
    };

    // ✅ Send Email to User
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
