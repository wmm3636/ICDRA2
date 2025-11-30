import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

export const downloadFullProgram = async (req: Request, res: Response) => {
    try {
        const filePath = path.join(__dirname, '../resources/ICDRA2026.pdf');

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Visa form not found' });
        }

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.setHeader('Content-Disposition', 'attachment; filename="ICDRA2026.pdf"');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        fileStream.on('error', (error) => {
            console.error('File download error:', error);
            res.status(500).json({ error: 'Error downloading file' });
        });

    } catch (error) {
        console.error('Download visa form error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};