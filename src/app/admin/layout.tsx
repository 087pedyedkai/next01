// Admin Layout
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <h1>Admin Panel</h1>
                {children}
            </body>
        </html>
    );
}
