import Styles from '@styles/style.module.css';

export default function Topbar() {
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
            <i className="bi bi-phone"></i> +1 5589 55488 55
          </div>
        </div>
      </div>
    </>
  )
}