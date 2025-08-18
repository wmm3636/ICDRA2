export const registrationConfirmationEmailTemplate = (firstName: string, registrationType?: string): string => {
  const isPreIcdraOnly = registrationType === 'PRE_ICDRA_ONLY';
  const conferenceTitle = isPreIcdraOnly ? 'Pre-ICDRA Conference' : 'ICDRA Conference';
  const conferenceDate = isPreIcdraOnly ? '13 - 14 April 2026' : 'ICDRA 2026';
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation - ${conferenceTitle}</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .content {
                color: #333;
                font-size: 16px;
            }
            .highlight {
                background-color: #f0f8ff;
                padding: 15px;
                border-left: 4px solid #007bff;
                margin: 20px 0;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                font-size: 14px;
                color: #666;
            }
            .contact-info {
                margin-top: 20px;
            }
            .who-logo {
                margin-top: 30px;
                text-align: center;
            }
            .who-logo img {
                max-width: 150px;
                height: auto;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="color: #2c3e50; margin-bottom: 10px;">Registration Confirmation</h1>
                <h2 style="color: #34495e; font-weight: normal;">${conferenceTitle}</h2>
            </div>
            
            <div class="content">
                <p><strong>Dear ${firstName}</strong></p>
                
                <p>Thank you for applying to attend the ${conferenceTitle} ${isPreIcdraOnly ? `on the <strong>${conferenceDate}</strong>` : 'in Saudi Arabia 2026'}.</p>
                
                <div class="highlight">
                    <p><strong>Your application is being reviewed and you will receive further details once a decision has been made regarding your registration.</strong></p>
                </div>
                
                <p>We appreciate your interest in participating in this important global health initiative.</p>
                
                <div class="contact-info">
                    <p><strong>Kind regards,</strong></p>
                    <p><strong>Saudi Food and Drug Authority (SFDA)</strong></p>
                    <p><a href="mailto:icdra@sfda.gov.sa" style="color: #007bff;">icdra@sfda.gov.sa</a></p>
                </div>
            </div>
            
            <div class="footer">
                <div class="who-logo">
                    <img src="" alt="World Health Organization" />
                </div>
                <p style="text-align: center; margin-top: 15px;">
                    This is an automated message. Please do not reply to this email directly.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};