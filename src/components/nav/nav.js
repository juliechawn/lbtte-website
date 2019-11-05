import { Link } from "gatsby"
import React, { Component } from "react"
import "../layout.css"
import "./nav.css"
import Logo from "../logolilac"
import { CSSTransitionGroup } from "react-transition-group"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayHamburgerMenu: false,
      scroll: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    if (window.pageYOffset > 100) {
      this.setState({
        scroll: true,
      })
    } else {
      this.setState({
        scroll: false,
      })
    }
  }

  render() {
    let hamburgerMenu
    if (this.state.displayHamburgerMenu === true) {
      hamburgerMenu = (
        <div className="mobile mobile-slider">
          <div className="mobile-slider-div">
            <div className="slider-group">
              <div className="bb slider-group-header">EVENTS</div>
              <div>
                <Link to="/services/" className="br slider-group-link">
                  WHAT WE DO
                </Link>
              </div>
              <div>
                <Link to="/events/" className="br slider-group-link">
                  WHAT WE'VE DONE
                </Link>
              </div>
            </div>
            <div className="slider-group">
              <div className="bb slider-group-header">ABOUT</div>
              <Link to="/about/" className="br slider-group-link">
                WHO WE ARE
              </Link>
              <Link to="/contact/" className="br slider-group-link">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div id="nav">
        <div className="nav">
          <div
            className={
              this.state.displayHamburgerMenu
                ? "navbar-menu"
                : "nav" && this.state.scroll
                ? "navbar navbar-scroll"
                : "navbar"
            }
          >
            <div
              className={
                this.state.scroll ? "logo-scroll four-opacity" : "logo"
              }
            >
              <Logo />
            </div>
            <div className="title-btn">
              <div className="br menu-title">MENU</div>
              <div
                className="menu-btn scaled"
                onClick={() =>
                  this.setState({
                    displayHamburgerMenu: !this.state.displayHamburgerMenu,
                  })
                }
              >
                <div
                  className={
                    this.state.displayHamburgerMenu ? "change bar1" : "bar1"
                  }
                />
                <div
                  className={
                    this.state.displayHamburgerMenu ? "change bar2" : "bar2"
                  }
                />
                <div
                  className={
                    this.state.displayHamburgerMenu ? "change bar3" : "bar3"
                  }
                />
              </div>
            </div>
          </div>

          <div className="tagline-btn-div">
            <div className="br tagline">
              <span className="tag">Thoughtfully</span>
              <span className="tag">curated</span>
              <span className="tag">experiences</span>
            </div>
            <div className="btns">
              <button className="btn">
                <span className="btn-text">Plan a Trip</span>
              </button>
              <button className="btn">
                <span className="btn-text">Plan an Event</span>
              </button>
            </div>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {hamburgerMenu}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Nav
