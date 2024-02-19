import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { setFormatDate, setDaysOfWeek } from "../utils/date";
import TodayPrimaryCard from "../components/cards/TodayPrimaryCard";
import "../style/today.scss";

const Today: React.FC = () => {
  const currentDay = setFormatDate(new Date());
  const daysOfWeek = setDaysOfWeek(new Date());
  const activeKey = ["0", "1", "2"];

  return (
    <Container className="container">
      <Row md={3}>
        <Col>
          <TodayPrimaryCard
            key={currentDay}
            currentDay={currentDay}
            activeKey={activeKey}
          />
        </Col>
        <Col>
          {daysOfWeek.slice(0, 3).map((item) => (
            <TodayPrimaryCard key={item} currentDay={item} />
          ))}
        </Col>
        <Col>
          {daysOfWeek.slice(3, 6).map((item) => (
            <TodayPrimaryCard key={item} currentDay={item} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Today;
