export const registrationApprovalEmailTemplate = (firstName: string, familyName: string, referenceNumber: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Approved - Pre-ICDRA Conference</title>
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
            .section-title {
                font-weight: bold;
                color: #2c3e50;
                margin-top: 25px;
                margin-bottom: 10px;
            }
            .reference-box {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                border-left: 4px solid #007bff;
            }
            .barcode-section {
                text-align: center;
                margin: 20px 0;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 5px;
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
                <p><strong>Dear ${firstName} ${familyName}</strong></p>
                
                <p>Your registration has been approved to attend Pre ICDRA.</p>
                
                <div class="section-title">Important Information for Government / Representative of a National Regulatory Authority</div>
                <p>Your registration is complete. No further actions are required.</p>
                
                <div class="section-title">Important Information for Industry / Non-Government</div>
                <p>Please click on the below link and make payment in order to complete your registration. (A payment button is here)</p>
                
                <p>Below is your reference number and bar code which you will need in the future, please keep this email.</p>
                
                <div class="reference-box">
                    <p><strong>Reference Number: ${referenceNumber}</strong></p>
                </div>
                
                <div class="barcode-section">
                    <p><strong>${firstName.toLowerCase()}@xxxx.xx</strong></p>
                    <div style="font-family: 'Courier New', monospace; font-size: 24px; letter-spacing: 2px; margin: 10px 0;">
                        ||||| |||| | |||| |||| ||||| ||| |||||
                    </div>
                </div>
                
                <p>If you cancel your registration a refund of 50% will be refunded in all circumstances.</p>
                
                <p>No changes to the registration are permitted.</p>
                
                <p>If you have any questions, please do not hesitate to contact the events team in the HPRA.</p>
                
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