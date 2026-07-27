import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Debugging: Log incoming request data
  console.log("Request Data:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Debugging: Log environment variables
    console.log("Environment Variables:", {
      NEXT_PUBLIC_GMAIL: process.env.NEXT_PUBLIC_GMAIL,
      NEXT_PUBLIC_GMAIL_PASSWORD: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
      EMAIL_USER: process.env.EMAIL_USER,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
      },
    });

    // Debugging: Log transporter configuration
    console.log("Transporter created successfully");

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'bilalsadatravelandtours@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Outfit', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px;">
          <h2 style="color: #f97316; font-size: 24px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #555;">Name:</strong> ${name}</p>
            <p><strong style="color: #555;">Email:</strong> ${email}</p>
            <p><strong style="color: #555;">Message:</strong></p>
            <div style="background: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #f97316;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully to admin");

    // Auto-reply to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Bilal Sada Travel and Tours!',
      html: `
        <div style="font-family: 'Outfit', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #f3f4f6; border-radius: 8px; padding: 20px;">
          <h2 style="color: #f97316; font-size: 24px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Thank you for reaching out, ${name}! 👋
          </h2>
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            We have successfully received your message, and our team will get back to you as soon as possible, usually within 24 hours.
          </p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your message:</h3>
            <div style="background: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #f97316;">
              <em>${message.replace(/\n/g, '<br>')}</em>
            </div>
          </div>
          <p style="color: #374151;">
            Best regards,<br>
            <strong style="color: #f97316;">Bilal Sada Travel and Tours</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">
            If you didn't send this message, please ignore this email.
          </p>
        </div>
      `,
    });

    console.log("Auto-reply sent successfully to user");

    res.status(200).json({ message: 'Message sent successfully! We\'ll get back to you soon.' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again or contact us directly.' 
    });
  }
}