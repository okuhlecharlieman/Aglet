import React from "react";
import "./footer.scss";

const Afooter = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container d-flex">
        <div className="justify-content-start">
          All rights reserved | Impressum | Datenschutz | AGB | Code of Conduct
          | Hinweisgeberschutzgesetz
        </div>
        <div className="justify-content-end">
          Join us on Instagram | LinkedIn
        </div>
      </div>
    </footer>
  );
};

export default Afooter;
