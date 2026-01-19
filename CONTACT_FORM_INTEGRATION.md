# Contact Form Integration Guide

The contact form has been implemented with full functionality. Here's how to integrate it with various services:

## What's Been Implemented

✅ **Frontend Component** (`src/components/CTASection.tsx`)
- Form state management
- Email validation
- Loading states
- Success/error notifications
- Accessible form controls

✅ **API Endpoint** (`src/app/api/contact/route.ts`)
- Email validation
- Error handling
- Ready for integration with email services

## Integration Options

### Option 1: Resend (Recommended - Modern & Simple)

**Installation:**
```bash
npm install resend
```

**Setup:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

**Update** `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validation...
    
    // Send email notification
    await resend.emails.send({
      from: 'contact@yourdomain.com', // Must be verified domain
      to: 'your-team@company.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Lead!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    
    // Optional: Send confirmation to user
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
        <h2>We received your message</h2>
        <p>We'll get back to you within 24 hours.</p>
      `,
    });
    
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

---

### Option 2: SendGrid

**Installation:**
```bash
npm install @sendgrid/mail
```

**Setup:**
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { email } = await request.json();
  
  const msg = {
    to: 'your-team@company.com',
    from: 'contact@yourdomain.com',
    subject: 'New Contact Form Submission',
    html: `<p>New lead: ${email}</p>`,
  };
  
  await sgMail.send(msg);
  
  return NextResponse.json({ message: 'Success' });
}
```

---

### Option 3: Save to Database (Supabase)

**Installation:**
```bash
npm install @supabase/supabase-js
```

**Create table in Supabase:**
```sql
create table contacts (
  id uuid default uuid_generate_v4() primary key,
  email text not null,
  created_at timestamp with time zone default now()
);
```

**Setup:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  const { email } = await request.json();
  
  const { error } = await supabase
    .from('contacts')
    .insert({ email });
  
  if (error) throw error;
  
  return NextResponse.json({ message: 'Success' });
}
```

---

### Option 4: Webhook Integration (Make.com, Zapier, n8n)

**Simple webhook approach:**
```typescript
export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Send to your webhook
  await fetch(process.env.WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      timestamp: new Date().toISOString(),
      source: 'landing-page',
    }),
  });
  
  return NextResponse.json({ message: 'Success' });
}
```

From your webhook service, you can:
- Add to Google Sheets
- Send to Slack
- Add to CRM (HubSpot, Salesforce)
- Trigger email campaigns
- And much more!

---

### Option 5: Multiple Services (Recommended for Production)

Combine multiple approaches for redundancy:

```typescript
export async function POST(request: Request) {
  const { email } = await request.json();
  
  try {
    // Save to database
    await supabase.from('contacts').insert({ email });
    
    // Send email notification
    await resend.emails.send({...});
    
    // Trigger webhook for automation
    await fetch(process.env.WEBHOOK_URL!, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    // Log error but still return success to user
    console.error('Integration error:', error);
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  }
}
```

---

## Testing

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Try submitting with:
   - Empty email (should show error)
   - Invalid email (should show error)
   - Valid email (should show success)

---

## Security Best Practices

1. **Rate Limiting** - Add rate limiting to prevent spam:
   ```bash
   npm install @upstash/ratelimit @upstash/redis
   ```

2. **CAPTCHA** - Add Google reCAPTCHA for bot protection

3. **Environment Variables** - Never commit API keys to git

4. **Validation** - Always validate on both client and server

---

## Advanced Features (Optional)

### Add Message Field

Update the form to include a message textarea:

```typescript
// In CTASection.tsx
const [message, setMessage] = useState('');

// Add to form:
<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Tell us about your project..."
  className="..."
/>
```

### Add Name Field

```typescript
const [name, setName] = useState('');

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Your name"
  className="..."
/>
```

---

## Need Help?

Choose the integration that best fits your needs:
- **Quick & Simple**: Resend or Webhook
- **Existing Setup**: Match your current email provider
- **Data Storage**: Supabase or your database
- **Marketing**: Combine with CRM webhooks

Start with the simplest option and expand as needed!
