export const registrationApprovalIcdraOnlyEmailTemplate = (firstName: string, familyName: string, referenceNumber: string, baseUrl: string): string => {
  const visaFormUrl = `${baseUrl}/download/visa-form`;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Approved - ICDRA Conference</title>
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
            .visa-section {
                background-color: #fff3cd;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #ffc107;
            }
            .download-link {
                display: inline-block;
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin: 10px 0;
                font-weight: bold;
            }
            .download-link:hover {
                background-color: #0056b3;
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
            .highlight-box {
                background-color: #e8f5e8;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                border-left: 4px solid #28a745;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <p><strong>Dear ${firstName} ${familyName}</strong></p>
                
                <div class="highlight-box">
                    <p><strong>Your registration has been approved to attend the ICDRA in Saudi Arabia 2026.</strong></p>
                </div>
                
                <div class="section-title">Important: Visa Application Procedure</div>
                <div class="visa-section">
                    <p><strong>To obtain your entry visa to the Kingdom of Saudi Arabia, please follow these steps:</strong></p>
                    <p><strong>Download the Visa Application Form.</strong> (<a href="${visaFormUrl}" class="download-link">Click here to download</a>)</p>
                    
                    <p><strong>Forward this email to <a href="mailto:icd@sfda.gov.sa" style="color: #007bff;">icd@sfda.gov.sa</a> with attaching:</strong></p>
                    <p><strong>1- A clear personal photo with a white background.</strong></p>
                    <p><strong>2- A clear, colored copy of your passport.</strong></p>
                    <p><strong>3- The completed Visa Application Form.</strong></p>
                </div>
                
                <div class="section-title">Important Information for Government / Representative of a National Regulatory Authority</div>
                <div class="highlight-box">
                    <p><strong>Your registration is complete.</strong></p>
                    <p><strong>No further actions are required.</strong></p>
                    <p style="margin-bottom: 0;">• <strong>You are Eligible to attend both PRE-ICDRA & ICDRA Conference.</strong></p>
                </div>
                
                <p>If you have any questions, please do not hesitate to contact the event's team at the SFDA.</p>
                
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
            </div>
        </div>
    </body>
    </html>
  `;
};