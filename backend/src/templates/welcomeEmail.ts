export const welcomeEmailTemplate = (firstName: string, email: string, tempPassword: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to ICDRA 2025</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <div style="background-color: #2563eb; padding: 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to ICDRA 2025</h1>
                <p style="color: #ffffff; margin: 5px 0 0 0;">International Conference of Drug Regulatory Authorities</p>
            </div>
            
            <div style="padding: 40px 20px;">
                <h2 style="color: #333333; margin-bottom: 20px;">Hello ${firstName},</h2>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 30px;">
                    Your account has been successfully created for ICDRA 2025. You can now access the conference platform using the credentials below:
                </p>
                
                <div style="background-color: #f8f9fa; border-left: 4px solid #2563eb; padding: 20px; margin: 30px 0;">
                    <h3 style="color: #333333; margin-top: 0;">Login Credentials</h3>
                    <p style="color: #666666; margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #666666; margin: 10px 0;"><strong>Temporary Password:</strong> <code style="background-color: #e9ecef; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${tempPassword}</code></p>
                </div>
                
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 15px; margin: 30px 0;">
                    <h4 style="color: #856404; margin-top: 0;">⚠️ Important Security Notice</h4>
                    <p style="color: #856404; margin-bottom: 0; line-height: 1.5;">
                        This is a temporary password. For your security, please change your password immediately after your first login.
                    </p>
                </div>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 20px;">
                    You can access the ICDRA 2025 platform and update your password through your account settings.
                </p>
                
                <p style="color: #666666; line-height: 1.6; margin-bottom: 30px;">
                    If you have any questions or need assistance, please don't hesitate to contact our support team.
                </p>
                
                <div style="text-align: center; margin: 40px 0;">
                    <p style="color: #666666; margin-bottom: 15px;">Welcome to ICDRA 2025!</p>
                    <p style="color: #999999; font-size: 14px;">The ICDRA 2025 Team</p>
                </div>
                
                <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 40px;">
                    <p style="color: #999999; font-size: 12px; line-height: 1.4;">
                        This is an automated message from ICDRA 2025. Please do not reply to this email.
                        If you did not expect this account creation, please contact our support team immediately.
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};