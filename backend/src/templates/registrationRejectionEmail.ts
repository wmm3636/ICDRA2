export const registrationRejectionEmailTemplate = (firstName: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Status - Pre-ICDRA Conference</title>
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
            .content {
                color: #333;
                font-size: 16px;
            }
            .contact-info {
                margin-top: 20px;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                font-size: 14px;
                color: #666;
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
            <div class="content">
                <p><strong>Dear ${firstName}</strong></p>
                
                <p>We regret to inform you that your registration to attend the Pre ICDRA conference has been declined.</p>
                
                <div class="contact-info">
                    <p><strong>Kind regards,</strong></p>
                    
                    <p>Saudi Food and Drug Authority (SFDA)</p>
                    
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