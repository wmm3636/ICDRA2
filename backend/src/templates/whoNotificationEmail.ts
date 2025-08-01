export const whoNotificationEmailTemplate = (
  attendeeName: string, 
  registrationId: string,
  approveUrl: string,
  rejectUrl: string
): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Registration - Application to Attend</title>
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
                border-bottom: 2px solid #007bff;
                padding-bottom: 20px;
            }
            .content {
                color: #333;
                font-size: 16px;
            }
            .registration-details {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
            }
            .action-buttons {
                text-align: center;
                margin: 30px 0;
            }
            .btn {
                display: inline-block;
                padding: 12px 30px;
                margin: 0 10px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                text-align: center;
                font-size: 16px;
            }
            .btn-approve {
                background-color: #28a745;
                color: white;
            }
            .btn-reject {
                background-color: #dc3545;
                color: white;
            }
            .btn:hover {
                opacity: 0.9;
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
            .detail-link {
                background-color: #e3f2fd;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                word-break: break-all;
            }
            .detail-link a {
                color: #1976d2;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="color: #2c3e50; margin-bottom: 10px;">Application to Attend</h1>
            </div>
            
            <div class="content">
                <p><strong>Dear WHO Team,</strong></p>
                
                <p>Please can you review the below registration and click on the approved or reject link to action this registration.</p>
                
                <div class="detail-link">
                    <a href="${process.env.FRONTEND_URL || 'https://www.eiseverywhere.com'}/ereg/record.php?id=${registrationId}" target="_blank">
                        ${process.env.FRONTEND_URL || 'https://www.eiseverywhere.com'}/ereg/record.php?id=${registrationId}
                    </a>
                </div>
                
                <p><strong>Kind regards</strong><br>
                SFDA ICDRA Team</p>
                
                <div class="registration-details">
                    <h3 style="margin-top: 0; color: #2c3e50;">Registration Details:</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li><strong>• Attendee name:</strong> ${attendeeName}</li>
                        <li><strong>• Event name:</strong> Pre-ICDRA</li>
                    </ul>
                </div>
                
                <div class="action-buttons">
                    <a href="${approveUrl}" class="btn btn-approve">Approve this Registration</a>
                    <a href="${rejectUrl}" class="btn btn-reject">Reject this Registration</a>
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