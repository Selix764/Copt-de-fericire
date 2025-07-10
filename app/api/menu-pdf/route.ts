import { NextRequest, NextResponse } from 'next/server'

// Hardcoded Google Drive configuration
const GOOGLE_API_KEY = 'AIzaSyDR7NKoe_W-PSJlTOYJZAzZYavhXP_6E2I'
const GOOGLE_DRIVE_FILE_ID = '1syb-SgovlRgSXTXgslq72fWAvQ7eOUxC'

export async function GET(request: NextRequest) {
  try {
    // First, get file metadata to check if it exists and is accessible
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${GOOGLE_DRIVE_FILE_ID}?key=${GOOGLE_API_KEY}&fields=id,name,mimeType,modifiedTime,size`
    
    const metadataResponse = await fetch(metadataUrl)
    
    if (!metadataResponse.ok) {
      console.error('Error fetching file metadata:', metadataResponse.status, metadataResponse.statusText)
      return NextResponse.redirect(new URL('/menu.pdf', request.url))
    }

    const fileMetadata = await metadataResponse.json()

    // Check if it's a PDF file
    if (fileMetadata.mimeType !== 'application/pdf') {
      console.error('File is not a PDF:', fileMetadata.mimeType)
      return NextResponse.redirect(new URL('/menu.pdf', request.url))
    }

    // Get the file content
    const fileUrl = `https://www.googleapis.com/drive/v3/files/${GOOGLE_DRIVE_FILE_ID}?alt=media&key=${GOOGLE_API_KEY}`
    
    const fileResponse = await fetch(fileUrl)
    
    if (!fileResponse.ok) {
      console.error('Error fetching file content:', fileResponse.status, fileResponse.statusText)
      return NextResponse.redirect(new URL('/menu.pdf', request.url))
    }

    const fileBuffer = await fileResponse.arrayBuffer()
    
    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${fileMetadata.name || 'menu.pdf'}"`,
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'Last-Modified': fileMetadata.modifiedTime || new Date().toUTCString(),
      },
    })
    
    return response

  } catch (error) {
    console.error('Error fetching PDF from Google Drive:', error)
    
    // Fallback to static PDF if Google Drive fails
    return NextResponse.redirect(new URL('/menu.pdf', request.url))
  }
}

// Also handle HEAD requests for proper PDF loading
export async function HEAD(request: NextRequest) {
  try {
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${GOOGLE_DRIVE_FILE_ID}?key=${GOOGLE_API_KEY}&fields=id,name,mimeType,modifiedTime,size`
    
    const metadataResponse = await fetch(metadataUrl)
    
    if (!metadataResponse.ok) {
      return new NextResponse(null, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
        },
      })
    }

    const fileMetadata = await metadataResponse.json()

    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': fileMetadata.size || '0',
        'Last-Modified': fileMetadata.modifiedTime || new Date().toUTCString(),
      },
    })

  } catch (error) {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
  }
} 