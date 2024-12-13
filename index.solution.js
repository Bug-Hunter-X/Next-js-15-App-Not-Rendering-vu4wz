```javascript
// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

```
```javascript
// app/page.js
export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
    </div>
  );
}
```