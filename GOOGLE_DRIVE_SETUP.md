# Google Drive Integration Setup for HotBite Restaurant

This guide explains the Google Drive integration that allows your restaurant menu PDF to be served directly from Google Drive.

## 🚀 Benefits

- **Dynamic Menu Updates**: Change your menu PDF in Google Drive and it automatically updates on your website
- **No Environment Variables**: API key and file ID are hardcoded for simplicity
- **Automatic Fallback**: If Google Drive is unavailable, falls back to static PDF
- **Caching**: Optimized with 5-minute caching for better performance

## 📋 Current Configuration

The integration is currently configured with:

- **API Key**: `AIzaSyDR7NKoe_W-PSJlTOYJZAzZYavhXP_6E2I` (hardcoded)
- **File ID**: `1syb-SgovlRgSXTXgslq72fWAvQ7eOUxC` (hardcoded)
- **Google Drive URL**: https://drive.google.com/file/d/1syb-SgovlRgSXTXgslq72fWAvQ7eOUxC/view?usp=drive_link

## 🔧 How It Works

- **API Route**: `/api/menu-pdf` fetches the PDF directly from Google Drive using API key authentication
- **Caching**: PDFs are cached for 5 minutes to improve performance
- **Fallback**: If Google Drive fails, serves `/public/menu.pdf`
- **Authentication**: Uses Google Drive API v3 with API key (no service account required)

## 📝 Usage Tips

1. **File Format**: Only PDF files are supported
2. **File Size**: Keep PDFs under 10MB for best performance
3. **Updates**: Changes take up to 5 minutes to appear (due to caching)
4. **Backup**: Always keep a static `menu.pdf` in the `/public` folder as fallback

## 🔄 To Update the Menu PDF

1. Replace the PDF file in the Google Drive link above
2. Ensure the new file has the same file ID (don't delete and re-upload, just replace content)
3. Wait up to 5 minutes for the cache to refresh
4. Visit your website to see the updated menu

## 🚨 Troubleshooting

### PDF Not Loading
- Check if the Google Drive file is accessible
- Verify the file format is PDF
- Ensure the Google Drive API key is valid

### Authentication Errors
- The API key may have expired or been revoked
- Check if the Google Drive API is enabled for the API key
- Verify the file permissions allow public access

### Still Not Working?
The system will automatically fall back to serving `/public/menu.pdf` if there are any issues with Google Drive integration.

## 🔒 Security Notes

- The API key is hardcoded in the application code
- The Google Drive file should be publicly accessible
- Consider rotating API keys periodically for security

## ⚙️ Technical Details

The integration uses:
- Google Drive API v3
- Direct HTTP requests with fetch (no googleapis library)
- Hardcoded authentication credentials
- 5-minute response caching
- Automatic fallback to static files

---

## 🎉 Current Status: ✅ Active

Your restaurant menu is now dynamic! The system is currently serving PDFs from the configured Google Drive file. Simply update the PDF in Google Drive and your website will automatically serve the latest version after cache expiration.

For any issues, check the server logs for detailed error messages. 