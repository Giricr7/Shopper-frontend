import { IconButton, Typography } from "@material-ui/core"
import React from "react"
import Navbar from "./Navbar"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import YouTubeIcon from "@material-ui/icons/YouTube"

export const Base = ({ className, children }) => {
  return (
    <div>
      <Navbar />
      <div className={className}>{children}</div>
      <div className="mt-5 pt-5 pb-5 footer text-white " style={{background:"#212121"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2 id="brandName">Shopper</h2>
              <p className="pt-3  text-white-50 m-auto">
                Welcome to our wide collection of rare books and novels. 
              </p>
              <p>
                <a href="/">
                  <i className="fa fa-facebook-square mr-1"></i>
                </a>
                <a href="/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                <li className="my-3">
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li className="my-3">
                  <a href="/occasions" className="text-white">
                    Occasions
                  </a>
                </li>
                <li className="my-3">
                  <a href="/cart" className="text-white">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <Typography variant="button" className="">
                Connect with us
              </Typography>
              <div className="connect-with-us-icons mt-3">
                <IconButton>
                  <FacebookIcon fontSize="large" style={{color:"white"}} />
                </IconButton>
                <IconButton>
                  <InstagramIcon fontSize="large" style={{color:"white"}} />
                </IconButton>
                <IconButton>
                  <TwitterIcon fontSize="large" style={{color:"white"}} />
                </IconButton>
                <IconButton>
                  <YouTubeIcon fontSize="large" style={{color:"white"}} />
                </IconButton>
              </div>
              
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2022. Just a Project.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
