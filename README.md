# Next.js 15 App Not Rendering

This repository demonstrates a common issue in Next.js 15 applications where the app directory is set up correctly, but the page doesn't render.  This is often caused by incorrect configuration or a missing piece in the setup process. This example shows the problem and its solution. 

## Bug

The `pages/index.js` file contains a simple Next.js app. However, it does not render correctly.  The expected behavior is to see "Next.js 15 App" displayed on the screen. 

## Solution

The issue is that Next.js 15 requires a layout for the application to render correctly. Without a layout file (such as `app/layout.js`), the app will fail to render.  This solution adds a `layout.js` file to resolve this issue. 