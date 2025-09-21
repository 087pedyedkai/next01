export function Footer({txt}: {txt?: string}) {
    return (
        <footer>
        <p>{txt || "This is the footer"}</p>
        </footer>
    )
}