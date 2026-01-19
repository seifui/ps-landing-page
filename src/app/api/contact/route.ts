import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Here you can integrate with your preferred email service:
    // - Resend, SendGrid, Mailgun, etc.
    // - Save to database
    // - Send to a webhook
    // - Add to your CRM
    
    // Example: Log the email (replace with your actual integration)
    console.log('New contact form submission:', email);
    
    // TODO: Integrate with your email service
    // Send notifications to: info@prezsolabs.com
    // Example with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'contact@prezsolabs.com', // Your verified domain
      to: 'info@prezsolabs.com',
      subject: 'New Contact Form Submission - Landing Page',
      html: `
        <h2>New Lead from Landing Page</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Landing Page CTA Section</p>
      `,
    });
    
    // Optional: Send auto-reply to the user
    await resend.emails.send({
      from: 'info@prezsolabs.com',
      to: email,
      subject: 'Thanks for reaching out to Prezso Labs!',
      html: `
        <h2>We received your message</h2>
        <p>Thanks for your interest! Our team will get back to you within 24 hours.</p>
        <p>Best regards,<br>Prezso Labs Team</p>
      `,
    });
    */
    
    // Example: Save to database
    /*
    await db.contacts.create({
      data: {
        email,
        createdAt: new Date(),
      },
    });
    */
    
    return NextResponse.json(
      { message: 'Email submitted successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
