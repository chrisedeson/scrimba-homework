export default function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a 
                    href="https://www.linkedin.com/in/christopher-edeson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    Chrisflex
                </a>. All rights reserved.
            </p>
        </footer>
    );
}
