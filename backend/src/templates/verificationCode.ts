export const verificationCodeTemplate = (code: string, firstName: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verification Code - ICDRA 2025</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <div style="background-color: #2563eb; padding: 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">ICDRA 2025</h1>
                <p style="color: #ffffff; margin: 5px 0 0 0;">International Conference of Drug Regulatory Authorities</p>
            </div>
            
            <div style="padding: 40px 20px;">
                <h2 style="color: #333333; margin-bottom: 20px;">Hello ${firstName},</h2>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 30px;">
                    You requested to sign in to your ICDRA 2025 account. Please use the verification code below to complete your login:
                </p>
                
                <div style="text-align: center; margin: 40px 0;">
                    <div style="display: inline-block; background-color: #f8f9fa; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px 40px;">
                        <h1 style="color: #2563eb; margin: 0; font-size: 36px; letter-spacing: 8px; font-weight: bold;">${code}</h1>
                    </div>
                </div>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 20px;">
                    This code will expire in <strong>15 minutes</strong> for security purposes.
                </p>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 30px;">
                    If you didn't request this code, please ignore this email or contact our support team.
                </p>
                
                <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 40px;">
                    <p style="color: #999999; font-size: 12px; line-height: 1.4;">
                        This is an automated message from ICDRA 2025. Please do not reply to this email.
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};