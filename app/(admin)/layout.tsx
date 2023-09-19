import "../admin.scss";
import Sidebar from "@/components/Admin/Layouts/Sidebar"
export const metadata = {
  title: 'Dashboard',
  description: 'welcome to dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
