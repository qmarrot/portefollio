import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/footer.css";


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <div className="socialMediaGit">
                    <a target="_blank" href="https://github.com/qmarrot">
                        <GitHubIcon />
                    </a>
                </div>

                <a target="_blank" href="https://www.linkedin.com/in/quentin-marrot-4220b9179/">
                    <LinkedInIcon />
                </a>
            </div>

            <p> &copy; 2024 Quentin's Portefolio </p>
        </div>

    );
}

export default Footer;
