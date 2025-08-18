export const registrationApprovalPreIcdraOnlyEmailTemplate = (firstName: string, familyName: string, referenceNumber: string, baseUrl: string): string => {
    const visaFormUrl = `${baseUrl}/download/visa-form`;

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
            .visa-section {
                background-color: #fff3cd;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #ffc107;
            }
            .industry-section {
                background-color: #e3f2fd;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #2196f3;
            }
            .reference-box {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                border-left: 4px solid #007bff;
                font-family: monospace;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
            }
            .barcode-placeholder {
                text-align: center;
                padding: 20px;
                background-color: #f0f0f0;
                border: 2px dashed #ccc;
                margin: 10px 0;
                font-style: italic;
                color: #666;
            }
            .download-link {
                color: #007bff;
                text-decoration: none;
                font-weight: bold;
            }
            .download-link:hover {
                text-decoration: underline;
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
            .note-section {
                background-color: #fff8dc;
                padding: 15px;
                border-radius: 5px;
                margin: 20px 0;
                border-left: 4px solid #ff9800;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <p><strong>Dear ${firstName} ${familyName}</strong></p>
                
                <div class="highlight-box">
                    <p><strong>Your registration has been approved to attend the PRE-ICDRA in Saudi Arabia 2026.</strong></p>
                </div>
                
                <div class="section-title">Important: Visa Application Procedure</div>
                <div class="visa-section">
                    <p><strong>To obtain your entry visa to the Kingdom of Saudi Arabia, please follow these steps:</strong></p>
                    <p><strong>Download the Visa Application Form.</strong> (<a href="${visaFormUrl}" class="download-link">Click here to download</a>)</p>
                    
                    <p><strong>Forward this email to <a href="mailto:icd@sfda.gov.sa" class="download-link">icd@sfda.gov.sa</a> with attaching:</strong></p>
                    <p><strong>1- A clear personal photo with a white background.</strong></p>
                    <p><strong>2- A clear, colored copy of your passport.</strong></p>
                    <p><strong>3- The completed Visa Application Form.</strong></p>
                </div>
                
                <div class="section-title">Important Information for Industry / Non-Government</div>
                <div class="industry-section">
                    <p><strong>• Please click on the link below and make the required payment to complete your registration.</strong></p>
                    <p><strong>• Below is your reference number, which you will need in the future. Please keep this email for your records.</strong></p>
                    
                    <p><strong>1. Reference Number: ${referenceNumber}</strong></p>
                    <p><strong>2. Email: ${firstName.toLowerCase()}@xxxx.xx</strong></p>
                    
                    <div class="barcode-placeholder">
                        [Barcode Image Here]
                    </div>
                    
                    <p><strong>• Entry permission: PRE-ICDRA.</strong></p>
                </div>
                
                <div class="note-section">
                    <p><strong>Note:</strong> It is important to ensure that all fields in the form are accurately completed.</p>
                    <p>If you cancel your registration, a 50% refund will be issued under all circumstances.</p>
                    <p>No changes to the registration are permitted.</p>
                    <p>If you have any questions, please do not hesitate to contact the event's team at the SFDA.</p>
                </div>
                
                <div class="contact-info">
                    <p><strong>Kind regards,</strong></p>
                    <p><strong>Saudi Food and Drug Authority (SFDA)</strong></p>
                    <p><a href="mailto:icdra@sfda.gov.sa" class="download-link">icdra@sfda.gov.sa</a></p>
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