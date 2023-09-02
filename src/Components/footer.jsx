import React from "react";
import "./footer.scss";

const Afooter = () => {
  return (
    <footer className="footer footer-home mt-auto py-3 text-secondary">
      <div className="container d-md-flex justify-content-between">
        <div>
          All rights reserved | Impressum | Datenschutz | AGB | Code of Conduct
          | Hinweisgeberschutzgesetz
        </div>
        <div>Join us on Instagram | LinkedIn</div>
      </div>
    </footer>
  );
};

export default Afooter;
