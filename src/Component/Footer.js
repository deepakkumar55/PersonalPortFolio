import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Deepak Kumar. All rights reserved.
                </p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
                    <a href="/contact" className="hover:text-white">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
