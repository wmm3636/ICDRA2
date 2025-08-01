export const newEnquiryNotificationEmailTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string,
  enquiryId: string
): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry Received - Action Required</title>
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
                padding: 20px;
                background-color: #fff3cd;
                border-radius: 5px;
                border-left: 4px solid #ffc107;
            }
            .content {
                color: #333;
                font-size: 16px;
            }
            .enquiry-details {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #007bff;
            }
            .message-box {
                background-color: #e3f2fd;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                border: 1px solid #bbdefb;
            }
            .action-required {
                background-color: #fff3cd;
                color: #856404;
                padding: 15px;
                border-radius: 5px;
                border-left: 4px solid #ffc107;
                margin: 20px 0;
                font-weight: bold;
            }
            .contact-info {
                margin-top: 20px;
                padding: 15px;
                background-color: #e8f5e8;
                border-radius: 5px;
                border-left: 4px solid #28a745;
            }
            .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                font-size: 14px;
                color: #666;
            }
            .reference-id {
                font-family: monospace;
                background-color: #f1f3f4;
                padding: 5px 8px;
                border-radius: 3px;
                color: #1976d2;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="color: #856404; margin: 0;">📧 New Enquiry Received</h1>
                <p style="margin: 10px 0 0 0; color: #856404;">Action Required</p>
            </div>
            
            <div class="content">
                <p><strong>Dear Team,</strong></p>
                
                <div class="action-required">
                    <p style="margin: 0;">A new enquiry has been submitted and requires your attention. Please address this enquiry promptly.</p>
                </div>
                
                <div class="enquiry-details">
                    <h3 style="margin-top: 0; color: #2c3e50;">Enquiry Details:</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Reference ID:</td>
                            <td style="padding: 8px 0;"><span class="reference-id">${enquiryId.substring(0, 8).toUpperCase()}</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
                            <td style="padding: 8px 0;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
                            <td style="padding: 8px 0; font-weight: bold;">${subject}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
                            <td style="padding: 8px 0;">${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</td>
                        </tr>
                    </table>
                </div>
                
                <div>
                    <h4 style="color: #2c3e50; margin-bottom: 10px;">Message:</h4>
                    <div class="message-box">
                        <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
                
                <div class="contact-info">
                    <h4 style="margin-top: 0; color: #2c3e50;">Next Steps:</h4>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Review the enquiry details above</li>
                        <li>Log into the admin portal to manage this enquiry</li>
                        <li>Respond to the enquirer within 24-48 hours</li>
                        <li>Update the enquiry status in the system</li>
                    </ul>
                </div>
                
                <p style="margin-top: 25px;"><strong>Best regards,</strong><br>
                ICDRA System<br>
                Automated Notification Service</p>
            </div>
            
            <div class="footer">
                <p style="margin: 0; color: #888; font-size: 12px;">
                    This is an automated notification. Please do not reply to this email directly.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};