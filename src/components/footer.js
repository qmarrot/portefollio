import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a target="_blank" href="">
                    <GitHubIcon />
                </a>

                <a target="_blank" href="">
                    <LinkedInIcon />
                </a>

                <a target="_blank" href="">
                    <EmailIcon />
                </a>
            </div>

            <p> &copy; 2023 Quentin's Portefolio </p>
        </div>

    );
}

export default Footer;
