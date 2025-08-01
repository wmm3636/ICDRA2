export const registrationConfirmationEmailTemplate = (firstName: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmation - Pre-ICDRA Conference</title>
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
                <h2 style="color: #34495e; font-weight: normal;">Pre-ICDRA Conference</h2>
            </div>
            
            <div class="content">
                <p><strong>Dear ${firstName}</strong></p>
                
                <p>Thank you for applying to attend the Pre-ICDRA conference on the <strong>13 - 14 April 2026</strong>.</p>
                
                <div class="highlight">
                    <p><strong>Your application is now being reviewed, and you will be notified soon in relation to the outcome.</strong></p>
                </div>
                
                <p>If you have applied under the Industry / Non-Government category and if approved, you will be required to make payment and instructions on how to proceed with this will be included in the approval email.</p>
                
                <p>Please do not hesitate to contact us if you have any questions.</p>
                
                <div class="contact-info">
                    <p><strong>Kind regards</strong><br>
                    Saudi Food and Drug Authority (SFDA)</p>
                    
                    <p><a href="mailto:icdra@sfda.gov.sa" style="color: #007bff;">icdra@sfda.gov.sa</a></p>
                </div>
            </div>
            
            <div class="footer">
                <div class="who-logo">
                    <img src="" alt="World Health Organization" />
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};