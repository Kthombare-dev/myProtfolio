import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email to you (notification)
    const notificationMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #D4AF37, #B8941F); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h2>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #D4AF37;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 5px; border-left: 4px solid #2196F3;">
              <p style="margin: 0; color: #1976D2; font-size: 14px;">
                <strong>Quick Actions:</strong><br>
                • Reply directly to: <a href="mailto:${email}" style="color: #1976D2;">${email}</a><br>
                • Submitted on: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out! - Ketan Thombare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #D4AF37, #B8941F); padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">Thank You for Your Message!</h2>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #333; line-height: 1.6;">
              Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I'm excited to learn more about your project.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              I typically respond within 24 hours, so you can expect to hear back from me soon. In the meantime, feel free to check out my recent work on my portfolio.
            </p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #D4AF37; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
              <ul style="color: #333; line-height: 1.6;">
                <li>I'll review your message and get back to you with detailed thoughts</li>
                <li>We can schedule a call to discuss your project in detail</li>
                <li>I'll provide you with a customized proposal based on your needs</li>
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              Looking forward to working together!
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong>Ketan Thombare</strong><br>
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
