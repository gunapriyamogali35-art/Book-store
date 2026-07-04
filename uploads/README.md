# BookStore Backend

Welcome to the uploads directory! This folder stores all uploaded files from the application, including:

- **Book cover images** – Uploaded by sellers when adding new books
- **Profile pictures** – User and seller profile images
- **Documents** – Business licenses and verification documents
- **Other media files** – Additional files uploaded through the platform

## Important Notes

- All uploaded files are automatically assigned unique names to prevent conflicts
- Files are validated for type (images only) and size (5MB max)
- Uploaded files are served as static assets via `/uploads` route
- Regular cleanup of old/unused files is recommended

## Uploaded File Structure

```
uploads/
├── book-cover-{timestamp}.jpg
├── book-cover-{timestamp}.png
├── profile-image-{timestamp}.jpg
└── ...
```

## File Management

Files can be accessed via:
```
http://your-domain.com/uploads/filename
```

Delete operations are handled through API endpoints that also remove the file from this directory.
