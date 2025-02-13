import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

const MyPortfolio = () => {
  return (
    <section>
      <h1 className="work-experience">Work Experience</h1>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2024 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">ChainAware</h3>
            <h4 className="vertical-timeline-element-subtitle">Switzerland</h4>
            <p>Community Manager. Discord, Telegram</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">SmartCredit</h3>
            <h4 className="vertical-timeline-element-subtitle">Switzerland</h4>
            <p>Community Manager</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">ONEG8</h3>
            <h4 className="vertical-timeline-element-subtitle">Switzerland</h4>
            <p>Community Manager, Twitter</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">ATROMG8 NETWORK</h3>
            <h4 className="vertical-timeline-element-subtitle">Switzerland</h4>
            <p>Community Manager</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Biki Exchange</h3>
            <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
            <p>Community Manager</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              ALPHA Consulting services
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Customer Relationship Management</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="November 2021"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              ALPHA Consulting services
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Human Resource Management</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="October 2021"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Ilorin, Nigeria
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.sc in Finance
            </h4>
            <p>FINANCE</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
            date="2013 - 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "black" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Kwara State Polytechnic, Nigeria
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Diploma
            </h4>
            <p>Banking and Finance</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "black" }}
            icon={<MdOutlineStarPurple500 />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default MyPortfolio;
